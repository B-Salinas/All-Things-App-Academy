// Put your code in here to make each of the tests described in the HTML file
// pass.

window.addEventListener("DOMContentLoaded", (event) => {

  // P R O B L E M   1 
  // const button = document.getElementById("turn-square-red");
  // const divId = document.getElementById("red-outlined-square");

  // button.addEventListener("click", (event) => {
  //   divId.classList.add("red");
  // })

  // P R O B L E M   2 
  // const button = document.getElementById("add-content-to-rectangle");
  // const divId = document.getElementById("empty-rectangle");

  // button.addEventListener("click", (event) => {
  //   divId.innerHTML = "XYZ"; 
  // })

  // P R O B L E M   3 
  // const button = document.getElementById("add-image-to-rectangle");
  // const divId = document.getElementById("lonely-square");

  // button.addEventListener("click", (event) => {
  //   const imgEl = document.createElement("img");
  //   imgEl.src = "./images/logo-emblem-black.svg";
  //   divId.appendChild(imgEl);
  // })

  // P R O B L E M   4
  // document.getElementById("bubble-trouble").addEventListener("click", (event) => {
  //   event.stopPropagation();
  // })

  // P R O B L E M   5
  // const decrementButton = document.getElementById("decrement");
  // const incrementButton = document.getElementById("increment");
  // const zeroOutButton = document.getElementById("zero-out");
  // const counterValueSpan = document.getElementById("counter-value");

  // let counterValue = 0;
  // counterValueSpan.innerHTML = counterValue;

  // decrementButton.addEventListener("click", (event) => {
  //   counterValue -= 1;
  //   counterValueSpan.innerHTML = counterValue;
  // })

  // incrementButton.addEventListener("click", (event) => {
  //   counterValue += 1;
  //   counterValueSpan.innerHTML = counterValue;
  // })

  // zeroOutButton.addEventListener("click", (event) => {
  //   counterValue = 0;
  //   counterValueSpan.innerHTML = counterValue;
  // })

  // P R O B L E M   6
  const inputBox = document.getElementById("my-name-is");
  const inputBoxId = inputBox.getAttribute("id");

  inputBox.addEventListener("keyup", (event) => {
    const inputValue = document.getElementById("my-name-is").value;
    localStorage.setItem(inputBoxId, inputValue);
  })
  
  


  


  // P R O B L E M   7
  // document.getElementById("navigates-elsewhere").addEventListener("click", (event) => {
  //   event.preventDefault();
  // })
















})
