
// //1 => 1,2,3
// console.log("1");
// setTimeout(() => console.log("2"), 0);
// console.log("3");

// //2 => start,end,promise,timeout    
// console.log("start");
// setTimeout(() => console.log("timeout"), 0);
// Promise.resolve().then(() => console.log("promise"));
// console.log("end");

// //3 => A,F,D,B,C,E
// console.log("A");
// setTimeout(() => {
//   console.log("B");
//   Promise.resolve().then(() => console.log("C"));
// }, 0);
// Promise.resolve().then(() => {
//   console.log("D");
//   setTimeout(() => console.log("E"), 0);
// });
// console.log("F");

//4 Promise chain -> 1,5,2,4,3
console.log("1");
Promise.resolve()
  .then(() => {
    console.log("2");
    return Promise.resolve("3");
  })
  .then((val) => console.log(val));
Promise.resolve().then(() => console.log("4"));
console.log("5");
//When a .then() handler returns Promise.resolve("3") (a thenable), JS schedules an extra internal microtask tick called PromiseResolveThenableJob to unwrap it. So "4" sneaks in before "3" gets resolved. If you returned a plain value return "3" — then 3 would come before 4.
// plain value  → no extra tick → 3 before 4 -> 3,4
// .then(() => { console.log("2"); return "3" })
// Promise.resolve() → extra tick → 4 before 3 -> 4,3
// .then(() => { console.log("2"); return Promise.resolve("3") })

//5. async await ->  before, foo start, after, foo end
// async function foo() {
//   console.log("foo start");
//   await Promise.resolve();
//   console.log("foo end");
// }
// console.log("before");
// foo();
// console.log("after");
// // await suspends the async function and returns control to the call stack immediately.

//6. Boss Level -> 1,7,4,6,5,2,3
// console.log("1");
// setTimeout(() => console.log("2"), 0);
// setTimeout(() => console.log("3"), 0);
// Promise.resolve()
//   .then(() => {
//     console.log("4");
//     return Promise.resolve();
//   })
//   .then(() => console.log("5"));
// Promise.resolve().then(() => console.log("6"));
// console.log("7");