let userName="piyush";

// 1.Write a program to check if a number is positive, negative, or zero using if...else.
let no=-10;
if(no>0){
    console.log(no,"is Positive");
}
else if(no==0){
    console.log(no,"is Zero");
}
else{
    console.log(no,"is Negative");
}

// 2.Use a ternary operator to check if a number is even or odd.
no=0;
let result=(no%2==0)? (no+" is even") : (no+" is odd");
console.log(result);


// 3.Write a program to check if a person is Adult or Minor using if...else.
let age=22;
if(age>=18){
    console.log(userName,"is Adult");
}
else{
    console.log(userName,"is Minor");
}



// 4.Write a program to display the grade based on marks
let score=90;
if(score>=80){
    console.log(userName,"got a Grade A");
} else if(score>=70){
    console.log(userName,"got a Grade B");
} else if(score>=60){
    console.log(userName,"got a Grade C");
} else if(score>=50){
    console.log(userName,"got a Grade D");
} else{
    console.log(userName,"is Fail")
}


// 5.Write a program to check if a given year is a leap year using if...else if.
let year=2024;
if(year%400===0){
    console.log(year ,"is leap year");
}
else if(year%4===0 && year%100!==0){
    console.log(year ,"is leap year");
}
else{
    console.log(year ,"is not leap year");
}

// 6.Write a program using switch case that prints the day of the week (1 = Monday, …, 7 = Sunday).
let day=3;
switch(day){
    case 1: console.log("Monday");break;
    case 2: console.log("Tuesday");break;
    case 3: console.log("Wednesday");break;
    case 4: console.log("Thursday");break;
    case 5: console.log("Friday");break;
    case 6: console.log("Saturday");break;
    case 7: console.log("Sunday");break;
    default: console.log("Enter day between 1-7");
}

// 7.Write a program to check if a string is empty or not.
let string="";
if(string===""){
    console.log("String is empty");
}
else{
    console.log("String is not empty");
}