const arr = [1,2,3,4,5,6,7,8,9,10] ;
//expected output  [[1,2,3],[4,5,6],[7,8,9],[10]]

// function majorChunks(arr){
//     let ans=[];
//     for(let i=0 ;i<arr.length;i++){
//        let newArr = [];
//         for(let j=i ; j<=i+2 ;j++){
//             if(arr[j] == undefined){}
//             else{
//                 newArr.push(arr[j])
//                 // console.log(newArr)
//             }
//         }
//         ans.push(newArr);
//         i=i+2;
//    }
//    return ans

// }
// console.log(majorChunks(arr))

// function makeChuncks(arr){
//     let ans=[]
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         if(i != 0 && i % 3 == 0){
//             ans.push(newArr)
//             newArr = [];
//         }
//         newArr.push(arr[i])
//     }
//     if(newArr.length>0) ans.push(newArr);
//     return ans
// }
// console.log(makeChuncks(arr))

// function makeChuncks(arr){
//     let ans=[]
//     let newArr=[];
//     let i=0
//     while(i<arr.length){
//         if(newArr.length == 3){
//             ans.push(newArr)
//             newArr=[];
//         }
//         newArr.push(arr[i])
//         i++;
//     }
//     ans.push(newArr);
//     return ans
// }
// console.log(makeChuncks(arr))

// let string = "this is me piyush"
// function makeFirstCharToUpperCase(s) {
//     let strArr = s.split(' ');
//     let ans=""
//     for(let i=0 ; i<strArr.length ; i++){
//         let currWord = strArr[i][0].toUpperCase() + strArr[i].slice(1);
//         ans +=currWord + " ";
//     }
//     console.log(ans)
// }
// makeFirstCharToUpperCase(string);

const array=[12,30,49];
array[10] = 90 ;
console.log(array.length,array)

const string = "tech interview hub" ;
function reverseString(s) {
    let ans = s.split(" ").reverse().join(' ');
    console.log("split := ",s.split(" "));
    console.log("reverse := ",s.split(" ").reverse());
    console.log("join := ",s.split(" ").reverse().join(' '));

    return ans
}
// console.log(reverseString(string))

// function reverseString(s) {
//     let ans = "";
//     for(let i=s.length-1;i>=0;i--){
//         ans+=s[i]
//     }
//     return ans
// }
// console.log(reverseString(string))

// console.log("A");
// setTimeout(() => {
// console.log('B')
// },0);
// Promise.resolve().then(() => console.log('C'));
// console.log('D')

const user = {
    name:"interview",
    regularFn : function(){
        console.log('RegurlarFn = ',this.name); 
    },
    arrowFn : () => {   //arrow fn doen not have own this keyword its referse to the window
         console.log("Arrow Fn = ",this.name); 
        console.log("Arrow Fn = ",this); 
        
    }

}
// user.regularFn()
// user.arrowFn()

// var x=20;
// var x=24;
// console.log(x);

// let arr2=[1,[2,3],[4,[5,6]]];
// console.log(arr2.flat(2))
// console.log(arr2.join().split(','))

// function demo(a = {}){
//     console.log(a);
// }
// demo(null); //a=0
// demo(undefined); //a=undefined //[object-object]

// let str = "Hello everyone and welcome"
// let count=0;
// for(i=0;i<str.length;i++){
//     if(str[i] == 'e') count++;
// }
// console.log(count);

// console.log([1,2] == [1,2])

// let obj1 = {a:1 ,b:2}
// let obj2 = {c:3 ,d:4}
// console.log(Object.assign({},{...obj1},{... obj2}))

// function test() {
//     console.log(a());
//     var a=10;
//     function a() {}
// }
// test()

const nums = [10 , 5.5 , "sfe" , null ,undefined , {} , [] , 2];
const ans = []
for(let i=0;i<nums.length;i++){
    if(typeof(nums[i]) == "number") {
        ans.push(nums[i])
    }
}
console.log(ans.reduce((a,v) => a+v,0))
// console.log(ans)