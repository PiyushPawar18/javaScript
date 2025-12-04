// 1.Check if a number is prime.
let no=5;
let isPrime=true;
for(let i=2;i<no;i++){
    if(no%i===0){
        isPrime=false;
        break;
    }
}
if(isPrime==true && no>1){
    console.log(no,"is Prime no")
}else{
    console.log(no,"is not Prime no")
}

// 2.Print the first N Fibonacci numbers.
let N=7;
let a=0,b=1;
console.log(a);
console.log(b);
for(let i=2;i<N;i++){
    let c=a+b;
    console.log(c);
    a=b;
    b=c;
}

// 3.Find the factorial of a number using a loop.
let result=1;
let fact=4;
for (let i=1;i<=fact;i++){
    result=i*result;
    
}
console.log(fact,":=",result);