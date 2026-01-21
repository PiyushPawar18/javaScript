//js is prototype base language not function class base but in js we use as syntax suger 
// class User {
//     constructor(username, age) {
//         this.username = username;
//         this.age = age
//     }
//     printdata() {
//         return `${this.username} and ${this.age}`;
//     }
//     changeUserName() {
//         return `${this.username.toUpperCase()}`;
//     }
// }
// const user1 = new User("piyush", 23);
// console.log(user1.printdata());
// console.log(user1.changeUserName());

//behind the scene 
function User(username,age) {
    this.username = username;
    this.age = age
}
User.prototype.printdata = function (){
    console.log(`${this.username} and ${this.age}`);
}
User.prototype.changeUserName = function (){
    console.log(`${this.username.toUpperCase()}`);
}

const user2 = new User("piyush",23);
user2.printdata();
