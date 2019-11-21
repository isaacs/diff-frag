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
+    500,
-    501,
-    502,
-    503,
   ],
   "501x": Array [
     501,
@@ -3003,21 +2997,6 @@ Object {
     998,
   ],
   "999x": Array [
-    1998,
+    999,
-    1000,
-    1001,
-    1002,
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
