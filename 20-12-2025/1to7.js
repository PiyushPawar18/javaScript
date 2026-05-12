//6:=
// console.log("before",a)
// var a=10;
// console.log("after",a);
// // console.log("before",b)
// let b=10;
// console.log("after",b);
// console.log("before",c)
// const c=10;
// console.log("after",c);

console.log(1 == '1');

console.log(typeof({}))
console.log(typeof([]))
console.log(typeof(undefined))

console.log(2 + '2');

const str = "abcdefghijklmnopqrs";
function reverseString(s) {
    let ans = ""
    for(let i=s.length-1;i>=0;i--){
        ans += s[i]
    }   
    return ans
}
// console.log(reverseString(str))

// const arr=[1,5,8,1,9,3];
// console.log(arr.find((a) => a > 6)); 
// console.log(arr.every((a) => a > 0));
// console.log(arr.reduce((a,b) => a+b));
// console.log(arr.filter(num => num));
// console.log(arr.map(num => num++)); //[1,5,8,1,9,3]
// console.log(arr.map(num => ++num)); //[2,6,9,2,10,4]

// const array = [1,2,3,4,5];
// const [a,b,c,d,e,f] = array;
// console.log(array[2],c)  //3

// const array = [1,2,3];
// // const array1 = [...array]
// console.log(array,array1)
// array1.push(4)
// console.log(array,array1)

let arr=[1,2,2,2,3,4,4,4,5]
let unique=[];
let dup=[]
// for(let i=0;i<arr.length;i++){
//     if(!unique.includes(arr[i])){
//         unique.push(arr[i])
//     }
//     else{
//         dup.push(arr[i])
//     }
// }
// console.log("unique := ", unique , "duplicate := ", dup)

// var a = 23;
// (
//     function () {
//         if(a===23){
//             var a=20;
//             console.log("1st",a);
//         }
//         console.log(a)
//     }
// )();


let array1 = [1,2,3,4,5];
console.log(array1.forEach((val) => val))
array1.forEach((val) => console.log(val));
