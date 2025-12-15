// function savetoDb(data){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;

//     if(internetSpeed > 4){
//         console.log("Internet speed is good, data was saved to db : ", data);
//     }
//     else{
//         console.log("Internet speed was too weak, data was not saved");
//     }
// }
// savetoDb("Hello World");
// savetoDb("Hello World");

//same as above with callbacks leading to callback hell
// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;

//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// } 

// savetoDb(
//   "Hello World",
//   () => {
//     console.log("success : Internet speed is good, data was saved to db");
//   },
//   () => {
//     console.log("failure : Internet speed was too weak, data was not saved");
//   }
// );

// savetoDb(
//   "Hello World",
//   () => {
//     console.log("success : Internet speed is good, data was saved to db");
//     savetoDb(
//       "Hello World2",
//       () => {
//         console.log("success2 : Internet speed is good, data was saved to db");
//         savetoDb(
//           "Hello World3",
//           () => {
//             console.log(
//               "success3 : Internet speed is good, data was saved to db"
//             );
//           },
//           () => {
//             console.log(
//               "failure3 : Internet speed was too weak, data was not saved"
//             );
//           }
//         );
//       },
//       () => {
//         console.log(
//           "failure2 : Internet speed was too weak, data was not saved"
//         );
//       }
//     );
//   },
//   () => {
//     console.log("failure : Internet speed was too weak, data was not saved");
//   }
// );

// Now using Promises and lets see
// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 5) {
//       resolve("success : data was saved");
//     } else {
//       reject("failure : weak connection");
//     }
//   });
// }

// console.log(savetoDb("Hello World")); // or try in the console window
// console.log(savetoDb("Hello World"));
// console.log(savetoDb("Hello World"));
// console.log(savetoDb("Hello World"));
// console.log(savetoDb("Hello World"));

// Understandin .then and .catch method in promises

// let request = savetoDb("Hello World");
// // here request is a promise
// //console.log(request);
// request
//   .then(() => {
//     console.log("promise was resolved");
//     console.log(request);
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//     console.log(request);
//   });

// Another way to implement the promise ->
// savetoDb("Hello World")
//   .then(() => {
//     console.log("promise was resolved");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });
// this will work same

// Promise Chaining -> one after one promises, basically using then one after another
// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 5) {
//       resolve("success : data was saved");
//     } else {
//       reject("failure : weak connection");
//     }
//   });
// }

// // this basically looks like nested callbacks only
// savetoDb("Hello World")
//   .then(() => {
//     console.log("data 1 saved.");
//     savetoDb("Hello World2").then(() => {
//       console.log("data 2 saved.");
//       // we dont need another catch for this .then
//     });
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

// actually using promise chaining
// savetoDb("Hello World")
//   .then(() => {
//     console.log("data1 saved...");
//     return savetoDb("Hello World2");
//   })
//   .then(() => {
//     console.log("data2 saved...");
//     return savetoDb("Hello World3");
//   })
//   .then(() => {
//     console.log("data3 saved...");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });
// actually this above code works as same as we have written for the callback hell
// both works same, and promise makes it more clear and much efficient as well
// promise is more straight forward

// // Now, Results and Errors in Promises
// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 5) {
//       resolve("success : data was saved"); // this is result basically
//     } else {
//       reject("failure : weak connection"); // and this is error
//     }
//   });
// }

// // now taking default arguments in the promises
// savetoDb("Hello World")
//   .then((result) => {
//     console.log("data saved...");
//     console.log(result);
//     return savetoDb("Hello World2");
//   })
//   .then((result) => {
//     console.log("data2 saved...");
//     console.log(result);
//     return savetoDb("Hello World3");
//   })
//   .then((result) => {
//     console.log("data3 saved...");
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("promise was rejected");
//     console.log(error);
//   });

// Now, applying promises to callback hell
// we will be taking the example of the earlier h1 heading color change callback hell situation
// h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// changeColor("blue", 1000, () => {
//   changeColor("orange", 2000, () => {
//     changeColor("green", 3000, () => {
//       changeColor("brown", 4000, () => {});
//     });
//   });
// });

// converting this code along with using promise
// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("color changed");
//     }, delay);
//   });
// }

// // try the following in console
// // let requestPromise = changeColor("red", 1000);
// // console.log(requestPromise);

// // let requestPromise = changeColor("red", 5000);

// // changing the callback hell in to promise object returns
// changeColor("red", 1000)
//   .then(() => {
//     console.log("changed to red color");
//     return changeColor("orange", 1000);
//   })
//   .then(() => {
//     console.log("changed to orange");
//     return changeColor("brown", 1000);
//   })
//   .then(() => {
//     console.log("changed to final brown color");
//   })
  // .catch(() => {
  //   console.log("color not changed, error");
  // });
  
  // catch will not work here because it has very less chance that it fails

  // this code looks more understandable than callbacks hell



// writing a promise for iphone availability
// let isIphoneStore = true;
// let isIphoneAvl = true;

// function getIphone(){
//   return new Promise((resolve, reject) => {
//     if(!isIphoneStore){
//       reject(()=>{
//         name : "Wrong store";
//         message : "Sorry, this is not an apple store!";
//       });
//     }
//     else if(!isIphoneAvl){
//       reject(()=>{
//         name : "Currently out of Stock";
//         message : "Sorry, we will inform you asap";
//       });
//     }
//     else{
//       resolve(()=>{
//         name : "OK! The phone you are searching is available ";
//         message : "Buy Now, before it goes out of stock";
//       });
//     }
//   });
// }

// getIphone()
//   .then(response => console.log(response))
//   .catch(error => console.log(error));