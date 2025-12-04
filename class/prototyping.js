let obj1={
    a:1,
    b:2
}
let obj2={
    c:3,
    d:4
}

console.log(Object.prototype == obj2.__proto__);  //true
console.log(obj2.a);  //undefined
obj2.__proto__=obj1
console.log(obj2.a); //1

console.log(obj1.prototype == obj2.prototype);  //true
console.log(Object.prototype == obj2.__proto__.__proto__);  //true
console.log(Object.prototype.__proto__ == null); //true
console.log(Object.prototype == Array.prototype); //false
console.log(Object.prototype == Array.prototype.__proto__); //true
console.log(Object.prototype.__proto__ == Array.prototype.__proto__.__proto__); //true

// console.log(Object.prototype); //[Object: null prototype] {}
// console.log(typeof Object.prototype);  //Object
// console.log(typeof Array.prototype);  //Object
// console.log(Array.prototype); //Object(0) []

