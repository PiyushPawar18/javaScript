//basic
/*
//1. Reverse a string
let str="hello"  //→ "olleh"
let new_str=""
function reverse(str){
    for(i=str.length-1;i>=0;i--){
        new_str=new_str.concat(str[i]);
    }
    console.log(new_str);
}
// reverse(str);    //"olleh"


// 2.Check if a string is a palindrome (same forward and backward).
str="nayan" //→ true, "hello" → false
let isPalindrome=false;
function palindrome(str){
    if(str[0]===str[str.length-1]){
        isPalindrome=true
    }
    else{
        isPalindrome = false
    }
    console.log(isPalindrome);
    
}
// palindrome(str)

// 3.Count vowels and consonants in a string
str="apple" // → vowels = 2, consonants = 3
let v_count=0,c_count=0;
function vowelsCount(str){
    for(let i=0;i<str.length;i++){
        let vowels="aeiouAEIOU";
        if(vowels.includes(str[i])){
            v_count++;
        }
        else{
            c_count++;
        }
    }
    console.log(`vowel -> ${v_count} consonants -> ${c_count}`);
}
// vowelsCount(str)

// 4.Find the frequency of each character in a string
str= "banana" //→ { b:1, a:3, n:2 }
let obj={}
function freqStr(str){
    for(let i=0;i<str.length;i++){
        let val=str[i];
        if(obj[val]){
            obj[val]++;
        }
        else{
            obj[val]=1;
        }
    }
    console.log(obj);
}
// freqStr(str)

//5. Remove duplicate characters from a string
str="programming"  // → "progamin"
new_str=""
function duplicate_val(str){
    for(let i=0;i<str.length;i++){
        if(!new_str.includes(str[i])){
            new_str=new_str.concat(str[i])
        }
    }
    console.log(new_str);
}
*/
// 6. Check if two strings are anagrams (contain same characters in different order).
// 👉 Example: "listen", "silent" → true
let str1="listen"
let str2="silent"
let isAnagrams=false;
function anagrams(str1,str2){
    if(str1.includes(str2)){
        isAnagrams=true
    }
    else{
        isAnagrams=false
    }
    console.log(isAnagrams);
    
}
// anagrams(str1,str2)



// Find the first non-repeating character in a string
// 👉 Example: "swiss" → "w"
let str="swiss"
function first_non_repeat(a){
    
    for(let i=0; i<a.length; i++){
        let count=0
        for(let j=0;j<a.length;j++){
            if(a[i]===a[j] && i!==j){
                count=1;
                break;
            }
        }
        if(count==0){
             console.log(a[i])
             break;
        }
    }  
}
// first_non_repeat(str)

// Convert a string to title case (first letter of each word capital).
// 👉 Example: "hello world" → "Hello World"
str="hello world"
console.log(str.split(" "));
let arr=str.split(" ")
console.log(`${arr[0]} ${arr[1]} ${arr[2]}`)


// Check if a string contains only digits
// 👉 Example: "12345" → true, "12a45" → false

// Count words in a string
// 👉 Example: "I love JavaScript" → 3 words

// Find the longest word in a sentence
// 👉 Example: "I love programming in JavaScript" → "programming"

// Check if one string is a rotation of another
// 👉 Example: "abcde" and "cdeab" → true

// Reverse words in a sentence
// 👉 Example: "I love JS" → "JS love I"

// Replace all spaces in a string with -
// 👉 Example: "I love JS" → "I-love-JS"

// Check if a string has all unique characters
// 👉 Example: "abcd" → true, "aabc" → false


//reverse str
// str="piyush"
// let a=str.split("")
// console.log(a.reverse());
// str=a.join("")
// console.log(str);
// // let output=str.split("").reverse().join("")

// let a=null;
// let b;
// console.log(a);
// console.log(Number(a));
// console.log(b);
// console.log(Number(b));

// let a=[,,,]  //if you keep the ele empty at last position it won't be considered 
// console.log(a.length);

// function number(){
//     console.log(number.xyz);
    
// }
// number()
// number.xyz=100
// number.xyz=200
// number()



// console.log(typeof typeof Number); //string
// console.log(typeof typeof String);
// console.log(typeof typeof Object); //string
console.log(typeof Number); //function

// const a=[..."piyush","pawar"]
// // console.log(a);

// console.log(parseInt("10+2"));
// console.log(parseInt("7FM"));
// console.log(parseInt("F7M"));
// console.log(parseInt("23F32"));

// console.log(Number("")); //0
// console.log(Number("Pi"));  //NaN
// console.log(isNaN("piyush")); //true

function abc(){
    return ;
}
console.log(abc());


console.log([1,2].map(num=>{
    if(num>0) return ;
    return num*2;
}));

{
    var a=12;
}
console.log(a);
{
    function abc(){
        console.log("pp");
        
    }
}
abc()
"use strick";
{
    function p(){
        console.log("pp");
        
    }
}
p()

//Global scope

