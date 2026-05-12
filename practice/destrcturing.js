//1. Nested Object Destructuring
// Task: Extract city and zone in a single destructuring line.
const user = {
  name: "John",
  address: {
    city: "Mumbai",
    pincode: {
      area: 400001,
      zone: "West"
    }
  }
};
// const {name,address:{city,pincode:{area,zone}}} = user
const {address:{city,pincode:{area,zone}}} = user
console.log(city,zone)

//2. Rename + Default Value
const settings = {
  theme: "dark",
  fontsize: undefined
};
// The rename syntax is { originalKey: newName }, not newName=originalKey
const {theme:mode,fontsize:size=16} = settings
console.log(mode,size)

//3. Function Parameter Destructuring
// Task: Write a function getInfo that accepts this object and uses parameter destructuring to print name, salary, and floor.
const employee = {
  name: "Sara",
  salary: 50000,
  dept: { title: "Engineering", floor: 3 }
};
getInfo(employee)
// var getInfo = ({name,salary,dept:{title,floor}}) =>{   // gives type Error as getInfo is not a fn because ()=> is not hosted use noraml fn 
//     console.log(name,salary,floor)
// }
function getInfo({name,salary,dept:{title,floor}}){
    console.log(name,salary,floor)
}

//3. Mixed Array + Object Destructuring
//Task: Extract only the name of the second user using destructuring.
const data = {
  users: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ]
};
const {users:[{},{name}]} = data
console.log(name)

//5. Skip + Rest in Array
//Task: Skip 10 and 20, store 30 in a variable called third, and collect the remaining values in an array called rest.
const nums = [10, 20, 30, 40, 50, 60];
const [,,third,...rest] = nums
console.log(third,rest)

//6. Swap Without Temp Variable
//Task: Swap x and y using only destructuring (no temp variable).
let x = 100;
let y = 200;
[x,y] = [y,x]
console.log(x,y)


//Basic Concepts

//1. skip elements with empty commas
const [, second, , fourth = 99] = [1,2,3]

//2. Object
// second=2  fourth=99 (default)
// const user = { name: "Sara", age: 25, city: "Delhi" }
// const { name, age } = user
// // name="Sara"  age=25

// // rename while destructuring
// const { name: fullName, age: years } = user
// // fullName="Sara"  years=25

// default value
const { role = "guest" } = user
console.log(role)
// role="guest" (key doesn't exist)

//3. rest in Destructuring
// Array rest
const [first, ...others] = [1, 2, 3, 4]
// first=1  others=[2,3,4]

// Object rest
const { a, b, ...remaining } = { a:1, b:2, c:3, d:4 }
// a=1  b=2  remaining={c:3, d:4}

//4. Nested
const order = {
  id: 101,
  product: { name: "Laptop", specs: { ram: 16, ssd: 512 } },
  customer: [{ name: "Raj" }, { name: "Priya" }]
}

const { product: { specs: { ram } }, customer: [, { name: secondno }] } = order
// ram=16  secondno="Priya"

//5. function Params
// Instead of:
// function show(user) { const name = user.name ... }

// Do this:
// function show({ name, age = 18, address: { city } }) {
//   console.log(name, age, city)
// }

// // With default entire object (safe against undefined call)
// function greet({ name = "Guest" } = {}) {
//   console.log(`Hello ${name}`)
// }
// greet()          // Hello Guest ✅ no crash
// greet(undefined) // Hello Guest ✅ no crash

// 6. Destructring in loop 
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
]

for (const { id, name } of users) {
  console.log(id, name) // 1 Alice, 2 Bob
}

// with Object.entries
for (const [key, val] of Object.entries({ a:1, b:2 })) {
  console.log(key, val) // "a" 1 , "b" 2
}

//7. Tricks & Traps
//a undefined vs null — defaults don't fire on null
// Default values only activate when the value is undefined, NOT null.
// const { a = 10 } = { a: undefined }  // a=10 ✅
// const { b = 10 } = { b: null }       // b=null ⚠️ not 10!
// const { c = 10 } = { c: 0 }  


// const products = [
//   { id: 1, info: { name: "Phone", price: 999 } },
//   { id: 2, info: { name: "Tab",   price: 499 } }
// ]

// const names = products.map(({ info: { name } }) => name)
// // ["Phone", "Tab"]

// const discounted = products.map(({ id, info: { name, price } }) => ({
//   id, name, price: price * 0.9
// }))