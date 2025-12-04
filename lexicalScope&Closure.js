//************************ Lexical Scope ************************* */

//Tip := only father can share own var to child , child not share there own var to father and brother 
//inner fun can access outer scope local variable 
function outer(){
    let username = "piyush";
    function innerOne(){
        console.log("INNER",username);
        let age = 21;
    }
    function innerTwo(){
        console.log("INNER",username);
        // console.log(age) //ReferenceError: age is not defined
    }
    innerOne()
    innerTwo()
    // console.log(age) //ReferenceError: age is not defined
}
outer();
// console.log("OUTER",username)  //ReferenceError: username is not defined


//************************ Closure ************************* */
// “A closure is a function that remembers variables from its outer scope even after that outer function has finished execution.”
//when we return a function itself it also containe a parent function variable  
// **********  Ex = 1 *************
function Outer(){
    const name = "piyush";
    function Inner(){
        console.log(name)
    }
    return Inner;
}
const newFun = Outer();
newFun();

//That inner function remembers the variable name (which is "Piyush") — even though greet() has finished running.
// **************** Ex = 2 ***************
function greet(name) {
    console.log("Good morning")
    return function() {
        console.log("Hello " + name);
    }
}
const sayHello = greet("Piyush");   //Good morning
// sayHello(); // Output: Hello Piyush
setTimeout(() => {sayHello()},1000)

//********** Ex = 3 *************
function cart() {
  let items = []; // private variable

  return {
    addItem: function(item) {
      items.push(item);
      console.log(item + " added");
    },
    showItems: function() {
      console.log("Items in cart:", items);
    }
  };
}
const myCart = cart();

myCart.addItem("Shoes");
myCart.addItem("T-shirt");
myCart.showItems(); // Items in cart: ["Shoes", "T-shirt"]