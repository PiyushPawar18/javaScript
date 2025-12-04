// let str="piyush is arrived"; //output="arrived"
// let arr=str.split(" ");
// let a=0;b="";
// for(let i=0;i<arr.length;i++){
//     if(a<arr[i].length){
//         a=arr[i].length;
//         b=arr[i];
//     }
// }
// let result=arr.reduce((a,b) => a.length>b.length?a:b);
// // console.log(result);

// // console.log(b);

// let s1="piyush",s2="pawar";//output:=ppiaywuasrh
// function abc(s1,s2){
//     let s3="";
//     l1=s1.length;
//     l2=s2.length;
//     let max=Math.max(l1,l2);
//     for(let i=0;i<max;i++){
//         if(i<l1)
//         s3+=s1[i];
//         if(i<l2)
//         s3+=s2[i]
//     }
//     return s3;
// }
// // console.log(abc(s1,s2));

// // console.log(2-"2"); //0
// // console.log(2-"piyu"); //NaN

// let arr1=[[1,2],[3,4],[5,6],[7,8],[9,10]];
// // console.log(arr1.flat());
// function flat(arr){
//     // let str=arr1.join(",");
//     // let new_arr=str.split(",");
//     // return new_arr;
//     let new_arr=[];
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             new_arr.push(arr[i][j]); //arr[0][0] = 1 //arr[0][1] = 2 ....
//         }
//     }
//     return new_arr;
// }
// // console.log(flat(arr1));

// //function curing(couring)

// // for(let i=0;i<100;i++){
// //     console.log(i);
// // }
// // setTimeout(function() {
// //     console.log("hello")
// // },1000)
// // setTimeout(function(){
// //     console.log("piyush")
// // },2000)
// // console.log("hodhgewhgw");
// // let intervalID=setInterval(function() {
// //     console.log("hey how are you");
// // },500);
// // setTimeout(function(){
// //     clearInterval(intervalID);
// //     console.log("interval is stop");
// // },5000);

// let arr2=[1,2,3,4,5,1,2];
// let arr3=[];
// for(let i=0;i<arr2.length;i++){
//     if(!arr3.includes(arr2[i])){
//         arr3.push(arr2[i])
//     }
// }
// // console.log(arr3);
// let sort_arr=arr2.sort((a,b)=>a-b);
// // console.log(sort_arr);
// let dupValue=[];
// for(let i=0;i<sort_arr.length;i++){
//     if(sort_arr[i]==[sort_arr[i+1]]){
//         dupValue.push(sort_arr[i]);
//     }
// }
// // console.log(dupValue);

// // let str_arr=["b","d","c","a"]
// // let cap_arr=str_arr.join("").toUpperCase().split("");
// // console.log(cap_arr.sort());
// // console.log(str_arr.sort())

// // abc= 2;
// // let x=!--abc; //1 //!trure=false
// // let y=!--abc; //0 //!false=true
// // console.log(x,y)

// function sum(){
//     console.log("piyush")
//     return 2+2;
// }
// function square(){
//     console.log('pawar');
//     return 4*4;
// }
// let c=(sum(),square());  //return goes to c variable 
// console.log(c); //piyush pawar 16 
//both fun statement is executed but it first return 2+2 so its store in c var ,but second fun also return 4*4 so
//c value can overlapped to return 4*4 so it 16 can store in c variable;

//************************************************************************ */
// function pp(){
//     console.log("hi");
//     return pp()     //it call the function but stack memroy will full //Maximum call stack size exceeded
// }
// console.log(pp())

// //function foo(){
// //    console.log("hello piyush");
// // }
// // const result = foo(); //result=undefined(we can't return it)  //ouput is hello piyush because we call it
// // console.log(result) //undefined

// function foo() {
//     console.log("hello");
//     return 42;
// }

// const result1 = foo();  // prints "hello", result1 = 42
// const result2 = foo;    // no print, result2 is function reference

// result2();  // prints "hello" now, because we call it here

