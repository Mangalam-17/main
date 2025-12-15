// Async Functions
// Always returns a promise

// async function greet(){
//     return "hello";  // it shows result as hello
// }

// also returns a promise in case of a blank function means not returning anything
// async function greet(){ // it shows result as undefined
// }

// async function greet(){
//     abc.abc();          // returns an error says abc is not defined
//     return "hello";
// }

// we can also use throw keyword to throw the error
// async function greet(){
//     throw "some random error"; // throws an error stating "some random error"
//     return "hello";
// }

// we can also use our then and catch method on the async function
// async function greet() {
//   return "hello";
// }

// greet()
//   .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was : ", result);
//   })
//   .catch((error) => {
//     console.log("promise was rejected");
//     console.log("error was : ", error);
//   });
// this function returns the resolved state because there is no error

// But what if there is some error
// async function greet() {
//     throw "404 not found";
//     return "hello";
//   }

//   greet()
//     .then((result) => {
//       console.log("promise was resolved");
//       console.log("result was : ", result);
//     })
//     .catch((error) => {
//       console.log("promise was rejected");
//       console.log("error was : ", error);
//     });
// now, this function throws error, so basically catch method works here, rejected state

// Yess, we can make arrow functions async as well
// let demo = async() => {
//     console.log("hello, this is an arrow async funx")
// }

// -----------------------------------------------------------------------------------------------------------

// Await Keyword - pauses the execution of its surrouinding async function until the promise is settled
// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     },1000);
//   });
// }

// async function demo() {
//   await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
//   getNum();
// }

// chnaging the color change function which we made via promise using async and await
// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       console.log(`color changed to,${color}`);
//       resolve("color changed");
//     }, delay);
//   });
// }

// async function demo() {
//   await changeColor("red", 1000);
//   await changeColor("blue", 1000);
//   await changeColor("orange", 1000);
//   await changeColor("green", 1000);
//   await changeColor("brown", 1000);
//   await changeColor("pink", 1000);
//   await changeColor("yellow", 1000);
//   changeColor("black", 1000);
// }

//--------------------------------------------------------------------------------------------------------------------

// Handling Rejections ->

// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 5) + 1;
//       if(num > 3){
//         reject("promise was rejected");
//       }

//       h1.style.color = color;
//       console.log(`color changed to,${color}`);
//       resolve("color changed");
//     }, delay);
//   });
// }

// async function demo() {
//   await changeColor("red", 1000);
//   await changeColor("blue", 1000);
//   await changeColor("yellow", 1000);

//   // we can see here, if anyone of them gets rejected then the bwlow lines are not getting printed
//   // so to avoid this, we use handling rejections using await keyword
//   let a = 5;
//   console.log(a);
//   console.log("new number is - ",a+3);
// }


// Basically we handle the error using the try and catch block

h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if(num > 3){
        reject("promise was rejected");
      }

      h1.style.color = color;
      console.log(`color changed to,${color}`);
      resolve("color changed");
    }, delay);
  });
}

async function demo() {
  try{
    await changeColor("red", 1000);
  await changeColor("blue", 1000);
  await changeColor("yellow", 1000);
  }
  catch(err){
    console.log("error caught");
    console.log(err);
  }

  let a = 5;
  console.log(a);
  console.log("new number is - ",a+3);
}