// const promiseOne = new Promise();
// const date = new Date();

//new is nothing but its contructor function 
//its allow to create a one object literals({}) through multiple instances 

function User(userName,isLoggin,loginCount){
    // const myUserName = userName; //its works but we take as a variable as same parameters
    this.usrName = userName;
    this.isLoggin = isLoggin;
    this.loginCount = loginCount;
    
    return this;
}
const user1 = User("pp","true",3);
// console.log(user1); 
const user2 = User('aa',"false",2);
console.log(user1); //the output is deff because user2 is override 
//that why output show user2 data 

//That why we use [new] keyword so its give new constructor functions that give new instances new Copy
//so using new its give new copy that why it connot affect or override
const user11 = new User("piyush","true",3);
const user22 = new User('atharv',"false",2);
//if we cannot return this [then also it give a this data ]
console.log(user11)