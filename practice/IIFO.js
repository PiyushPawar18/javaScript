// Immediately Invoked Function Expression (IIFO)
// We create a function And immediately run it at the same time
(function () {
   console.log("Hello");
})();
// Why do we use IIFE?
// 1. Create a private scope
// Variables inside IIFE cannot be accessed from outside.
// (function () {
//    let secret = "Hidden";
//    console.log(secret);
// })();

// console.log(secret); // Error

// Why parentheses are needed?
// function () {} //is invalid because functions normally need a name.
// So we wrap it in (). 
(function () {}) //Now JavaScript treats it as a function expression.

const a = 10;
(
    function() {
        let b=20
        console.log(a)
    }
)()
// console.log(b) //ReferenceError: b is not defined