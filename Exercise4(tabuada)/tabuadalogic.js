let value = document.getElementById("value");
const button = document.getElementById("button");
const table = document.getElementById("firstRow");
const tbody = document.getElementById("tbody");
const trFirst = document.getElementById("repeat");

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

let tr;
let td;

button.addEventListener("click", () => {
  trFirst.innerHTML = "";
  for (let i = 0; i < 11; i++) {
    tr = document.createElement("tr");
    td = document.createElement("td");
    td.innerHTML = value.value;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = "*";
    tr.appendChild(td);
    
    td = document.createElement("td");
    td.innerHTML =i;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = "=";
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = value.value * i;
    tr.appendChild(td);

    tbody.appendChild(tr);
  }
});
