// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// console.log("3");

var a = 1; // functional scop
let b = 2; // block
const c = 3; // block

// function fun() {
//   if (true) {
//     var a = 4;
//   }
//   a = 9;
// }
// console.log(a);

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 2000);
// }

// call(), apply(), bind()
// function greet(city, country) {
//   console.log(`Hello ${this.name} from ${city}, ${country}`);
// }

// const user = { name: "Test" };

// greet.call(user, "Delhi", "India");

// greet.apply(user, ["Mumbai", "India"]);

// const boundGreet = greet.bind(user, "Bengaluru", "India");
// boundGreet();

// // Normal function
// function fun() {
//   console.log("Hello");
// }
// fun();

// // Arrow function
// const func = () => console.log("Hello");
// func();

// const obj = {
//   name: "Test",
//   greet: () => {
//     console.log(this.name);
//   },
// };

// console.log(obj.greet());

const obj = {
  name: "Test",
  greet() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  },
};

obj.greet(); // Test
