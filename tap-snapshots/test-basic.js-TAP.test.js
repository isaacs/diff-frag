/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/basic.js TAP 10 > --- expected
+++ actual
@@ -1,9 +1,6 @@ Object {
 Object {
   "0x": Array [
     0,
-    1,
-    2,
-    3,
   ],
   "1x": Array [
     1,
@@ -32,8 +29,4 @@ Object {
   "9x": Array [
     9,
   ],
-  "0x_": Array [
-    1,
-  ],
-  "0y": 0,
 }
 1`] = `
--- expected
+++ actual
@@ -1,9 +1,6 @@ Object {
 Object {
   "0x": Array [
     0,
-    1,
-    2,
-    3,
   ],
   "1x": Array [
     1,
@@ -32,8 +29,4 @@
   "9x": Array [
     9,
   ],
-  "0x_": Array [
-    1,
-  ],
-  "0y": 0,
 }

`

exports[`test/basic.js TAP 10 > with specified headers and names 1`] = `
--- expected
+++ actual
@@ -1,9 +1,6 @@ Object {
 Object {
   "0x": Array [
     0,
-    1,
-    2,
-    3,
   ],
   "1x": Array [
     1,
@@ -32,8 +29,4 @@ Object {
   "9x": Array [
     9,
   ],
-  "0x_": Array [
-    1,
-  ],
-  "0y": 0,
 }

`

exports[`test/basic.js TAP 100 > --- expected
+++ actual
@@ -150,10 +150,7 @@ Object {
     49,
   ],
   "50x": Array [
-    100,
-    51,
-    52,
-    53,
+    50,
   ],
   "51x": Array [
     51,
@@ -302,8 +299,4 @@ Object {
   "99x": Array [
     99,
   ],
-  "50x_": Array [
-    51,
-  ],
-  "50y": 50,
 }
 1`] = `
--- expected
+++ actual
@@ -150,10 +150,7 @@
     49,
   ],
   "50x": Array [
-    100,
-    51,
-    52,
-    53,
+    50,
   ],
   "51x": Array [
     51,
@@ -302,8 +299,4 @@
   "99x": Array [
     99,
   ],
-  "50x_": Array [
-    51,
-  ],
-  "50y": 50,
 }

`

exports[`test/basic.js TAP 100 > with specified headers and names 1`] = `
--- expected
+++ actual
@@ -150,10 +150,7 @@ Object {
     49,
   ],
   "50x": Array [
-    100,
-    51,
-    52,
-    53,
+    50,
   ],
   "51x": Array [
     51,
@@ -302,8 +299,4 @@ Object {
   "99x": Array [
     99,
   ],
-  "50x_": Array [
-    51,
-  ],
-  "50y": 50,
 }

`

exports[`test/basic.js TAP 1000 > --- expected
+++ actual
@@ -1,9 +1,6 @@ Object {
 Object {
   "0x": Array [
     0,
-    1,
-    2,
-    3,
   ],
   "1x": Array [
     1,
@@ -1503,10 +1500,7 @@ Object {
     499,
   ],
   "500x": Array [
-    1000,
-    501,
-    502,
-    503,
+    500,
   ],
   "501x": Array [
     501,
@@ -3003,21 +2997,6 @@ Object {
     998,
   ],
   "999x": Array [
-    1998,
-    1000,
-    1001,
-    1002,
+    999,
   ],
-  "0x_": Array [
-    1,
-  ],
-  "0y": 0,
-  "500x_": Array [
-    501,
-  ],
-  "500y": 500,
-  "999x_": Array [
-    1000,
-  ],
-  "999y": 999,
 }
 1`] = `
--- expected
+++ actual
@@ -1,9 +1,6 @@ Object {
 Object {
   "0x": Array [
     0,
-    1,
-    2,
-    3,
   ],
   "1x": Array [
     1,
@@ -1503,10 +1500,7 @@
     499,
   ],
   "500x": Array [
-    1000,
-    501,
-    502,
-    503,
+    500,
   ],
   "501x": Array [
     501,
@@ -3003,21 +2997,6 @@
     998,
   ],
   "999x": Array [
-    1998,
-    1000,
-    1001,
-    1002,
+    999,
   ],
-  "0x_": Array [
-    1,
-  ],
-  "0y": 0,
-  "500x_": Array [
-    501,
-  ],
-  "500y": 500,
-  "999x_": Array [
-    1000,
-  ],
-  "999y": 999,
 }

`

exports[`test/basic.js TAP 1000 > with specified headers and names 1`] = `
--- expected
+++ actual
@@ -1,9 +1,6 @@ Object {
 Object {
   "0x": Array [
     0,
-    1,
-    2,
-    3,
   ],
   "1x": Array [
     1,
@@ -1503,10 +1500,7 @@ Object {
     499,
   ],
   "500x": Array [
-    1000,
-    501,
-    502,
-    503,
+    500,
   ],
   "501x": Array [
     501,
@@ -3003,21 +2997,6 @@ Object {
     998,
   ],
   "999x": Array [
-    1998,
-    1000,
-    1001,
-    1002,
+    999,
   ],
-  "0x_": Array [
-    1,
-  ],
-  "0y": 0,
-  "500x_": Array [
-    501,
-  ],
-  "500y": 500,
-  "999x_": Array [
-    1000,
-  ],
-  "999y": 999,
 }

`

exports[`test/basic.js TAP long-header > --- expected
+++ actual
@@ -11,9 +11,12 @@ Object except that this is ...
   "2x": Array [
     2,
   ],
-  "3x": Array [
-    3,
-  ],
+  "4x": Array [
+    4,
+  ],
+  "5x": Array [
+    5,
+  ],
   "6x": Array [
     6,
   ],
@@ -26,7 +29,5 @@ Object except that this is ...
   "9x": Array [
     9,
   ],
-  "0x_": Array [
-    1,
-  ],
+  "0y": 0,
 }
 1`] = `
--- expected
+++ actual
@@ -11,9 +11,12 @@
   "2x": Array [
     2,
   ],
-  "3x": Array [
-    3,
-  ],
+  "4x": Array [
+    4,
+  ],
+  "5x": Array [
+    5,
+  ],
   "6x": Array [
     6,
   ],
@@ -26,7 +29,5 @@
   "9x": Array [
     9,
   ],
-  "0x_": Array [
-    1,
-  ],
+  "0y": 0,
 }

`

exports[`test/basic.js TAP long-header > with specified headers and names 1`] = `
--- expected
+++ actual
@@ -11,9 +11,12 @@ Object except that this is ...
   "2x": Array [
     2,
   ],
-  "3x": Array [
-    3,
-  ],
+  "4x": Array [
+    4,
+  ],
+  "5x": Array [
+    5,
+  ],
   "6x": Array [
     6,
   ],
@@ -26,7 +29,5 @@ Object except that this is ...
   "9x": Array [
     9,
   ],
-  "0x_": Array [
-    1,
-  ],
+  "0y": 0,
 }

`

exports[`test/basic.js TAP no-header > --- expected
+++ actual
@@ -1,9 +1,6 @@ Object {
 Object {
   "0x": Array [
     0,
-    1,
-    2,
-    3,
   ],
   "1x": Array [
     1,
@@ -32,8 +29,4 @@ Object {
   "9x": Array [
     9,
   ],
-  "0x_": Array [
-    1,
-  ],
-  "0y": 0,
 }
 1`] = `
--- expected
+++ actual
@@ -1,9 +1,6 @@ Object {
 Object {
   "0x": Array [
     0,
-    1,
-    2,
-    3,
   ],
   "1x": Array [
     1,
@@ -32,8 +29,4 @@
   "9x": Array [
     9,
   ],
-  "0x_": Array [
-    1,
-  ],
-  "0y": 0,
 }

`

exports[`test/basic.js TAP no-header > with specified headers and names 1`] = `
--- the-old-name	some words about this old thing
+++ new-name	a head, er... i guess?
@@ -1,9 +1,6 @@ Object {
 Object {
   "0x": Array [
     0,
-    1,
-    2,
-    3,
   ],
   "1x": Array [
     1,
@@ -32,8 +29,4 @@ Object {
   "9x": Array [
     9,
   ],
-  "0x_": Array [
-    1,
-  ],
-  "0y": 0,
 }

`

exports[`test/basic.js TAP with-header > commit ada5577d7e8134510b73e365110ec6ffd6c45b5e
Author: isaacs <i@izs.me>
Date:   Wed Nov 20 20:13:08 2019 -0800

    More intuitively compare and print iterables

    Fix #7

diff --git a/lib/format.js b/lib/format.js
index 89f929a..b0c7820 100644
--- expected
+++ actual
@@ -1,9 +1,6 @@ Object {
 Object {
   "0x": Array [
     0,
-    1,
-    2,
-    3,
   ],
   "1x": Array [
     1,
@@ -1503,10 +1500,7 @@ Object {
     499,
   ],
   "500x": Array [
-    1000,
-    501,
-    502,
-    503,
+    500,
   ],
   "501x": Array [
     501,
@@ -3003,21 +2997,6 @@ Object {
     998,
   ],
   "999x": Array [
-    1998,
-    1000,
-    1001,
-    1002,
+    999,
   ],
-  "0x_": Array [
-    1,
-  ],
-  "0y": 0,
-  "500x_": Array [
-    501,
-  ],
-  "500y": 500,
-  "999x_": Array [
-    1000,
-  ],
-  "999y": 999,
 }
 1`] = `
commit ada5577d7e8134510b73e365110ec6ffd6c45b5e
Author: isaacs <i@izs.me>
Date:   Wed Nov 20 20:13:08 2019 -0800

    More intuitively compare and print iterables

    Fix #7

diff --git a/lib/format.js b/lib/format.js
index 89f929a..b0c7820 100644
--- expected
+++ actual
@@ -1,9 +1,6 @@ Object {
 Object {
   "0x": Array [
     0,
-    1,
-    2,
-    3,
   ],
   "1x": Array [
     1,
@@ -1503,10 +1500,7 @@
     499,
   ],
   "500x": Array [
-    1000,
-    501,
-    502,
-    503,
+    500,
   ],
   "501x": Array [
     501,
@@ -3003,21 +2997,6 @@
     998,
   ],
   "999x": Array [
-    1998,
-    1000,
-    1001,
-    1002,
+    999,
   ],
-  "0x_": Array [
-    1,
-  ],
-  "0y": 0,
-  "500x_": Array [
-    501,
-  ],
-  "500y": 500,
-  "999x_": Array [
-    1000,
-  ],
-  "999y": 999,
 }

`

exports[`test/basic.js TAP with-header > with specified headers and names 1`] = `
commit ada5577d7e8134510b73e365110ec6ffd6c45b5e
Author: isaacs <i@izs.me>
Date:   Wed Nov 20 20:13:08 2019 -0800

    More intuitively compare and print iterables

    Fix #7

diff --git a/lib/format.js b/lib/format.js
index 89f929a..b0c7820 100644
--- expected
+++ actual
@@ -1,9 +1,6 @@ Object {
 Object {
   "0x": Array [
     0,
-    1,
-    2,
-    3,
   ],
   "1x": Array [
     1,
@@ -1503,10 +1500,7 @@ Object {
     499,
   ],
   "500x": Array [
-    1000,
-    501,
-    502,
-    503,
+    500,
   ],
   "501x": Array [
     501,
@@ -3003,21 +2997,6 @@ Object {
     998,
   ],
   "999x": Array [
-    1998,
-    1000,
-    1001,
-    1002,
+    999,
   ],
-  "0x_": Array [
-    1,
-  ],
-  "0y": 0,
-  "500x_": Array [
-    501,
-  ],
-  "500y": 500,
-  "999x_": Array [
-    1000,
-  ],
-  "999y": 999,
 }

`
