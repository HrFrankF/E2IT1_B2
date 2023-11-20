const tables = document.querySelectorAll(".statistic-table");
const btn1 = document.getElementById("hidebutton1");
const btn2 = document.getElementById("hidebutton2");
const btn3 = document.getElementById("hidebutton3");
const btn4 = document.getElementById("hidebutton4");
const btn5 = document.getElementById("hidebutton5");
const btn6 = document.getElementById("hidebutton6");

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");

const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");
const table3 = document.getElementById("table3");
const table4 = document.getElementById("table4");
const table5 = document.getElementById("table5");
const table6 = document.getElementById("table6");

btn1.addEventListener("click", function(){
    if(table1.style.display != "none"){
        box1.style.height = "100px";
        table1.style.display = "none";
    }
    else{
        box1.style.height = "200px";
        table1.style.display = "block";
    }
});