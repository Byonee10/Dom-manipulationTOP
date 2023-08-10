const p = document.createElement("p");
const body = document.querySelector("body");
p.textContent = "Hey I am red!";
p.style.color = "red";
const h3 = document.createElement("h3");
h3.textContent = "I am a blue h3!";
h3.style.color = "blue";
body.appendChild(p);
body.appendChild(h3);
const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.border = "black solid";
const h1 = document.createElement("h1");
h1.textContent = "I am in a div";
const meTooText = document.createElement("p");
meTooText.textContent = "ME TOO!"
body.appendChild(div);
div.appendChild(h1);
div.appendChild(meTooText);
/* second method of event (first method is in html file) */
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

/* third method (most useful) */

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

/* exercise counter */

const buttonPlus = document.createElement("button");
const buttonMinus = document.querySelector("#minus");
body.insertBefore(buttonPlus,p);
buttonPlus.textContent = "+";
let count = 0;
const counter = document.querySelector("#count");
counter.textContent = 0;

const updateNumber = () => {
    counter.textContent = count;
}

const decrement = () => {
    count-=1;
    updateNumber();
}
const increment = () =>{
    count += 1;
    updateNumber();
}

buttonPlus.addEventListener("click",increment);
buttonMinus.addEventListener("click",decrement);
