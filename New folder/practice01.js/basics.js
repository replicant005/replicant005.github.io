/*
variable button , whose value is the one of button in document(html doc),
that is selected by the query selector 
const button = document.querySelector("button");

addEventListener() method is used when "click" event  takes place,
and updateName function is executed
button.addEventListener("click" , updateName);

function 
function updateName() {

new variable name, prompts user with the given string 
cont name = prompt ("enter a new name");

text inside the button is now the asigned value
button.textContent = 'Player 1: ${name};
}

function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}

<script type="module">, the code is treated as a module
 and the browser waits for all HTML to be processed 
 before executing JavaScript modules.


*/

