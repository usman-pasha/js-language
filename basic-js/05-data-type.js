"use strict"
// data type

var name = "node js"; //variables
console.log(name);

//datatypes
// String  " "
// integer  2....n
// double   2.34.....n
// char    ' '
// boolean true /false
// float   1.3.....n
//         undefined
//         null
// Array    []
// object    {}
// bigint
// Symbol

// statically Typed
// String java = "programming"//String
// java, c, cpp all are statically typed programming lang;

//Dynamic Typed programming are javaScript phyton php
// var a = "im string";

// 2 types of data-type
// 1.premitive data-type
// 2.non-premitive data-type

//1. premitive data-type
var a = "im string";
console.log("STRING:: " + a);
console.log(typeof a);

var b = 12;
console.log("Number or Integer::", b);

var c = 12.5;
console.log("FLOAT::", c);
console.log(typeof c);

var d = "s";
console.log("CHAR::", d);
console.log(typeof d);

var e = true;
var f = false;
console.log("BOOLEAN::", e, "BOOLEAN::", f);

var g;
console.log("UNDEFINED::", g);

var h = null;
console.log("NULL::", h);

// 2.non-premitive data-type

var arry = ["nodejs", "java", 23, true, null, undefined];
console.log("ARRAY::", arry);

var object = { name: "database", age: 23 };
console.log("OBJECT::", object);
