// //Easy Level
// let arr=[1,2,3,4,5];

// //1.Find the sum of all elements in an array.
// // console.log(arr);
// let temVar=0;
// for(let i=0;i<arr.length;i++){
//     temVar=temVar+arr[i];
// }
// // console.log("Sum of the all elements is := ",temVar);

// //2.Find the maximum and minimum element in an array.
// arr=[1,2,3,8,5,2,0,7]
// let max=arr[0],min=arr[0];
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
//     if(arr[i]<max){
//         min=arr[i];
//     }
// }
// console.log("maximum value is :- ",max ,"minimum value is :- ",min);

//3.Reverse an array without using the built-in reverse() method.
// arr=[1,2,3,8,5,2,0,7];
// let new_arr=[];
// for(let i=arr.length-1;i>=0;i--){
//     new_arr.push(arr[i]);
// }
// for(let i=0,j=arr.length-1 ; i<j; i++,j--){
//     let temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
// }
// console.log(arr);
// console.log(new_arr);

// 4.Separate the even and odd numbers from an array.
// arr=[1,2,3,4,5,6];
// let even=[],odd=[];

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         even.push(arr[i]);
//     }
//     else{
//         odd.push(arr[i]);
//     }
// }
// console.log(`even value :- ${even} 
//     odd value:- ${odd}`);

//5.Search for an element in an array.
// arr=[1,2,3,8,5,2,0,7];
// let search=-1;
// console.log(`5 element found in ${arr.indexOf(5)} index `);
// for(let i=0;i<arr.length;i++){
//     if(5==arr[i]){
//         search=i;
//         break;
//     }
// }
// console.log(`5 element found in ${search} index `)

//Medium level
//6.Remove duplicate elements from an array.
// let arr=[1,3,4,5,3,3,5,2,3,6]
// let new_arr=[];
// let count=0;
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             arr.splice(j,1);
//             j--;
//         }
//     }  
// }
// console.log(arr)

// 7.Sort an array without using the built-in sort() function.
// arr=[1,3,6,7,3,9,0];
// console.log(arr.sort())
// let arr2=arr[0];
// let ref;
// new_arr=[];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length -1 -i;j++){
//         if(arr[j]>arr[j+1]){
//             temp=arr[j+1]
//             arr[j+1]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr);

// 8.Find the second largest element in an array.
// let real_arr = [10, 20, 4, 45, 99]
// // let demo_arr = real_arr.sort()
// // console.log(real_arr[real_arr.length-2])

// // demo_arr = real_arr.sort().reverse()
// // console.log(real_arr[1])

// arr=real_arr
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-1 -i;j++){
//         if(arr[j]<arr[j+1]){
//             temp=arr[j+1];
//             arr[j+1]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr[1]);

// Find the frequency of each element in an array.
// arr=[1,2,2,3,3,3] // {1:1, 2:2, 3:3}
// obj={}

// for(let i=0;i<arr.length;i++){
//     let val=arr[i];
//     if(obj[val]){
//         obj[val]++
//     }
//     else{
//         obj[val]=1;
//     }
// }
// console.log(new_arr)
// console.log(arr)


// Rotate an array (left or right).
// arr= [1,2,3,4,5] //rotated right by 2 → [4,5,1,2,3]
// let toRight=true;
// let toLeft=false;
// // let toLeft=true;
// let val=2;
// new_arr=[];
// for(let i=0;i<arr.length;i++){
//     if(val>0 && toRight==true){
//         let temp=arr[arr.length-1]
//         arr.unshift(temp);
//         val--;
//         arr.length--;
//     }
//     else if(val>0 && toLeft==true){
//         let temp=arr[0];
//         arr.shift();
//         arr[arr.length]=temp;
//         val--;
//     }

// }
// console.log(arr);
// arr=[1,2,3,4,5]
// let k=2
// k=k%arr.length;
// console.log(k);
// console.log(arr.slice(-k).concat(arr.slice(0,arr.length-k)))


// 🔹 Advanced / Tricky
// 1.Flatten a nested array.
// let arr = [1, [2, 3], [4, [5, 6]]]; //→ [1,2,3,4,5,6]
// // console.log(arr);
// function flat() {
//     let str_arr = arr.toString();
//     console.log(str_arr);
//     let new_arr = str_arr.split(",");
//     console.log(new_arr)
//     for (let i = 0; i < new_arr.length; i++) {
//         arr[i] = Number(new_arr[i]);
//     }
//     console.log(arr);
// }
// // flat()

// // 2.Find all pairs of numbers with a given sum.
// arr=[2,7,11,15] //target = 9 → (2,7)
// function target(value){
//     for(let i=0;i<arr.length;i++){
//         for(let j=1;j<arr.length;j++){
//             if(arr[i]+arr[j]===value){
//                 console.log(arr[i] ,"+",arr[j] ,"=", value);
//                 //break;
//                 i=arr.length;
//             }
//         }
//     }
// }
// // target(26)

// // 3. Shuffle an array (randomize the order of elements).
// arr = [3, 3, 4, 2, 3, 3, 5];


// // Find the majority element (appears more than n/2 times).
// arr= [3,3,4,2,3,3,5] //→ 3
// let obj={}
// let max=-1;
// function repObj(){
//     for(let i=0;i<arr.length;i++){
//         let val=arr[i]
//         if(obj[val]){
//             obj[val]++
//         }
//         else{
//             obj[val]=1
//         }
//         if(obj[val]>arr.length/2){
//             max=val;
//             break;
//         }
//     }
    
// }
// repObj();
// console.log(obj);
// // console.log(Object.values(obj));
// console.log(`the most repeated number is ${max}`)


// // Find the maximum sum of a subarray (Kadane’s Algorithm).
// // 👉 [−2,1,−3,4,−1,2,1,−5,4] → 6