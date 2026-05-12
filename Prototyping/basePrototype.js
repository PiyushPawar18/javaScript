//1. prototype and __proto__ are two sides of the same coin, but they live in completely different places.
//2. Function.prototype is a property that exists on functions. It's the object that JavaScript uses as a blueprint when you call new. Think of it as "the object that my instances will inherit from."
//3. instance.__proto__ is a property on every object. It's a live pointer to where that object's prototype actually is — the next step up the inheritance chain. Think of it as "the object I am currently borrowing properties from."
//4. The relationship: when you do new Dog("Rex"), JavaScript internally executes rex.__proto__ = Dog.prototype. That single assignment is the entire mechanism.

//------------- Function.prototype ---------------
// A property that exists only on functions. It's the object that will become the __proto__ of every instance created by that function via new.
function Animal(name) {
  this.name = name;
}

// .prototype lives on the function
Animal.prototype.speak = function() {
  return `${this.name} speaks`;
};

const cat = new Animal("Tom"); //internally do cat.__proto__ = Animal.prototype
// JavaScript internally does something like:
// const cat = {};
// cat.__proto__ = Animal.prototype;
// Animal.call(cat, "Tom");
// return cat;
// So: this.name = name;
// becomes: cat.name = "Tom";

console.log(cat.name,cat.speak())

//-------------- Instance.__proto__ --------------------
// A property that exists on every object. It's a live reference pointing to the prototype of that object — the next link in the chain.
// __proto__ lives on the instance
cat.__proto__ === Animal.prototype
// true ✅

cat.__proto__.__proto__
// Object.prototype

cat.__proto__.__proto__.__proto__
// null  ← end of chain



function Dog() {}

// .prototype → on the function
Dog.prototype         // { constructor: Dog }
Dog.__proto__         // Function.prototype  ← Dog is also an object!

const rex = new Dog();
rex.prototype         // undefined  ← .prototype only on functions
rex.__proto__         // Dog.prototype ✅

// Object.getPrototypeOf is the modern equivalent
Object.getPrototypeOf(rex) === rex.__proto__  // true


//i. Use Constructor.prototype when you want to add shared methods to all instances. Methods live in one place in memory — all instances reference the same function, rather than each instance carrying its own copy. This is the memory-efficient pattern that makes JavaScript OOP work.
//ii. Use __proto__ only for reading during debugging or inspection. Reading it is harmless. Setting it (obj.__proto__ = something) is a serious performance problem — it causes JavaScript engines to de-optimize the entire object because they assume prototypes are stable.