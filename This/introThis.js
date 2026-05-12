const person = {
    userName:"piyush",
    age:22,
    getUserDetails: function () {
        //Js engine see this line that we print userName then it check from scope 
        //order = local , Outer , Global 
        //object does not have there own scope 
        //so userName:"piyush" is not a variable its object properties 
        //thats why we use this keyword to point current context
        console.log(`UserName : = ${this.userName}`);
        console.log(this);
    }
}
// console.log(person);
person.getUserDetails();