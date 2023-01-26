let tableContainer = document.getElementById("tableContainer");
let table = document.createElement("table");
tableContainer.appendChild(table);

let tr1 = document.createElement("tr");
let th1 = document.createElement("th");
th1.innerHTML = "Movie Name";
let th2 = document.createElement("th");
th2.innerHTML = "Release Year";
let th3 = document.createElement("th");
th3.innerHTML = "Type";

table.appendChild(tr1);
tr1.appendChild(th1);
tr1.appendChild(th2);
tr1.appendChild(th3);

let tr2 = document.createElement("tr");
let tr2_td1 = document.createElement("td");
tr2_td1.innerHTML = "First";
let tr2_td2 = document.createElement("td");
tr2_td2.innerHTML = "1989";
let tr2_td3 = document.createElement("td");
tr2_td3.innerHTML = "Horror";
table.appendChild(tr2);
tr2.appendChild(tr2_td1);
tr2.appendChild(tr2_td2);
tr2.appendChild(tr2_td3);

let tr3 = document.createElement("tr");
let tr3_td1 = document.createElement("td");
tr3_td1.innerHTML = "Second";
let tr3_td2 = document.createElement("td");
tr3_td2.innerHTML = "1994";
let tr3_td3 = document.createElement("td");
tr3_td3.innerHTML = "Comedy";
table.appendChild(tr3);
tr3.appendChild(tr3_td1);
tr3.appendChild(tr3_td2);
tr3.appendChild(tr3_td3);

let tr4 = document.createElement("tr");
let tr4_td1 = document.createElement("td");
tr4_td1.innerHTML = "Third";
let tr4_td2 = document.createElement("td");
tr4_td2.innerHTML = "2019";
let tr4_td3 = document.createElement("td");
tr4_td3.innerHTML = "Documentation";
table.appendChild(tr4);
tr4.appendChild(tr4_td1);
tr4.appendChild(tr4_td2);
tr4.appendChild(tr4_td3);

let tr5 = document.createElement("tr");
let tr5_td1 = document.createElement("td");
tr5_td1.innerHTML = "Fourth";
let tr5_td2 = document.createElement("td");
tr5_td2.innerHTML = "2023";
let tr5_td3 = document.createElement("td");
tr5_td3.innerHTML = "Romance";
table.appendChild(tr5);
tr5.appendChild(tr5_td1);
tr5.appendChild(tr5_td2);
tr5.appendChild(tr5_td3);

let tr6 = document.createElement("tr");
let tr6_td1 = document.createElement("td");
tr6_td1.innerHTML = "Fifth";
let tr6_td2 = document.createElement("td");
tr6_td2.innerHTML = "2020";
let tr6_td3 = document.createElement("td");
tr6_td3.innerHTML = "Action";
table.appendChild(tr6);
tr6.appendChild(tr6_td1);
tr6.appendChild(tr6_td2);
tr6.appendChild(tr6_td3);

table.style.backgroundColor = "pink";
table.style.border = "1px solid black";
table.style.width = "100%";
table.style.textAlign = "center";
table.style.borderCollapse = "collapse";

th1.style.border = "1px solid black";
th1.style.backgroundColor = "rgb(255, 108, 108)";
th1.style.color = "white";
th2.style.border = "1px solid black";
th2.style.backgroundColor = "rgb(255, 108, 108)";
th2.style.color = "white";
th3.style.border = "1px solid black";
th3.style.backgroundColor = "rgb(255, 108, 108)";
th3.style.color = "white";

tr2_td1.style.borderRight = "1px solid black";
tr2_td2.style.borderRight = "1px solid black";
tr2_td3.style.borderRight = "1px solid black";

tr3_td1.style.borderRight = "1px solid black";
tr3_td2.style.borderRight = "1px solid black";
tr3_td3.style.borderRight = "1px solid black";

tr4_td1.style.borderRight = "1px solid black";
tr4_td2.style.borderRight = "1px solid black";
tr4_td3.style.borderRight = "1px solid black";

tr5_td1.style.borderRight = "1px solid black";
tr5_td2.style.borderRight = "1px solid black";
tr5_td3.style.borderRight = "1px solid black";

tr6_td1.style.borderRight = "1px solid black";
tr6_td2.style.borderRight = "1px solid black";
tr6_td3.style.borderRight = "1px solid black";

console.log("testing");
