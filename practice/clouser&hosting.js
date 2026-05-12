//------------------------------ hosting ---------------------------
//1. basic 
console.log(x); //undefined
var x = 10;
console.log(x); //10

//2. Function vs var
console.log(typeof foo); //function
var foo = "hello";
console.log(typeof foo); //string

function foo() {} 
console.log(typeof foo); //string
// Function declarations are hoisted first and fully — they beat var. So at the very top, foo is already the function.
// At runtime, var foo = "hello" overwrites it → string.
// function foo(){} is a declaration — it has no runtime assignment, already done at hoist time.
// So third log is still "string", not "function".

//3. TDZ 
console.log(a); //a
console.log(b); //reference error -> b is not initialized
console.log(c); //reference error -> c is not initialized

var a = 1; 
let b = 2;
const c = 3; 

//4. Function Expression vs Declaration
greet(); //Hey!
hello(); //TypeError 

function greet() {
  console.log("Hey!");
}

var hello = function() {
  console.log("Hello!");
};
// hello is hoisted as undefined (var). So calling undefined() is not "print undefined" — 
// it crashes with TypeError: hello is not a function. Big difference in interviews!

//5. Hoisting inside Block
console.log(x); //undefined

if (true) {
  var x = 5;
  let y = 10;
}

console.log(x); //5 
console.log(y); //reference error
// Second console.log(x) → 5 not undefined. var has no block scope — it leaks out of if{}, so x=5 is visible globally.
// Third console.log(y) → ReferenceError: y is not defined. let is block scoped — y dies when the if{} block closes.

//6.Boss Level
var x = 1;

function outer() {
  console.log(x);  //undefined
  var x = 2;

  function inner() {
    console.log(x);  //undefined
    var x = 3;
    console.log(x);  //3
  }
  inner();
  console.log(x); //2
}

outer();
console.log(x); //1

//-------------------------------- clousers ------------------------------
//1. Classic loop
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
//3,3,3
// And your explanation is spot on — var is function scoped, loop finishes with i=3, all 3 timeouts fire and read the same i.
// Fix 1 — use let (block scoped, each iteration gets its own i)
// javascriptfor (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0) // 0 1 2 ✅
// }
// Fix 2 — IIFE to capture i
// javascriptfor (var i = 0; i < 3; i++) {
//   (function(j) {
//     setTimeout(() => console.log(j), 0) // 0 1 2 ✅
//   })(i)
// }

//2. Closure + Counter
function makeCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}
const counter = makeCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount()); //2

//3. Clouser in clousers
function outer() {
  let x = 10;

  function middle() {
    let y = 20;

    function inner() {
      let z = 30;
      console.log("clousers in clousers => ",x + y + z);
    }
    x = 50;
    inner();
  }
  middle();
}
outer(); //100

//4. Stale Closure Trap
function createFns() {
  const fns = [];
  for (var i = 0; i < 4; i++) {
    fns.push(function() { return i; });
  }
  return fns;
}
const fns = createFns();
console.log(fns[0]());
console.log(fns[1]());
console.log(fns[2]());
//This is the same trap as Q1 but deeper.
// var i is function scoped — all 4 functions share the exact same i.
// After the loop ends, i = 4 (loop ran until i < 4 failed).
// Every fns[n]() call reads that same i which is now 4.
// You mixed this up with the fixed version using let. With let it would give 0,1,2,3 — but the question uses var.

//5. once function
function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

const init = once((x) => x * 10); //work only once that it set called true direct return old value that is 50
console.log(init(5)); //50 work first time if statement work result store value 50 , return always 50 for futures calls
console.log(init(9)); //50
console.log(init(3));  //50


//Boss level
function a() {
  let x = 1;
  function b() {
    let x = 2;
    function c() {
      console.log(x);
    }
    return c;
  }
  x = 5;
  return b;
}

const b = a();
const c = b();
c(); //2

