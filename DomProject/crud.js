const nameEmp = document.getElementById("name")
const age = document.getElementById("age")
const city = document.getElementById("city")
const submit = document.getElementById("submit");

const table = document.querySelector("table")
const delbtn = document.createElement("button")
delbtn.className = "btn-modify"
const editbtn = document.createElement("button")
editbtn.className = "btn-modify"
const div = document.createElement("div");
div.id="Modification"
div.appendChild(delbtn);
div.appendChild(editbtn);
console.log(div)
let sr = 1;
submit.addEventListener("click", () => {
    const tr= document.createElement("tr");
    tr.innerHTML = `
                <td>${sr}</td>
                <td>${nameEmp.value}</td>
                <td>${age.value}</td>
                <td>${city.value}</td>
                <td>${div}</td>
    `
    table.appendChild(tr)
    sr++;
    console.log(nameEmp.value);
    console.log(age.value);
    console.log(city.value);
})

