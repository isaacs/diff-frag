const frag = require('../')
const {basename, resolve} = require('path')
const t = require('tap')

const {readdirSync, readFileSync} = require('fs')
const fixtureDir = resolve(__dirname, 'fixtures')
const fixtures = readdirSync(fixtureDir)
  .filter(f => /\.raw/.test(f))
  .map(f => [f, basename(f, '.raw') + '.frag'])

const extraHeader = `Well, it starts with a
--- expected
and then it ends with a
+++ actual
but they have to be together.
`
fixtures.forEach(f => t.test(basename(f[0], '.raw'), t => {
  const raw = readFileSync(resolve(fixtureDir, f[0]), 'utf8')
  const expect = readFileSync(resolve(fixtureDir, f[1]), 'utf8')
  const fragged = frag(raw)
  t.equal(fragged, expect)
  t.equal(frag(raw.trimRight()), expect, 'add the trailing \\n if missing')
  t.equal(frag(fragged), expect, 'double frag')
  t.equal(frag(fragged, { hasHeader: true }), expect, 'double frag with header:true')
  t.equal(frag(`${extraHeader}${fragged}`), `${extraHeader}${expect}`, 'frag with extra header junk')
  t.equal(frag(`${extraHeader}${fragged}`, { hasHeader: true }), `${extraHeader}${expect}`, 'frag with extra header junk and header:true')

  t.matchSnapshot(frag(fragged.replace(/(@@[^@\n]+@@) [^\n]+/g, '$1')), expect, 'without the @@ contexts')
  t.matchSnapshot(frag(raw, {
    oldName: 'the-old-name',
    oldHeader: 'some words about this old thing',
    newName: 'new-name',
    newHeader: 'a head, er... i guess?',
  }), 'with specified headers and names')

  t.end()
}))
