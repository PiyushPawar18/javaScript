// Two Types of Property Descriptors (2)

// 1.Data Descriptors – describe value properties.
let obj = {};

// define property with descriptor
Object.defineProperty(obj, "name", {
  value: "Piyush",
  writable: true,     // can change
  enumerable: true,   // shows in loops
  configurable: true  // can delete/modify
});

console.log(obj.name); // Piyush

obj.name = "Amey";     // writable: true → allowed
console.log(obj.name); // Amey

for (let key in obj) {
  console.log(key);    // name (because enumerable: true)
}

// 2.Accessor Descriptors – describe getters/setters (functions for reading/writing).

let person = { firstName: "Piyush", lastName: "Pawar" };

Object.defineProperty(person, "fullName", {
  get: function() {
    return this.firstName + " " + this.lastName;
  },
  set: function(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
  enumerable: true,
  configurable: true
});

console.log(person.fullName); // Piyush Pawar
console.log(person.fullName);

// person.fullName = "Amey Patil";
// console.log(person.firstName); // Amey
// console.log(person.lastName);  // Patil

//******************************************* */
//Object.getOwnPropertyDescriptor(obj,prop)
// let obj = { a: 1, b: 2 };
// console.log(Object.getOwnPropertyDescriptor(obj,"a"));
// console.log(Object.getOwnPropertyDescriptors(obj));