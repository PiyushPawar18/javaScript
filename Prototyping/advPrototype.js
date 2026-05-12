<<<<<<< HEAD
//suppose
const userName = "piyush    ";
console.log(userName.length); //10 
//but i want that my name contain length of 6 
//instead of doing trim()[userName.trim().length()] 
//but i want to create a new own property [userName.trueLength]

let myHero = ["thor","spiderMan"];
let heroPower = {
    thor:"hammer",
    spiderMan:"sling",
    getSpiderPower: function(){
        console.log(`spider Man power ${this.spiderMan}`);
    }
}

// heroPower.prototype.piyu = function(){} //we direct add a property in object 
Object.prototype.piyush = function(){
    console.log("piyush is present in all Objects");
}
//we direct pass property in Object so all string , array , function can access it
heroPower.piyush();
myHero.piyush();

Array.prototype.kumar = function() {
    console.log("kumar is present in Array only");
}
myHero.kumar(); //work in array
// heroPower.kumar(); //heroPower.kumar is not a function


//inheritance 
const user = {
    user:"piyu",
    Email:"piyu@gmail.com"
}
const Teacher={
    makeVideo:true
}
const TeacherSupport={
    isAvailable:false
}
const TASupport = {
    makeAssignment:'JS- assignment',
    fullTime:true,
    __proto__:TeacherSupport
}
//teacher bhi user ke sare functionality access kar sakta hai
//old way
Teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(TeacherSupport,Teacher) //TeacherSuppoert access all data of Teacher

let anotherUserName = "amey   ";
String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUserName.trueLength()
"piyush".trueLength();
=======
//suppose
const userName = "piyush    ";
console.log(userName.length); //10 
//but i want that my name contain length of 6 
//instead of doing trim()[userName.trim().length()] 
//but i want to create a new own property [userName.trueLength]

let myHero = ["thor","spiderMan"];
let heroPower = {
    thor:"hammer",
    spiderMan:"sling",
    getSpiderPower: function(){
        console.log(`spider Man power ${this.spiderMan}`);
    }
}

// heroPower.prototype.piyu = function(){} //we direct add a property in object 
Object.prototype.piyush = function(){
    console.log("piyush is present in all Objects");
}
//we direct pass property in Object so all string , array , function can access it
heroPower.piyush();
myHero.piyush();

Array.prototype.kumar = function() {
    console.log("kumar is present in Array only");
}
myHero.kumar(); //work in array
// heroPower.kumar(); //heroPower.kumar is not a function


//inheritance 
const user = {
    user:"piyu",
    Email:"piyu@gmail.com"
}
const Teacher={
    makeVideo:true
}
const TeacherSupport={
    isAvailable:false
}
const TASupport = {
    makeAssignment:'JS- assignment',
    fullTime:true,
    __proto__:TeacherSupport
}
//teacher bhi user ke sare functionality access kar sakta hai
//old way
Teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(TeacherSupport,Teacher) //TeacherSuppoert access all data of Teacher

let anotherUserName = "amey   ";
String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUserName.trueLength()
"piyush".trueLength();
>>>>>>> e532572 (createa a practive 6 hard questios)
"tushar".trueLength();