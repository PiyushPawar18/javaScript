
//1.  Basic Scope Chain Lookup
let a = "global";
function outer() {
  let a = "outer";
  function inner() {
    console.log(a); //outer
  }
  inner();
}

outer();
console.log(a); //global


//2. shadowing trap
let x = 10;
function foo() {
//   console.log(x); //Reference error
  let x = 20;
  console.log(x); //20
}
foo();

//basic testing
let no = 1234;
function temp(){
    console.log(no)
}
temp();

//3. lexical vs dynamic scope
let val = "global";
function getValue() {
  console.log(val);
}
function outerr() {
  let val = "outer";
  getValue();
}
outerr(); //global
// This is the most important concept in this entire topic.
// JavaScript uses lexical scope — a function's scope chain is decided where it is written, not where it is called.
// getValue is written in global scope → its scope chain only has global scope.
// Even though it is called from inside outer where val = "outer" exists, it cannot see that. It only sees where it was born.



//4.Closure + Scope Chain
function makeMultiplier(x) {
  return function(y) {
    return function(z) {
      return x * y * z;
    }
  }
}

const step1 = makeMultiplier(2);
const step2 = step1(3);
const result = step2(4);
console.log(result); //24

//5. Block Scope vs Function Scope
let resultt = [];

for (let i = 0; i < 3; i++) {
  let j = i * 2;
  resultt.push(function() {
    console.log(i, j);
  });
}

resultt[0](); //0 0
resultt[1](); //1 2
resultt[2](); //2 4 

//6. Boss Level 💀
var xl = 0;
function aa() {
  var xl = 1;
  function b() {
    var xl = 2;
    function c() {
      console.log(xl); //2 //9
    }
    c();
    xl = 9;
    c();
  }
  b();
  console.log(xl); //1
}

aa();
console.log(xl); //0

//aa() scope   → var xl = 1  (never reassigned, b's xl is separate)
// b()  scope   → var xl = 2  → xl = 9  (only b's xl changes)
// global scope → var xl = 0  (never touched)

// console.log(xl) inside aa() → aa's own xl = 1  ← NOT 9
// console.log(xl) global      → global xl   = 0  ← NOT 9