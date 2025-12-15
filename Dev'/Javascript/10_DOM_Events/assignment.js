// mouseout event in javascript 
// let inp = document.querySelector("input");

// inp.addEventListener("mouseout", function(){
//     console.log("mouse is exited from the input box");
// });

// keypress event in javascript
// let inp = document.querySelector("input");

// inp.addEventListener("keypress", function(){
//     console.log("key pressed just now");
// });

// scroll event in javascript 

// load event in javascript


// create a button element which on click changes its background color
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.log("button clicked");
//     this.style.backgroundColor = "green";
//     console.log("the color of the button is changed to green as you clicked");
// }); 


// dynamically visibility based question 
let inp = document.querySelector("input");
let h2 = document.querySelector("h2");

inp.addEventListener("input", function(){
    console.log(this.value);
    h2.innerText = this.value;
})