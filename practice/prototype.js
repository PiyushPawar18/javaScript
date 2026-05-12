//Basic Prototype Lookup
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return `Hi, I am ${this.name}`;
};

const p = new Person("Raj");

console.log(p.greet());  //Hi, I am Raj
console.log(p.hasOwnProperty("name")); //true
console.log(p.hasOwnProperty("greet")); //true

//2. __proto__ Chain
const animal = { eats: true };
const dog = { barks: true };

Object.setPrototypeOf(dog, animal);

console.log(dog.barks);
console.log(dog.eats);
console.log(dog.hasOwnProperty("eats"));
console.log(dog.__proto__ === animal);
console.log(animal.__proto__ === dog);


//3. Prototype vs Own Property
function Car(model) {
  this.model = model;
}

Car.prototype.wheels = 4;

const c1 = new Car("Tesla");
const c2 = new Car("BMW");

c1.wheels = 6;

console.log(c1.wheels);
console.log(c2.wheels);
console.log(c1.hasOwnProperty("wheels"));
console.log(c2.hasOwnProperty("wheels"));