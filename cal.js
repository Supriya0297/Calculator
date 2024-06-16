const Solve = (char) => {
    let display = document.getElementById("display");
    display.value += char;
}

const Clear = () => {
    document.getElementById("display").value = "";
}

const Backspace = () => {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

const Result = () => {
    let display = document.getElementById("display");
    let expression = display.value;
    display.value = eval(expression);
    const node = document.getElementById("ans");
    const text = document.createElement('div');
    text.innerHTML = expression + '=<br>'+eval(expression);
    node.appendChild(text);
}

const sq = () => {
    let display = document.getElementById("display");
    display.value = Math.pow(display.value, 2);
    
}

const inverse = () => {
    let display = document.getElementById("display");
    display.value = Math.pow(display.value, -1);
}

const sqr = () => {
    let display = document.getElementById("display");
    display.value = Math.sqrt(display.value);
}

const s=()=>{
    let display=document.getElementById("display");
    display.value=Math.sin(display.value);
}

const c=()=>{
    let display =document.getElementById("display");
    display.value=Math.cos(display.value);
}

const t=()=>{
    let display =document.getElementById("display");
    display.value=Math.tan(display.value);
}

const si=()=>{
    let display=document.getElementById("display");
    display.value=Math.sin(display.value,-1);
}

const ci=()=>{
    let display =document.getElementById("display");
    display.value=Math.cos(display.value,-1);
}

const ti=()=>{
    let display =document.getElementById("display");
    display.value=Math.tan(display.value,-1);
}

const ex=()=>{
    let display=document.getElementById("display");
    display.value=Math.exp(display.value);
}

const lg=()=>{
    let display=document.getElementById("display");
    display.value=Math.log(display.value);
}

const swi = () => {
    let switc = document.getElementById("switch");
    let sec1 = document.querySelector(".section1");
    let sec2 = document.querySelector(".section2");

    sec1.classList.toggle("invisible");
    sec2.classList.toggle("invisible");
}