let no = document.getElementsByClassName("no");
let result = document.getElementById("result");
let equal = document.getElementById("equal")
let AC = document.getElementById("Ac");
let DEL = document.getElementById("Del");
let arithMeticOperator = document.getElementsByClassName("arithMetic");

//********* My way */
// for(let i=0;i<no.length;i++){
//    if(no[i].addEventListener("click",() => {
//     if(result.textContent==="0"){
//         result.textContent = ""
        
//     }
//     result.textContent += no[i].innerHTML;
//    })){}
// }

//******** Using event */
let keys = document.querySelector("#keys")
keys.addEventListener("click",(e) => {
    // console.log(e.target.className);
    if(e.target.className.includes("no")){
        if(result.innerHTML === "0"){
            result.innerHTML = "";
        }
        result.innerHTML += e.target.innerText;
    }
})

// console.log(arithMeticOperator)
//we cannot access arithMeticOperator.innerHTML because its HTMLcollection we use as arithMeticOperator[0].innerHTML
let Operator = ['+','-',"*","/"]
for(let i=0;i<arithMeticOperator.length;i++){
    arithMeticOperator[i].addEventListener("click",() => {
        let current = result.innerText;
        newOpr = arithMeticOperator[i].innerText
        // lastChar = current[current.length-1]
        lastChar = current.slice(-1)
        console.log(lastChar);
        
        if(Operator.includes(lastChar)){
            result.innerText = current.slice(0,-1) + newOpr
        }
        else{
            result.innerText +=  newOpr;
        }
    })
}


const point = document.querySelector("#point");
point.addEventListener('click', () => {
    let dot = point.innerText;
    let current = result.innerText;
     // find the last operator (+ - * /)
    const lastOperatorIndex = Math.max(
        current.lastIndexOf('+'),
        current.lastIndexOf('-'),
        current.lastIndexOf('*'),
        current.lastIndexOf('/')
    );

    // get the current number (after the last operator)
    console.log(lastOperatorIndex);
    const currentNumber = current.slice(lastOperatorIndex + 1);
    console.log(currentNumber);

    // conditions
    if (currentNumber.includes('.')) {
        // prevent second dot in same number
        return;
    } else {
        // add dot
        result.innerText += dot;
    }
})





equal.addEventListener('click',() => {
    let str=result.innerText ;
    // console.log(str,typeof str); 

    //****** WAY 1 */
    // let ans = eval(str);
    // console.log(ans)
    //****** WAY 2 */
    let ans = new Function("return " + str) ();
    console.log(ans);
    result.innerHTML = ans;
    
})

AC.addEventListener("click",() => {
    result.textContent = "0";
})
DEL.addEventListener("click",() => {
    let Str = result.textContent;
    //****** WAY 1 */
    // arrStr=Str.split("");
    // arrStr.pop();
    // result.textContent = arrStr.join("");
    //****** WAY 2 */
    result.textContent = Str.slice(0, -1);

    if(result.textContent.length == 0){
        result.textContent = "0";
    }
    // if(result.textContent == ""){
    //     result.textContent = "0";
    // }
})
