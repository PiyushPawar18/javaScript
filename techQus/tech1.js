// var a=[10,11,12,13,14];
// function print(b,...a){
//     console.log(a); //[ 9, 10, 11, 12 ]
// }
// print(8,9,10,11,12) 
// //print(8)  //[]
// //lexical scope outer most lexical sope

// const arr=[1,2,3,4,5]
// const arr1=arr.map((ele,idx,arr) => {
//         // return ele+1; //[ 2, 3, 4, 5, 6 ]
//         return ele = 8; //[ 8, 8, 8, 8, 8 ]
//     })
// console.log(arr1);

// let obj={
//     a:1,
//     b:2,
//     c:3
// }
// console.log(Object.entries(obj));

// let arr=[100,"q","piyush",10,8,"c"]
// function arrDis(arr){
//     let no=[]
//     let char=[]
//     let str=[]
//     // for(let i=0;i<arr.length;i++){
//     //     if(arr[i] <=0 || arr[i] >= 0){
//     //         no.push(arr[i]);
//     //     }
//     //     else if(arr[i].length > 1){
//     //         str.push(arr[i])
//     //     }
//     //     else {
//     //         char.push(arr[i])
//     //     }
//     // }
//     arr.forEach((ele) => {
//         if(typeof ele === "number") no.push(ele)
//         else if(typeof ele === "string"){
//             if(ele.length > 1) str.push(ele)
//             else char.push(ele)
//         }
//     });
//     console.log(no,char,str);
    
// }
// // arrDis(arr)

// //slice and splice 
// arr=[1,2,3,4,5,6]
// //slice
// console.log(arr.slice(1,3));
// console.log(arr);
// //splice
// console.log(arr.splice(1,2,65,65,90));
// console.log(arr);

// const obj1={}
// const obj2={
//     name:"piyush"
// }
// const obj3={
//     name:"Amey"
// }
// obj1[obj2] = {
//     name:"vedant"
// }
// obj1[obj3] = {
//     name:"atharv"
// }
// console.log(obj1);

// console.log(obj1[obj2]);


// function sum(a,b){
//     if(a && b) return a+b;
//     return function(b){
//         return a+b;
//     }
// }
// console.log(sum(8,9));
// console.log(sum(8)(10));

// console.log([] === []); //false
// console.log([] == []);  //false

// let a=[1,2,3,4]
// let b=[1,2,3,4]
// let c=b
// console.log(a==b);  //both arr reference is diff so output //false
// console.log(b==c);  //in c=b means b reference and c reference is same //true
// console.log(c==a);  //both arr reference is diff so output //false


// const obj={
//     a:1,
//     b:2,
//     c:{
//         a:10,
//         b:20
//     }
// }
// const {a,b,c:{a:p}}=obj
// console.log(a,b,p);

// const arr=[1,2,3,4]
// // const ans=arr.map((e)=>e>3) [ false, false, false, true ]
// const ans=arr.map((e)=> {
//     e>3 }) //[ undefined, undefined, undefined, undefined ]
// console.log(ans);


// function piyush(str){
//     console.log(str.toLowerCase());
// }
// piyush("I Am Piyush Pawar")

//Optional chaining //polyfill //temporal dead zoo //infinity curing

// const str="piyush milind pawar"
// const str_arr=str.split("")
// const abc=[]
// function reversestr(arr){
//     for(let i=arr.length-1;i>=0;i--){
//         abc.push(arr[i])
//     }
    
//     let rev_str=abc.join("")
//     console.log(rev_str);   
// }
// reversestr(str_arr)

// if([]){
//     console.log("piyu");
    
// }else{
//     console.log("pawar");
    
// }

// arr=[] //differnet way to add a size of arr=100
// arr.length=100
// console.log(arr.length);

// let str1="etg";
// let str2="fgebbe"
// let str3=str1 && str2; 
// console.log(str3);
// let a = 0;
// let b = "hello";
// let c = null;

// console.log(a && b); // 0 → first falsy
// console.log(a || b); // "hello" → first truthy

// console.log(b && c); // null → first falsy is c
// console.log(b || c); // "hello" → first truthy is b


// [a]=[100,200,300,400];
// console.log(a)

// let no=100;
// // console.log(no++ + ++no)// 100(101) +101 =202
// console.log(++no + no++) //101 + 101 =202

// let string="piyush pawar"
// let str="p"
// count=0;
// for(let i=0;i<string.length;i++){
//     let temp="";
//     for(let j=i;j<string.length;j++){
//         temp=temp + string.charAt(j);
//         console.log(temp)
//         if(temp==str){
//             count++;
//         }
        
//     }
    
// }
// // console.log(count);

// string="piyush pawar"
// console.log(string.includes("sh"));
// let result=string.indexOf("shp");
// if(result==-1){
//     console.log("not includes",string.indexOf("shp"));
// }
// else{
//     console.log("includes")
// }