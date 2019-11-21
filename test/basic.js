const frag = require('../')
const {basename, resolve} = require('path')
const t = require('tap')

const {readdirSync, readFileSync} = require('fs')
const fixtureDir = resolve(__dirname, 'fixtures')
const fixtures = readdirSync(fixtureDir)
  .filter(f => /\.raw/.test(f))
  .map(f => [f, basename(f, '.raw') + '.frag'])

fixtures.forEach(f => t.test(basename(f[0], '.raw'), t => {
  const raw = readFileSync(resolve(fixtureDir, f[0]), 'utf8')
  const expect = readFileSync(resolve(fixtureDir, f[1]), 'utf8')
  const fragged = frag(raw)
  t.equal(fragged, expect)
  t.end()
}))
