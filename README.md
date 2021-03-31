# diff-frag

Take a big diff with or without a 2-line header and turn it into frags with
only a reasonable amount of context

For example, you might have a program that spits out a diff like this:

```diff
some header data
Author: Bobo The Cat <bobo@cat.kitty>
Date: Wed Nov 20 20:13:08 2019 -0800

diff --git a/bowl.txt b/bowl.txt
index glorp..prolg 100655
--- a/bowl.txt
+++ b/bowl.txt
 space-prefixed lines are the same in both
 but we were sloppy in what got included in the diff

 this can happen if you tell git to output a LOT of context, or if you
 have a program that diffs objects in a naive way.

 so you get 1000 lines of identical output ...

 but dumping that all to ta teerminal is so ruuuuuude

-what you want
+what you want is just this bit
+ just the changes

 more more more more more.... it goes on and on for a long time...
```

In that case, what you'd really prefer is something like:

```diff
some header data
Author: Bobo The Cat <bobo@cat.kitty>
Date: Wed Nov 20 20:13:08 2019 -0800

diff --git a/bowl.txt b/bowl.txt
index glorp..prolg 100655
--- a/bowl.txt
+++ b/bowl.txt
@@ -1000,6 +1000,7 @@ so you get 1000 lines of identical...

 but dumping that all to ta teerminal is so ruuuuuude

-what you want
+what you want is just this bit
+just the changes

 more more more more more.... it goes on and on for a long time...
@@ -2456,5 +2567,5 @@ another bit of context here

+ added line
+ well, you get
- removed line
- the idea

 just the changes, is what I'm saying, not the 1000 lines between.
```

This function will take the first kind of string, and turn it into the
second.  It's useful for [test frameworks](https://node-tap.org) that
pretty-print object diffs, for object matching assertions, and want to make
them prettier when the object is really big.

## USAGE

```js
const diffFrag = require('diff-frag')
// options are optional, you don't have to pass that in
const fraggedDiff = diffFrag(rawDiff, options)
// that's it, it's just the one function
```

## OPTIONS

* `contextLines` How many lines of context to show?  Default = 3
* `hasHeader` Set to `true` to indicate that there is a header separated by
  `--- oldName\n+++ newName\n` lines.  Set to `false` to indicate that
  you're definitely only sending just the `+/-/' '`-prefixed diff parts.
  Leave it as the default `null` to tell diffFrag to try to figure it out.
* `oldName` Only relevant if the header can't be found, otherwise it'll use
  the oldName in the header that the diff already has.
* `oldHeader` Only relevant if the header can't be found, otherwise it'll
  use the oldHeader in the header that the diff already has.
* `newName` Only relevant if the header can't be found, otherwise it'll use
  the newName in the header that the diff already has.
* `newHeader` Only relevant if the header can't be found, otherwise it'll
  use the newHeader in the header that the diff already has.

A `---/+++` header is always attached to the diff it returns.  If a header
is found in the diff you provide, then it'll use the names it finds,
otherwise it's generated as:

```js
`---${oldName}\t${oldHeader}\n+++${newName}\t${newHeader}`
```
