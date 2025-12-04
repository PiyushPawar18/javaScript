
const questionBank = [
    {
        question: "Rohit Sharma highest ODI score",
        option: ["231", "264", "200", "252"],
        correctAns: "264",
        selectedAns: ""
    },
    {
        question: "God of cricket",
        option: ["Virat Kohli", "Sachin Tendulkar", "MS Dhoni", "Kapil Dev"],
        correctAns: "Sachin Tendulkar",
        selectedAns: ""
    },
    {
        question: "Capital city of Australia",
        option: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAns: "Canberra",
        selectedAns: ""
    },
    {
        question: "Which planet is known as the Red Planet?",
        option: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAns: "Mars",
        selectedAns: ""
    },
    {
        question: "Who wrote the Indian National Anthem?",
        option: ["Rabindranath Tagore", "Mahatma Gandhi", "Bankim Chandra Chatterjee", "Subhash Chandra Bose"],
        correctAns: "Rabindranath Tagore",
        selectedAns: ""
    },
    {
        question: "Which is the largest ocean on Earth?",
        option: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAns: "Pacific Ocean",
        selectedAns: ""
    },
    {
        question: "Which is the smallest continent in the world?",
        option: ["Europe", "Australia", "Antarctica", "South America"],
        correctAns: "Australia",
        selectedAns: ""
    },
    {
        question: "Who was the first Prime Minister of India?",
        option: ["Sardar Patel", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose"],
        correctAns: "Jawaharlal Nehru",
        selectedAns: ""
    },
    {
        question: "Which country hosted the 2024 Olympic Games?",
        option: ["France", "Japan", "Brazil", "USA"],
        correctAns: "France",
        selectedAns: ""
    },
    {
        question: "What is the national animal of India?",
        option: ["Elephant", "Tiger", "Lion", "Peacock"],
        correctAns: "Tiger",
        selectedAns: ""
    }
];




const form = document.querySelector("form");


let count = 1;
let ans = 0;
for(let ques of questionBank){
    const div =document.createElement("div");
    div.className = "container";
    const p = document.createElement("p");
    p.className="question";
    p.innerText = `${count}. ${ques.question}`;
    div.appendChild(p)
    const label = document.createElement("label")
    ques.option.forEach((value) => {
        const input = document.createElement("input")
        input.setAttribute("type","radio");
        input.setAttribute("name",`q${count}`);
        input.setAttribute("value",`${value}`);
        // input.innerText = value //this is error because we not add in input tag
        
        label.appendChild(input)
        const text = document.createTextNode(value);
        label.appendChild(text);
        //for br
        const br = document.createElement("br");
        label.appendChild(br)
    })
    div.appendChild(label)
    console.log(div)

    //add updated ans of q in selected Ans
    div.addEventListener('change',(e) => {
        console.log(e.target.value);
        ques.selectedAns = e.target.value;
        console.log(ques.selectedAns)
    });

    count++;
    form.appendChild(div)
}


const div = document.createElement("div")
div.id="submit"
const subBtn = document.createElement("button")
subBtn.setAttribute("type","submit")
subBtn.innerText = "Submit"
div.appendChild(subBtn)
form.appendChild(div)

//correct ans 

//result box
const resultBox = document.querySelector(".result-box")
const result = document.querySelector("#result");
const h4 = document.querySelector("h4")
subBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    result.innerHTML = ""
    console.log("clicked")
    resultBox.style.display = "flex"

    //output // result 
    let ans=0;
    let count=1;
    for(let ques of questionBank){
        console.log(ques.selectedAns);
        if(ques.selectedAns == ques.correctAns){
            ans++;
        }
        else {
            let showCorrectAns = document.createElement("p")
            showCorrectAns.innerHTML = `${count}. correctAns := ${ques.correctAns}` 
            //append showcorrectans in result
            result.appendChild(showCorrectAns)
        }
        count++;
    }
    console.log(ans+"/"+questionBank.length);
    h4.innerText =  ans+"/"+questionBank.length
})