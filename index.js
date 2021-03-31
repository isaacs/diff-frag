// states
const HEADER = Symbol('HEADER')
const HEADER_MAYBE_END = Symbol('HEADER MAYBE END')
const BEFORE = Symbol('BEFORE')
const IN_PATCH = Symbol('IN PATCH')
const AFTER = Symbol('AFTER')

module.exports = (diff, options = {}) => {
  const {
    contextLines = 3,
    hasHeader = null,
  } = options
  let {
    oldName = 'expected',
    newName = 'actual',
    oldHeader = '',
    newHeader = '',
  } = options

  let header = ''
  if (hasHeader === null) {
    // not specified, so we have to try to guess.
    // guessing is as good as finding it, so let's do that, too
    const minusPlus = /(?:\n|^)---(?: [^\n]*)?\n\+\+\+(?: [^\n]*)(?:\n|$)/
    const mpMatch = diff.match(minusPlus)
    if (mpMatch) {
      header = diff.substr(0, mpMatch.index + mpMatch[0].length)
      diff = diff.substr(mpMatch.index + mpMatch[0].length)
    }
  }

  let state = hasHeader ? HEADER : BEFORE
  let pretty = hasHeader ? ''
    : header ? header // if we just calculated it above
    : `--- ${oldName}${oldHeader ? `\t${oldHeader}` : ''}
+++ ${newName}${newHeader ? `\t${newHeader}` : ''}
`

  const beforeContext = []
  const afterContext = []
  // @@ -<oldStart>,<oldLines> +<newStart>,<newLines> @@ context
  let oldStart = 1
  let oldLines = 0
  let newStart = 1
  let newLines = 0
  let atContext = ''

  // empty lines are ok in the header, but everything else must be
  // prefixed with '+', '-', or ' ', or be an '@@ ... @@' line
  const re = /(.)([^\n]*)(\n|$)|([^\n]*)\n/g
  if (!/\n$/.test(diff))
    diff += '\n'

  let match
  let patch = ''
  let oldPatch = ''
  let newPatch = ''

  const finishPatch = () => {
    patch += oldPatch + newPatch
    oldPatch = ''
    newPatch = ''
    const actualContext = afterContext.slice(0, contextLines)
    const extraContext = afterContext.length - actualContext.length
    patch += actualContext.join('')
    if (!patch)
      return

    // back up as many lines as we had extra context thrown away,
    // since we aren't using that now in this patch section
    oldLines -= extraContext
    newLines -= extraContext
    pretty += `@@ -${oldStart},${oldLines} ` +
      `+${newStart},${newLines} @@${atContext ? ` ${atContext}` : ''}\n${patch}`
    beforeContext.length = 0
    beforeContext.push(...afterContext.slice(contextLines + 1))
    for (const line of beforeContext)
      setAtContext(line)
    newStart += newLines + 1
    oldStart += oldLines + 1
    patch = ''
    oldPatch = ''
    newPatch = ''
    oldLines = 0
    newLines = 0

    afterContext.length = 0
    state = BEFORE
  }

  const patchLine = () => {
    if (state === AFTER) {
      patch += afterContext.join('')
      afterContext.length = 0
    }
    patch += beforeContext.join('')
    newLines += beforeContext.length
    oldLines += beforeContext.length
    beforeContext.length = 0
    state = IN_PATCH
  }

  const setAtContext = line => {
    if (/^ [^ \t\s]/.test(line) && line.trim()) {
      atContext = line.slice(1).trim()
      if (atContext.length > 30)
        atContext = atContext.slice(0, 27) + '...'
    }
  }

  const spaceBefore = line => {
    beforeContext.push(line)
    if (beforeContext.length > contextLines) {
      setAtContext(beforeContext.shift())
      oldStart ++
      newStart ++
    }
  }

  const spaceInPatch = line => {
    // this could be EITHER the afterContext, OR an unchanged line
    // in the middle of a +/- section
    oldLines++
    newLines++
    patch += oldPatch + newPatch
    oldPatch = ''
    newPatch = ''
    afterContext.push(line)
    state = AFTER
  }

  const spaceAfter = line => {
    // ok, we've gotten a few lines now and no more differences
    // maybe wrap it up, but only if we're far enough along that
    // any subsequent BEFORE state will not overlap.
    oldLines++
    newLines++
    afterContext.push(line)
    if (afterContext.length === contextLines * 2 + 1) {
      finishPatch()
    }
  }

  WHILE: while (match = re.exec(diff)) {
    const line = match[0]
    if (state === HEADER) {
      pretty += line
      state = /^---( [^\n]*)?\n$/.test(line) ? HEADER_MAYBE_END : HEADER
      continue
    }
    if (state === HEADER_MAYBE_END) {
      pretty += line
      state = /^\+\+\+( [^\n]*)?\n$/.test(line) ? BEFORE : HEADER
      continue
    }
    switch (match[1]) {
      case ' ':
        switch (state) {
          case BEFORE:
            setAtContext(line)
            spaceBefore(line)
            break
          case IN_PATCH:
            spaceInPatch(line)
            break
          case AFTER:
            spaceAfter(line)
            break
        }
        continue

      case '+':
        patchLine()
        newLines ++
        newPatch += line
        continue

      case '-':
        patchLine()
        oldLines ++
        oldPatch += line
        continue

      case '@':
        // we only care about the start lines, since we'll be calculating the
        // line counts ourselves anyway, and they may change if we're reducing
        // the amount of context we show.
        const atat = /^@@ -([0-9]+),[0-9]+ \+([0-9]+),[0-9]+ @@( [^\n]*)?\n$/
        const atMatch = line.match(atat)
        if (atMatch) {
          finishPatch()
          oldStart = +atMatch[1]
          newStart = +atMatch[2]
          atContext = (atMatch[3] || '').trim()
          newLines = 0
          oldLines = 0
          state = BEFORE
          beforeContext.length = 0
          afterContext.length = 0
          continue
        }
        // fallthrough to error

      default:
        throw new Error('invalid diffline ' + JSON.stringify(line))
    }
  }
  finishPatch()
  return pretty
}
