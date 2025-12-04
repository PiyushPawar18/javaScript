// //undefined and undeclared
// let a;
// console.log(a); //undefined
// // console.log(b);  //undeclared

// //shallow copy and deep copy

// console.log(100 + '8' + 20); //100820
// console.log(100 - "8" - 20); //72

// let abc=100
// if(function xyz(){}){
//     console.log(typeof(xyz));  //undefined
//     abc = abc - typeof(xyz)
// }
// console.log(abc);

// function print(){}
// print()
// console.log(typeof print());  //undefined
function print(a,b){ return a+b}
print()
console.log(typeof print()); //not pass arguments so undefined + undefined =NaN and typeof NaN is number
// console.log(typeof function(){}); //function
console.log(print());
// function abc(){
//     console.log("34");
    
// }
// console.log(typeof abc());
// console.log(typeof (function(){return {1:3};}()));
// console.log(typeof (function(){return true;}()));
// console.log((function(){return {1:3};}()));

// typeof null === typeof undefined

const obj={
    xyz:"pravitra",
    pqr:function(){
        console.log(this.xyz);
        
    }
}
const c=obj.pqr
obj.pqr()//function
c()//undefined //it is reference to the function itself (it not access the value of this XYZ)


let arr=[1,2,3,4,5,"abc"]
// let ans=arr.includes('2',0) //("search elem",position)
let ans=arr.includes("ABC")
// console.log(ans); 
