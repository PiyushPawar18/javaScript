// let a=[100,8,900,400,6] //sort arr
// console.log(a.sort((a,b) => b-a));  //desending order 
// console.log(a.sort((a,b) => a-b)); //asecnding order

// console.log(a);  //ReferenceError: a is not defined
// a=10;  
// console.log(a);  //if we canot declared it treated as global variable (var)

// console.log(b); //Cannot access 'a' before initialization
// let b;
// console.log(b); //undefined

// if([]){
//     console.log("my name is piyush");
// }else{
//     console.log("i am not piyush")
// }

// console.log([] == false); //false->0 //[] -> primitive -> "" ->0 //0==0 //true
// console.log([1,2]==false); //[1,2] -> primitive using [1,2].toString() -> "1,2" -> NaN //NaN==0//false
// console.log("piyush"-100); //Nan //"piyush" -> NaN //Nan-100 = NaN

const arr76 = ['c', 3, 4, 'd', 9, "piyush", 89];
function nocharstr(arr) {
    let no = [], char = [], str = [];
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] == "number"){
        // if (arr[i] > 0 || arr[i] < 0) {
            no.push(arr[i])
        }
        else if (arr[i].length > 1) {
            str.push(arr[i])
        }
        else {
            char.push(arr[i])
        }
    }
    console.log(no, char, str)
}
// nocharstr(arr76)

// let arr1=[1,2,3,4,5];
// let result=arr1.filter((ele) => ele=5); //each itrection ele is 5(truthy value) [ 1, 2, 3, 4, 5 ] 
// let result=arr1.filter((ele) => ele=0); //each itrection ele is 0(falsy value) []
// let result=arr1.filter((ele) => ele>5); //[]
// let result=arr1.map((ele) => ele=5); //[ 5, 5, 5, 5, 5 ]
// let result=arr1.map((ele) => ele>5); //[ false, false, false, false, false ]
// let result=arr1.map((ele) => ele<5); //[ true, true, true, true, false ]
// console.log(result)

// let arr=["chandan","and"];
// if(arr[0].includes(arr[1])) //(arr[0].search(arr[1]) !== -1) //(arr[0].indexOf(arr[1]) !== -1) 
// {
//     console.log(`${arr[1]} include in ${arr[0]}`);
// } else{
//     console.log("not includes")
// }

let v=7; //0 1 1
function fibonacci(v){
    let a=0,b=1,temp=0;
    let str="";
    str +=a+" ";
    str +=b+" ";
    for(let i=1;i<=7;i++){ //we can excluded 0 1 
        temp=a+b;
        str+=temp+" ";
        a=b;
        b=temp;
    }
    console.log(str)
}
// fibonacci(v) 

let obj=[{name: "piyush" , age:20},{name:"amey" , age:22},{name:"vedant" , age:27}];
// console.log(obj.filter(v => v.age<24));


function abc(a,...b){
    console.log(b,typeof b); //[ 6, 7 ] object
}
// abc(10,6,7);

// let i = 1;  // start

// let intervalID = setInterval(function() {
//     console.log("Count:", i);
//     i++;

//     if (i > 5) {  // stop after 5 iterations
//         clearInterval(intervalID);
//         console.log("Loop stopped");
//     }
// }, 2000); // runs every 2 seconds

// let count=1;
// let intervalID=setInterval(() =>{
//     console.log(count);
//     count++;
// },100)
// setTimeout(()=>{
//     clearInterval(intervalID);
//     console.log("program is stop")
// },2000)

//********************************************************* */
// const  arr= [1,2,3]; //const var storer ref not value thats why we change and delete the ele
// arr[4]=5; 
// console.log(arr.length); //5
// console.log(arr) //[1,2,3,<1 empty item>,5]
// console.log(arr[3]); //undefined
// arr=[1,2,3,4] //we cannot reassigned a const variable
// console.log(arr) // Assignment to constant variable.

// const [a,b] = [10,'hii']
// console.log(a,b)
// const [a,b] = [10,20,30,40,50]
// console.log(a,b)
// const [,,,a] = [1,2,3,4,5] //want 4
// console.log(a)
// const {2:b} = [1,2,3,4,5]  //want 3
// console.log(b)