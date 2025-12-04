// console.log({a:100}=={a:100});
let arr=[1,2,3,4,5,3,5];
for(let i=0; i<arr.length;i++) {
    for(let j=i+1; j<arr.length;j++){
        if(arr[i]===arr[j])
        {
            console.log(arr[i])
        }
    }
}
let a=[];
for(let i=0;i<arr.length;i++){
    if(!a.includes(arr[i])){
        a.push(arr[i])
    }
    else{
        console.log("output := ",arr[i])
    }
}
console.log(a);
