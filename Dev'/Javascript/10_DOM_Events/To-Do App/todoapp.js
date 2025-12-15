// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function(){
//     let newTask = document.createElement("li");
//     newTask.innerText = inp.value;

//     let delbtn = document.createElement("button");
//     delbtn.innerText = "delete";
//     delbtn.classList.add("delete");

//     newTask.appendChild(delbtn);
//     ul.appendChild(newTask);
//     inp.value = ""; // this is used to reset the input value after every fresh entry, it gets reset
//     console.log("you are adding a task");
// });

// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }
// we can see that the delete button which is added for the new tasks does not work on
// the new tasks this is because the event listeners which we add on our page always gets
// added for the existing elements, this dont apply for the new elements

// After using event delegation which deletes the new element as well from the todo list
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let newTask = document.createElement("li");
  newTask.innerText = inp.value;

  let delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  delbtn.classList.add("delete");

  ul.appendChild(newTask);
  newTask.appendChild(delbtn);
  console.log("item added");
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let delEle = event.target.parentElement;
    delEle.remove();
    console.log("item deleted");
  }
});
