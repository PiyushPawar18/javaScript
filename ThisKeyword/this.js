const user1 = {
    userName:"piyush",
    age:22,
    welcomeMessage : function() {
        console.log(`${user1.userName}, welcome to website`)
    }
}
user1.welcomeMessage();
user1.userName = "sam";
user1.welcomeMessage();
//Works properly beacuse we use hard-coded object reference.
//but If you copy this method to another object:
const user3 = {
    userName: "amit",
    welcomeMessage: user1.welcomeMessage
};

user3.welcomeMessage();
//Wrong, because it still points to user1.userName.

const user2 = {
    userName:"piyush",
    age:22,
    welcomeMessage : function() {
        console.log(`${this.userName}, welcome to website`)
        console.log("this inside user2 := ",this)
    }
}
user2.welcomeMessage();
user2.userName = "sam";
user2.welcomeMessage(); 
//this refers to the object that calls the method
//Method becomes reusable and dynamic
console.log("this := ", this); //{}

// function demo() {
//     let userName = "piyush";
//     // console.log(this); //global this
//     console.log(this.useName); //undefined
// }
// demo()

const arrowFun = () => {
    let userName = "kumar";
    console.log(this); //{}
}
arrowFun();