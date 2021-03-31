const diffFrag = require('../')
const diff = `--- expected
+++ actual
this is not a diff line
`

const t = require('tap')
t.throws(() => diffFrag(diff), { message: 'invalid diffline "this is not a diff line\\n"' })

const diffAt = `--- expected
+++ actual
@@ not a walking robot @@
+ hello
- world
`
t.throws(() => diffFrag(diffAt), { message: 'invalid diffline "@@ not a walking robot @@\\n"' })
