const inputBox = document.getElementById("input-box");
const add = document.querySelector("button");
const listContainer = document.getElementById("list-container");
console.log(inputBox.value);

add.addEventListener("click",() => {
    if(inputBox.value === ""){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = ""
    saveData();
})

console.log(listContainer)
listContainer.addEventListener("click" , (e) => {
    if(e.target.tagName === "LI"){
        // e.target.className = "checked"
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        console.log(e.target.parentElement);
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();