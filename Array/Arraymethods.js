let arr1=[1,2,3,4,5];
// let result=arr1.filter((ele) => ele=3); //each itrection ele is 5(truthy value) [ 1, 2, 3, 4, 5 ] 
// let result=arr1.filter((ele) => ele=0); //each itrection ele is 0(falsy value) []
// let result=arr1.filter((ele) => ele>5); //[]
// let result=arr1.map((ele) => ele=5); //[ 5, 5, 5, 5, 5 ]
// let result=arr1.map((ele) => ele>5); //[ false, false, false, false, false ]
// let result=arr1.map((ele) => ele<5); //[ true, true, true, true, false ]
// console.log(result)

let arr=[1,2,3,4,5]
console.log(arr.find(v => v=5)) //1
console.log(arr.find(v => v>5)) //undefined
console.log(arr.find(v => v<5)) //1
console.log(arr.find(v => v>3)) //4
console.log(arr.every(v => v>5)) //false
console.log(arr.every(v => v<5)) //false (ek bhi false then false)
console.log(arr.every(v => v=5)) //true
console.log(arr.every(v => v<6)) //true
console.log(arr.some(v => v>3)) //true
console.log(arr.some(v => v=3)) //true
console.log(arr.some(v => v<5)) //true (ek bhi true then true)
console.log(arr.some(v => v>5)) //false