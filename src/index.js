//To use await/asyc we need this pollyfill, and it should be loaded initially
//http://stackoverflow.com/questions/36619383/referenceerror-regeneratorruntime-is-not-defined-but-working-inside-a-scope
require("babel-polyfill")
require("./app")
