const buttonA = document.querySelector("#button_A");
const headingA = document.getElementById("heading_A");
buttonA.addEventListener("click", function(){
    const name = prompt("What is your name?");
    alert(`Hello ${name}, nice to see you!`);
    headingA.textContent = `Welcome, ${name}`;
});
const textBox = document.querySelector("#textBox");
const output = document.getElementById("output");
textBox.addEventListener("keydown", function(){
    output.textContent = `You pressed "${event.key}".`
});