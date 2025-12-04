"use strict";
// x = 10;   // ❌ ReferenceError: x is not defined

// let a = 10;
// delete a;   // ❌ SyntaxError

// function sum(a, a, b) {  // ❌ SyntaxError (No duplicate parameter names)
//   return a + a + b;
// }
// sum(1,2,3);

// function f() { console.log(this); }
// f(); // logs undefined

// let num = 010;  // ❌ SyntaxError (leading 0 not allowed)

// const obj = {};
// Object.defineProperty(obj, "x", { value: 42, writable: false });
// obj.x = 9;   // ❌ TypeError


// // Reserved keywords Words like implements, interface, let, package, private, protected, public, static, yield cannot be used as variable names in strict mode.
// let public = 10;  // ❌ SyntaxError

// function abc(){
//     a=10;
//     console.log(a);
// }
// abc()
function xyz(){
    console.log(this);
}
xyz(); //undefined