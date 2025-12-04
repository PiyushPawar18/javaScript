// 1. Create an object person with properties name, age, and city. Print all values.
let person={
    name:"piyush",
    age:23,
    city:"mumbai"
}
// for(let key in person){
//     console.log(person[key]);
// }
// console.log(Object.values(person));


// 2. Add a new property hobby to an existing object without editing the original declaration.
function addHobby(obj){
    obj.hobby=["cricket","drawing","singing","swimming"]
    // obj["hobby"]="cricket"
    // Object.assign(person,{"hobby":"cricket"})
    console.log(obj);
}
// addHobby(person)

// 3. Delete the property age from an object and show the updated object.
person={
    name:"piyush",
    age:23,
    city:"mumbai"
}
function deleteAge(obj){
    // delete obj.age;
    console.log(obj);
}
// deleteAge(person)

// 4. Check if the object student has the property grade.
let student={
    name:"piyu",
    age:23,
    grade:"A"
}
function checkKey(obj,key){
    let isKeyExist=false;
    // for(let k in obj){
    //     if(k === key){
    //         isKeyExist=true
    //     }
    // }
    // console.log(isKeyExist);
    
    console.log(Object.keys(obj));
    let arr=Object.keys(obj);
    for(let i=0;i<arr.length;i++){
        if(arr[i]===key){
            isKeyExist=true;
            break;
        }
    }
    console.log(isKeyExist);
    // console.log("grade" in student);
    // console.log(student.hasOwnProperty("grade"));
    // console.log(Object.keys(student).includes("grade"));


}
// checkKey(student,"grad")

// 5. Loop through all keys and values of an object car.
function loopKeyValues(obj){
    for(let key in obj){
        console.log(key ,":",obj[key]);
    }
}
// Object.entries(student).forEach(([k,v]) => console.log(k,v));
// console.log(Object.entries(student));
// Object.keys(car).forEach(k => console.log(k, car[k]));

// loopKeyValues(student)


// ****************** Medium (Practice-level) ************************

// 1.Merge two objects:
let obj1 = {a:1, b:2};  
let obj2 = {b:3, c:4};
function MergeObjects(obj1,obj2){
    //using Object.assign
    let obj=Object.assign({},obj1,obj2)
    console.log(obj);  
    //using spread operation
    let spread={...obj1,...obj2};
    console.log(spread);
    //using loop
    let empty_obj={}
    for(let key in obj1) empty_obj[key]=obj1[key];
    for(let key in obj2)  empty_obj[key]=obj2[key];
    console.log(empty_obj)
    
}
// MergeObjects(obj1,obj2)

// 2. Convert an object into an array of [key, value] pairs.
obj1 = {a:1, b:2};  
function convertObj_Arr(obj){
    //using a Object.entries(obj_name)
    console.log(Object.entries(obj));
    Object.entries(obj).forEach(([k,v]) => console.log(k,v));
    //using a Object.keys(obj_name)
    Object.keys(obj).forEach(k => console.log(k,obj[k]))
    
}
// convertObj_Arr(obj1)

// 3. Count how many properties are inside an object.
student={
    name:"piyu",
    age:23,
    grade:"A"
}
function propertiesLength(obj){
    //using keys
    console.log(Object.keys(obj).length);
    //using entries
    console.log(Object.entries(obj).length);
    //using loop
    let count=0
    for (let key in obj){
        count ++
    }
    console.log(count);
    
}
// propertiesLength(student)

// 4.Copy an object without reference (deep copy vs shallow copy).
let obj={a:1, b:2};
function copyObject(obj){
    //using spread (shallow copy)
    let copy_obj={}
    {
        copy_obj={...obj};
        console.log(copy_obj);
    }
    //using JSON  (deep copy)
    {
        console.log(JSON.stringify(obj));
        copy_obj=JSON.parse(JSON.stringify(obj))
        console.log(copy_obj);
    }
    //using structuredclone (deep copy Modern way)
    {
        copy_obj=structuredClone(obj)
        console.log(copy_obj);
    }
}
// copyObject(obj)

// 5. Reverse keys and values of an object:
obj={d:5, b:2, c:3} // {1:"a", 2:"b", 3:"c"}
function reverseKeyValue(obj){
    let temp=0
    // Object.entries(obj).forEach( k,v => {
    //     temp=key;
    //     key=obj[key]
    //     obj[key]=temp
    // });
    // console.log(obj);

    let reverse={}
    for(let key in obj){
        reverse[obj[key]]=key
    }
    console.log(reverse);
}
// reverseKeyValue(obj)

// ******************** Advanced (Tricky/Interview) *********************

//1. Find the property with the highest value in an object:

let scores = {alice: 40, bob: 60, charlie: 55}; // Output → "bob"
function highestValue(obj){
    let maxvalue=-Infinity;
    let maxKey=""
    // for (let key in obj){
    //     if(obj[key]>maxvalue){
    //         maxvalue=obj[key]
    //         maxKey=key
    //     }
    // }
    // console.log(maxKey);
    maxvalue=Math.max(...Object.values(obj))
    console.log(maxvalue);
    maxKey=Object.keys(obj).find(k => obj[k]===maxvalue)
    console.log(maxKey);
}
// highestValue(scores)


// 2.Remove duplicate values from an object:

obj={a:1, b:2, c:1, d:3} // {a:1, b:2, d:3}
function duplicate(obj){
    let duplicateObj={}
    for(let key in obj){
        // if(!duplicateObj.includes(obj)){
        //     duplicateObj=obj[key]
        // }
        if(obj[key] == `1`)
    }
    console.log(duplicateObj);
    
}
duplicate(obj)


















// 3.Create a nested object and access a deeply nested property safely.

// 4.Convert an array of objects into a single object by a key:

// [{id:1, name:"a"}, {id:2, name:"b"}] → {1:"a", 2:"b"}


// 5.Compare two objects to check if they are equal (ignoring order of keys).