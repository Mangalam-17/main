// getElemntsByClassName -

// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i < smallImages.length; i++){
//     //console.dir(smallImages[i]);
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of img ${i} is changed`);
// }

// getElemntsByTagName -

// console.log(document.getElementsByTagName("p"));
// console.log(document.getElementsByTagName("p")[1].innerText);
// document.getElementsByTagName("p")[1].innerText = "abc";
// console.log(document.getElementsByTagName("p")[1].innerText);

// query selector
// console.dir(document.querySelector('p'));

// console.dir(document.querySelector(".box"));

// console.dir(document.querySelector(".box a"));

// console.dir(document.querySelectorAll(".box a"));

// console.dir(document.querySelectorAll('p'));

// Using style property, change the colour of anchor tags in unordered list to some other color
// let links = document.querySelectorAll(".box a");

// for(link of links){
//     link.style.color = "yellow";
// }
// for(let i = 0 ; i<links.length; i++){
//     links[i].style.color = "green";
// }

//Practice Quesn
// append -> this keeps the element at the bottom of the body that too after the script tag as it is adding from end which is append
// let para1 = document.createElement('p');
// para1.innerText = "Hey I'm red";

// document.querySelector('body').append(para1);

// para1.classList.add('red');

// let heading3 = document.createElement('h3');
// heading3.innerText = "I'm a blue h3";

// document.querySelector('body').append(heading3)

// heading3.classList.add('blue');

// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let para2 = document.createElement('p');

// h1.innerText = "I'm in a div";
// para2.innerText = "I'm too in a div";

// div.append(h1);
// div.append(para2);

// div.classList.add("box");

// document.querySelector('body').append(div);

//prepend -> this keeps the element at the top of the body
// let para1 = document.createElement("p");
// para1.innerText = "Hey I'm red";

// document.querySelector("body").prepend(para1);

// para1.classList.add("red");

// let heading3 = document.createElement("h3");
// heading3.innerText = "I'm a blue h3";

// document.querySelector("body").prepend(heading3);

// heading3.classList.add("blue");

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText = "I'm in a div";
// para2.innerText = "I'm too in a div";

// div.append(h1);
// div.append(para2);

// div.classList.add("box");

// document.querySelector("body").prepend(div);

// Assignment
// //Q1
// let button = document.createElement("button");
// let input = document.createElement("input");
// button.innerText = "Click Me";

// document.querySelector("body").append(input);
// document.querySelector("body").append(button);

// //Q2
// button.setAttribute("id", "btn");
// input.setAttribute("placeholder", "username");

// //Q3
// let btn = document.querySelector("#btn");
// btn.classList.add(".btnStyle");

// //Q4
// let h1 = document.createElement('h1');
// h1.innerHTML = "<u>DOM Practice</u>";

// document.querySelector('body').append(h1);

// //Q5
// let p = document.createElement('p');
// p.innerHTML = "<b>Apna College</b> Practice";
// document.querySelector("body").append(p);
