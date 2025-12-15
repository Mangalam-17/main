// this keyword -> refers to an object that is executing the current piece of code
// const student ={
//     name : "David",
//     age : 18,
//     eng : 65,
//     math : 98,
//     sci : 99,
//     getAvg(){
//         console.log(this);
//         let avg = (this.eng + this.math + this.sci)/3;
//         console.log(`${this.name} got an average of ${avg} marks`);
//     },
// };
// console.log(student.getAvg()); // gives an error without using this

// function getAvg(){
//     console.log(this);
// }
// console.log(getAvg());
// console.log(window.getAvg());

// Try and catch block - try throws error and catch catches the error
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log(a)            // after this error, nothing gets printed
// console.log("hello");     // generally, website crashes
// console.log("hello");
// console.log("hello");

// to avoid these things, we use try and catch block ->

// console.log("hello");
// console.log("hello");
// console.log("hello");

// try {
//     console.log(a);
// } catch {
//     console.log("error caught which is that, a is not defined");
// }
// console.log("hello");
// console.log("hello");
// console.log("hello");

// But if we already have a defined then it catches the error unaffecting the other part of the code
// console.log("hello");
// console.log("hello");
// console.log("hello");
// let a = 10;
// try {
//     console.log(a);
// } catch(err) {
//     console.log("error caught which is that, a is not defined");
//     console.log(err);
// }
// console.log("hello");
// console.log("hello");
// console.log("hello");

// Arrow Function ->
// const sum = (a, b) =>{
//     console.log(a+b);
// };
// console.log(sum);
// console.log(sum(5, 6));

// const cube = (n) => { //function having single argument does not require parenthesis
//     return n*n*n;
// }
// let c = cube(5);
// console.log(c);

// function with no arguments must have parenthesis
// const hello = () =>{
//     console.log("hello world");
// };
// hello();

// Implicit Return in arrow functions -> curly changes to parenthesis
// const mul = (a, b) => (a * b);
// console.log(mul(3, 5));

// Reconstructiong previous functions
// const sum = (a, b) => (a + b);

// setTimeout Function -> usually used for api calls and request/response
// console.log("hi there");

// setTimeout( () => {
//     console.log("hello");
// }, 4000);
// console.log("welcome there");
// console.log("welcome there");
// console.log("welcome there");
// console.log("welcome there");

// setInterval Function ->
// console.log("hello there");
// setInterval(() => {
//     console.log("Hello");
// }, 2000);
// console.log("Welcome");

// using clear interval function to stop execution of set interval function
// let id = setInterval(() => {
//     console.log("Hello");
// }, 2000);

// console.log(id);
// clearInterval(id);
// as soon as the clear interval hits, the set interval function gets stopped

//this with Arrow Functions ->
// const student = {
//     name : "david",
//     marks : 98,
//     prop : this,                //global scope
//     getName : function() {
//         console.log(this);       //
//         return this.name;        // returns object.name
//     },
//     getMarks : () => {
//         console.log(this);      // parent's scope -> window object, because here marks is defined for student object not for window object
//         return this.marks;      // returns window object
//     },
//     getInfo1 : function(){
//         setTimeout( ()=> {
//             console.log(this);
//         },2000);
//     },
//     getInfo2 : function(){
//         setTimeout( function() {
//             console.log(this);
//         },2000);
//     },
// };
// calling functions where arrow functions can not access object variables
// student.getName();
// student.getMarks();
// console.log(student.getName());  //this gives the name in the student object
// console.log(student.getMarks()); //this cannot access the marks section

// calling functions where arrow functions have advantage
// student.getInfo1();
// student.getInfo2();
// console.log(student.getName());   //this returns now student object
// console.log(student.getMarks());  //this returns now window object
// how this happened ->
//for arrow functin  -> the parent is a normal function, so for that the object will be student onplay
//for normal funcion -> the object is called using the function itself, so here the function is the setTimeout funcion
// Hence, it return window object, becaue the function setTimeout is the part of the window object only

// Q- Write an arrow function that returns the square of a number 'n'
// const square = (n) => {
//     return n * n;
// }
// const square = (n) => n * n;
// console.log(square(13));

// Q- Write a function that prints "Hello World" 5 times of intervals of 2s each
// let id = setInterval(()=>{
//     console.log("Hello World");
// },2000);                           // this will run for indefinite time

// setTimeout(()=>{
//     clearInterval(id);
//     console.log("Clear interval ran");
// },10000);

// ASIGNMENT
// Q1 - write an arrow function that accepts an array of numbers and returns the avg of an array

// const arrayAvg = (arr) =>{
//     let sum = 0
// for(let i = 0; i<arr.length; i++){
//     sum += arr[i];
// }

//     for(let num of arr){
//         sum += num;
//     }
//     return sum / arr.length;
// }

// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arrayAvg(arr));

// Q2 - Write an arrow function named isEven that takes a single number as argument and returns if it is even or not
// const isEven = (n) =>{
//     if(n % 2 == 0){
//         console.log("yeah, it is an even number");
//     }
//     else{
//         console.log("nope, it is an odd number");
//     }
// }

// isEven(2);
// isEven(3);
// isEven(4);
// isEven(5);
// isEven(6);

// or
// let num = 8;
// const isEven = (num) => (num % 2 == 0);
// console.log(isEven(num));

