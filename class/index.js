
let arr=[0,1,2,3,4,5]
function sum(arr){  
    let temp=0;
    for(let i=0;i<arr.length;i++){
        temp=temp+arr[i]
    }
    console.log("sum of the all elements is := ",temp);
    
}
// sum(arr) //1.Find the sum of all elements in an array.
function minmax(arr){
    let min=arr[0];max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i]
        }
        else if(max<arr[i]){
            max=arr[i]
        }
    }
    console.log("minimax := ",min,"maximam := ",max);
    
}
// minmax(arr) //2.Find the maximum and minimum element in an array.
function reverse(arr){
    let rev_arr=[]
    let j=0,temp=0;
    // for(let i=arr.length-1;i>=0;i--){
    //     rev_arr[j]=arr[i];
    //     j++;
    // }
    // for(let i=arr.length-1;i>=0;i--){
    //     rev_arr.push(arr[i]);
    // }
    // for(let i=0,j=arr.length-1 ; i<j ; i++,j--){
    //     temp=arr[i]
    //     arr[i]=arr[j]
    //     arr[j]=temp
    // }
    console.log("Original arr:=",arr," Reverse arr:= ",rev_arr); 
}
// reverse(arr) //3.Reverse an array without using the built-in reverse() method.
function evenOdd(arr){
    let even=[] , odd=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            even.push(arr[i])
        }
        else{
            odd.push(arr[i])
        }
    }
    console.log("even := ",even ," odd:= ",odd);
    
}
// evenOdd(arr) //// 4.Separate the even and odd numbers from an array.
function searchElement(arr){
    let element=3;
    let isIncludes=arr.includes(3);
    console.log(arr);
    
    if(isIncludes){
        console.log(element,"elements is includes"); 
    }
    else{
        console.log(element,"elements is not includes");
    }
    let index=arr.indexOf(element)
    console.log(element,"is at ",index ," position");
    
}
// searchElement(arr) //5.Search for an element in an array.
// arr=[2,2,3,4,5,2,3,4,4,5,5]
function removeDuplicate(arr){
    let new_arr=[]
    // for(let i=0;i<arr.length;i++){
    //     if(!new_arr.includes(arr[i])){
    //         new_arr.push(arr[i])
    //     }
    // }
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1)
                j--
            }
        }
    }
    
    console.log(arr," after removing duplicate arr := ",new_arr);
    
}
// removeDuplicate(arr) //6.Remove duplicate elements from an array.
// arr=[3,5,2,1,7,0]
function sort(arr){
    let temp=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length -1 -i;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    console.log("sorted arr:= " +arr);   
}
// sort(arr) // 7.Sort an array without using the built-in sort() function.
arr=[1,4,5,6,2,3]
function secondMax(arr){
    // let max=arr[0];
    // for(let i=1;i<arr.length;i++){
    //     if(max<arr[i]){
    //         max=arr[i];
    //     }
    // }
    // let index=arr.indexOf(max);
    // console.log(arr);
    // arr.splice(index,1)
    // console.log(arr);
    // max=arr[0]
    // for(let i=1;i<arr.length;i++){
    //     if(max<arr[i]){
    //         max=arr[i];
    //     }
    // }
    // console.log(max);
    let temp=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length -1 -i;j++){
            // if(arr[j]>arr[j+1]){
            //     temp=arr[j]
            //     arr[j]=arr[j+1]
            //     arr[j+1]=temp
            // }
            if(arr[j]<arr[j+1]){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    // console.log(arr[arr.length-2]);
    console.log(arr[1]);
}
// secondMax(arr)

let str="pop"
// let rev_str=""
let c=0;
function palindromeornot(){
    for(let i=str.length-1;i>=0;i--){
        // rev_str[c]=str[i] //this not happens because string are immutable in nature 
        // c++
        rev_str +=str[i]
        // console.log(rev_str);
        
    }
    console.log((rev_str==str)?"palindrome":"not Palindrome");
    
    
} 
// palindromeornot()
function palindromebuild_in(str){
    let rev_str=str.split("").reverse().join("")
    console.log(rev_str);
    
    console.log((rev_str==str)?"palindrome":"not palindrome");
    
}
// palindromebuild_in(str)
str="piyush pawar"
function rev(){
    let rev_str=str.split(" ")
    new_arr=[]
    for(let i=0;i<rev_str.length;i++){
        new_arr=rev_str[i].reverse()
    }
    console.log(new_arr);
    
    console.log(rev_str);
    
}
rev()