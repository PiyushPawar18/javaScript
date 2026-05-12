// 1. Given an array [1, 2, 3, 4, 5], use map to create a new array with each number doubled.
let arr1=[1,2,3,4,5];
let result=arr1.map((v) => v*2);
// console.log(result);  // 👉 Output: [2, 4, 6, 8, 10]

//2. From the array [10, 15, 20, 25, 30], use filter to keep only numbers greater than 20.
let arr2=[10,15,20,25,30];
result=arr2.filter(v => v>20);
// console.log(result); // 👉 Output: [25, 30]

//3.[5, 10, 15, 20] → add 5 to each number
let arr3=[5,10,15,20];
result=arr3.map(v => v+5);
// console.log(result); // 👉 Output: [ 10, 15, 20, 25 ]

//4. ["a", "b", "c"] → convert to uppercase






let arr=["a","b","c"];
// console.log(arr.map((v,i) => v.toUpperCase()))
// console.log(arr.join("").toUpperCase().split("")); //👉 Output: [ 'A', 'B', 'C' ]

//5. Q: [1, 2, 3, 4, 5] → find sum of all numbers
arr=[1,2,3,4,5];
console.log(arr.reduce((acc,v) => v+acc,0)); //15

//6. Q: [2, 4, 6, 8] → square each number
arr=[2,4,6,8];
console.log(arr.map(v => v*v)); //[ 4, 16, 36, 64 ]

//7.Q: ["apple", "banana", "kiwi"] → find words with length > 5
arr=["apple","banana","kiwi"];
console.log(arr.filter(v => v.length > 5)); //[ 'banana' ]
console.log(arr.find(v => v.length>5)); //banana

//8.[1, 2, 3, 4, 5] → find product of all numbers
arr=[1,2,3,4,5];
console.log(arr.reduce((acc,v) => v*acc , 1)); //120

//9.[10, 15, 20, 25, 30] → keep only even numbers
arr=[10, 15, 20, 25, 30];
console.log(arr.filter(v => v%2==0)); //[ 10, 20, 30 ]

//10. Q: [1, 2, 3, 4] → make array of cumulative sums (output [1, 3, 6, 10])
arr=[1,2,3,4];
let new_arr=arr.reduce((acc,v,i) => {
    if(i===0){
        acc.push(v);
    }
    else{
        acc.push(acc[i-1]+v); //(1+2)=3 (3+3)=6 (6+4)=10
    }
    return acc;
},[]) 
// console.log(new_arr); //[ 1, 3, 6, 10 ]

//11. Q: [1, 2, 3, 4, 5] → find maximum number
arr=[6,1,2,3,4,5];
let a=0
result=arr.reduce((acc,ele,i) => {
    if(ele>acc){
        acc=arr[i]
    }
    return acc;
},0)
console.log(result);

//12. [5, 10, 15, 20] → find average
arr=[5,10,15,20];
result=arr.reduce((acc,v)=> {acc=v+acc; return acc },0);
console.log(result/arr.length); //12.5

//13.Q: ["cat", "dog", "fish"] → make one string with commas (Output:"cat,dog,fish")
arr=["cat" ,"dog", "fish"];
console.log(arr.join(","));

//14. Q: [1, 2, 3, 4, 5 ,6] → keep only prime numbers
const arr4 = [1, 2, 3, 4, 5];
const isPrime = (n)=>{
    if(n < 2) return false;
    for(let i=2;i<=n/2;i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}
result = arr4.filter(isPrime);
// console.log(result); //[ 2, 3, 5 ]

//15. Q: [1, 2, 3, 4] → factorial of each element (Output: [1, 2, 6, 24])
arr=[1,2,3,4];
result= arr.map( n => {
    let sum=1;
    for(let i=1;i<=n;i++){
        sum=sum*i;
    }
    return sum;
})
// console.log(result); //[ 1, 2, 6, 24 ]

//16. Q: [2, 3, 4, 5, 6] → create an array of squares of only odd numbers, then find their sum Output: 34
arr=[2,3,4,5,6];
// console.log(arr.reduce((a,b) => a+b))
let new_array=arr.filter(v => v%2!=0);
result=new_array.reduce((a,b) => a*a+b*b);
console.log(result); //34

//17.Q: [1, 2, 3, 4, 5, 6] → find the product of all even numbers := Output: 48
arr=[1,2,3,4,5,6];
new_arr=arr.filter(v => v%2==0);
result=new_arr.reduce((a,b) => a*b);
console.log(result)

//18. Q: ["apple", "banana", "kiwi"] → keep only fruits with length > 4, convert to uppercase, then join with "-"
// Output: "APPLE-BANANA"
arr=["apple", "banana", "kiwi"];
let r=arr.filter((v,i) => v.length>4)
console.log(r.join("-").toUpperCase());



new_arr=arr.filter(v => v.length>4).join("-").toUpperCase()
console.log(new_arr)