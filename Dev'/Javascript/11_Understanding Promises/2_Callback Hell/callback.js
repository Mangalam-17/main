// let h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color = "red";
// },1000);

// setTimeout(() => {
//     h1.style.color = "orange";
// },2000);

// setTimeout(() => {
//     h1.style.color = "green";
// },3000);

// Not we will look at callback hell
h1 = document.querySelector("h1");
function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if(nextColorChange) nextColorChange();
  }, delay);
}

changeColor("blue", 1000, () => {
  changeColor("orange", 2000, () => {
    changeColor("green", 3000, () => {
      changeColor("brown", 4000, () => {});
    });
  });
});

// we have done nesting here, if we want to change colour for so much time,
// but we get to see this nesting often in programming during using api, databases and so ...
// this code works, but makes very much confusion
// nesting of callback -> this is called callback hell 
// and its an actual problem with callbacks when working with asynchronously with js
// to prevent from this, we got to use promises, async and await keywords 
// these makes much better programming experience
// because these types of code makes it difficult to understand 
// and makes confusion although these types of codes are used on production level