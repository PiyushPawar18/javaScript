// Map -> Object
let map = new Map([["a","one"],["b","two"]])
console.log(map);
let obj={};
obj=Object.fromEntries(map);  //fromEntries ->convert map to obj
console.log(obj);
obj={}; //using loop
map.forEach((value,key) => {
    obj[key]=value;
}) 
console.log(obj);

//Object -> Map
let obj2={ 1:"one",2:"two"};
let map2=new Map(Object.entries(obj2));  //Object.entries convert obj -> arr(Map store data in form array)
console.log(map2);

//set -> array
let set=new Set([1,2,3,4,3]);
console.log(set);
// let arr=[...set];
// console.log(arr)
let arr=[];
set.forEach(v => {
    arr.push(v);
})
console.log(arr);

//array -> set
let arr2=[1,2,3,4,5,2];
let set2=new Set(arr); //direct
// using loop
let set3=new Set();
arr2.forEach(v => set3.add(v))
console.log(set3)

//array -> object
let arr3=[[1,2],[3,4]];
let obj3=Object.fromEntries(arr3);
console.log(obj3);

//set -> map
let set4 = new Set([1,2,3,4]);
let map4 = new Map([...set4].map(v => [v,v]));
console.log(map4);
//or using index
let i=0;
let map5 = new Map([...set4].map(v => [v,i++]));
console.log(map5);

//map -> set
let map6 = new Map([[1,"one"],[2,"two"]]);
console.log(map6);
let set6 = new Set(map6.keys());
console.log(set6);
let set7 = new Set(map6.entries());
console.log(set7);