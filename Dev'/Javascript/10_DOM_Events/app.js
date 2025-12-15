// let btn = document.querySelector("button");
// console.dir(btn);

// console.log(btn.onclick); // gives null because nothing is in the onclick event currently

// btn.onclick = function(){
//     // console.log("button was clicked");
//     alert("button was clicked");
// }

// btn.onclick = sayHello;

// for multiple onclick events
// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     // btn.onclick = sayHello;
//     // btn.onmouseenter = function(){
//     //     console.log("you entered a element");
//     // }

//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);

//     btn.addEventListener("dblclick", function(){
//         console.log("you just double clicked the button");
//     })
// }

// function sayHello(){
//     alert("Hello!");
// }

// function sayName(){
//     alert("Its Me!");
// }

// // Random colour generator
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();

//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color updated");
// })

// function getRandomColor(){
//     let red = Math.floor(Math.random() * 255); //not adding 1 because its already starting from 0
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// Event listeners for elements ->
// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log("para was clicked");
// });

// let div = document.querySelector(".box");

// div.addEventListener("mouseenter", function(){
//     console.log("mouse entered inside the box");
// })

// this keyword in event listeners ->
// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "maroon";
// }

// //redundancy removed
// btn.addEventListener("click", changeColor);

// h1.addEventListener("click", changeColor);

// h3.addEventListener("click", changeColor);

// p.addEventListener("click", changeColor);

// btn.addEventListener("click", function(){
//     // console.log(this);
//     // console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "maroon";
// })

// h1.addEventListener("click", function(){
//     // console.log(this);
//     // console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "maroon";
// })

// h3.addEventListener("click", function(){
//     // console.log(this);
//     // console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "maroon";
// })

// p.addEventListener("click", function(){
//     // console.log(this);
//     // console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "maroon";
// })

// Keyboard Events
// looking at mouse event with special default argument
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("mouse was clicked");
// });

// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("mouse was clicked");
// });

// looking at keyboard events with special default argument
// let inp = document.querySelector("input");

// // inp.addEventListener("keydown", function(event){
// //     console.log(event);
// //     console.log("key was pressed");
// // });

// inp.addEventListener("keyup", function(event){
//     console.log("key = ",event.key);
//     console.log("code = ",event.code);
//     console.log("key was released");
// });

//making a game based on the movement of character which is based on arrow keys opf keyboard events
// let inp = document.querySelector("input");

// inp.addEventListener("keydown",function(event){
//     console.log("code = ", event.code);

//     // ArrowUp, ArrowDown, ArrowLeft, ArrowRight
//     // if(event.code == "ArrowUp"){
//     //     console.log("character moves forward");
//     // }
//     // else if(event.code == "ArrowDown"){
//     //     console.log("character moves backward");
//     // }
//     // else if(event.code == "ArrowLeft"){
//     //     console.log("character moves left");
//     // }
//     // else if(event.code == "ArrowRight"){
//     //     console.log("character moves right");
//     // }

//     // ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
//     if(event.code == "KeyU"){
//         console.log("character moves upwards");
//     }
//     else if(event.code == "KeyD"){
//         console.log("character moves downwards");
//     }
//     else if(event.code == "KeyL"){
//         console.log("character moves left");
//     }
//     else if(event.code == "KeyR"){
//         console.log("character moves right");
//     }
// });

// FORM events ->
// let form = document.querySelector("form");

// // form.addEventListener("submit", function(){
// //     console.log("form submitted");
// //     alert("the form is submitted");
// // });

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     alert("the form is submitted");
// });

// Extracting form data ->
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value);
// });

// extracting data using id
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });

//extractind data using form object
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     let user = this.elements[0];  //form.elements[0];
//     let pass = this.elements[1];  //form.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });

// More Events ->
// change event ->
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function(){
//     console.log("change event");
//     console.log("final value is = ", this.value);
// });

// user.addEventListener("input", function(){
//     console.log("input event");
//     console.log("final value is = ", this.value);
// });

// creating a custom text editor
// let inp = document.querySelector("#text");
// let p = document.querySelector("p");

// inp.addEventListener("input", function () {
//   console.log(this.value);
//   p.innerText = this.value;
// });


// Event Bubbling 
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let list = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//   console.log("div was clicked");
// });

// ul.addEventListener("click", function(){
//   console.log("ul was clicked");
// });

// for(li of list){
//   li.addEventListener("click", function(){
//     console.log("li was clicked");
//   });
// }

// To prevent this event bubbling, we use stopPropagation() method using event 
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let list = document.querySelectorAll("li");

div.addEventListener("click", function(){
  console.log("div was clicked");
});

ul.addEventListener("click", function(event){
  event.stopPropagation();
  console.log("ul was clicked");
});

for(li of list){
  li.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("li was clicked");
  });
} 