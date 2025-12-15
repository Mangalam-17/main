// Function Definition ->
// function hello() {
//     console.log("hello");
// }

// Function Calling ->
// hello();
// hello();

// function printName() {
//     console.log("your name");
// }
// printName();

// function print1to5() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(i);
//     }
// }
// print1to5();   

// function isAdult(){
//     let age = 18;
//     if(age >= 18){
//         console.log("Adult");
//     }
//     else{
//         console.log("Not an Adult");
//     }
// }
// isAdult();

// Create a function that prints a poem
// function printPoem(){
//     console.log("Twinkle, twinkle, little star");
//     console.log("How I wonder what you are");
//     console.log("Up above the world so high");
//     console.log("Like a diamond in the sky");
//     console.log("Twinkle, twinkle little star");
//     console.log("How I wonder what you are");
//     console.log("When the blazing sun is gone");
//     console.log("When he nothing shines upon");
//     console.log("Then you show your little light");
//     console.log("Twinkle, twinkle, all the night");
//     console.log("Twinkle, twinkle, little star");
//     console.log("How I wonder what you are");
// }
// printPoem();

// create a funtion to roll a dice and always display the value of the dice(1 to 6)
// function rollaDice(){
//     console.log(Math.floor(Math.random() * 6) + 1);
// }
// rollaDice();
// rollaDice();
// rollaDice();
// rollaDice();
// rollaDice();
// rollaDice();

// Functions with Arguments
// function printName(name){
//     console.log(name);
// }
// printName("David");
// printName("Bechkam");

// function printInfo(name, age){
//     console.log(`${name}'s age is ${age} years old.`);
// }
// printInfo("David", 18);
// printInfo("David")       // the value we pass as an argument gets stored orderwise 
// printInfo(18);           // order matters, starting with the first argument

// function sum(a, b){
//     console.log(a + b);
// }
// sum(4,5);
// sum(5,9);

// function calcAverage(a, b, c){
//     let avg = ((a+b+c)/3);
//     console.log(avg);
// }
// calcAverage(25,35,53);
// there is f shown in the console window, which shows this is a function
// for example, Math.random() also shows f which is a function, like console.log

// create a function that gives multiplication table of a number 
// function multiplicationTable(n){
//     for(let i = n; i <= n * 10; i += n){
//         console.log(i);
//     }
// }
// multiplicationTable(2);

//Return keyword ->
// function sum(a, b){
//     return a + b;
// }
// sum(3,7); // this does not prints the value 
// to print the value we have to use console.log
// or we can return it in the form of some variable 
// let s = sum(20,30);
// console.log(s); // Now it prints the value 
// console.log(sum(20,80)); // we can also directly print the value 

// when we want to print the sum of three numbers at once -> # Function Hack 
// console.log(sum(sum(10,20), 70));

// function isAdult(age){
//     if(age >= 18){
//         return "adult";
//     }
//     else{
//         return "not an adult";
//     }
//     console.log("hello"); // this will not be printed due to return function 
// }
// console.log(isAdult(17));
// NOTE : Return keyword always returns a single value, it never returns multiple values 


// create a function that returns the sum of numbers from 1 to n 
// function getSum(n){
//     let sum = 0;
//     for(let i = 0; i<=n; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(getSum(3));


// create a function that returns the concatenation of all strings in an array 
// let str = ["hii","hello","bye","!"];

// function concat(str){
//     let result = "";
//     for(let i = 0; i<str.length; i++){
//         result += str[i];
//     }
//     return result;
// }
// console.log(concat(str));

// question based on scope -> what will be the output ? 
// let greet = "hello";       //Global scope - greet as hello

// function changeGreet(){
//     let greet = "namaste";  //Function scope - greet as namaste
//     console.greet(greet);

//     function innerGreet(){
//         console.log(greet); //Lexical scope - greet as namaste   
//     }
// }
// console.log(greet); //here global greet will be printed
// changeGreet();      //this will print greet as namaste in the function scope
// But the function innerGreet will not print something b/c it is never called anywhere

// Function Expressions -> another way to define functions basically using a variable name 
// const sum = function (a, b) {
//     return a + b;
// }
// console.log(sum(3, 5));

// let hello = function () {
//     console.log("Hello !");
// }
// console.log(hello());

// we can also change its values as shown below 
// hello = function(){
//     console.log("namaste");
// }
// console.log(hello());

// Higher Order Functions -> which takes a function as an argument 
// function multipleGreet(func, count){  
//     for(let i = 1; i<=count; i++){   
//         func();
//     }
// }
// let greet = function(){
//     console.log("Hello");
// }

// multipleGreet(greet, 10);
// multipleGreet(function (){console.log("namaste")}, 10); 

// Higher Order Functions -> which returns a function

// function oddEvenFactory(request){
//     if(request == "odd"){
//         return function(n){
//             console.log(!(n % 2 == 0));
//         }
//     } 
//     else if(request == "even"){
//         return function(n){
//             console.log(n % 2 == 0);
//         }
//     }
//     else{
//         console.log("Wrong Request");
//     }
// }

// let request = "odd";
// let func = oddEvenFactory(request);
// console.log(func);
// console.log(func(21));

// let request = "even";
// let func = oddEvenFactory(request);
// console.log(func);
// console.log(func(22));

// Methods -> actions that can be performed on an object
// const calculator = {
//     num : 34,
//     add : function(a, b){
//         return a+b;
//     },
//     sub : function(a, b){
//         return a-b;
//     },
//     mul : function(a, b){
//         return a*b;
//     }
// };
// console.log(calculator.add(1,2));
// console.log(calculator.sub(1,2));
// console.log(calculator.mul(1,2));

// Methods(Shorthand)
// const calculator = {
//     add(a, b){
//         return a+b;
//     },
//     sub(a, b){
//         return a-b;
//     },
//     mul(a, b){
//         return a*b;
//     }
// };
// console.log(calculator.add(1,2));
// console.log(calculator.sub(1,2));
// console.log(calculator.mul(1,2));

// Assignment Questions
// Q1- write a js function that returns array elements larger than a number
// let arr = [5,3,6,4,7,8,2,9];
// let num = 7;

// function getElements (arr, num){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > num){
//             console.log(arr[i]);
//         }
//     }
// }
// getElements(arr,num);

// Q2- write a js funtion to extract unique characters from a string 
// let str = "abcdefghabcdefgh";

// function getUnique(str){
//     let ans = "";
//     for(let i = 0; i<str.length; i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1){
//             ans += currChar;
//         }
//     }
//     return ans;
// }
// console.log(getUnique(str));

// Q3- write a js function that accepts a list of country names as input and returns the longest country name as output
// let country = ["Australia","Germany","United States Of America"];

// function getLargest(country){
//     let ansIdx = 0;
//     for(let i =0; i<country.length; i++){
//         let ansLen = country[ansIdx].length;
//         let currLen = country[i].length;
//         if(currLen > ansLen){
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }
// console.log(getLargest(country));

// Q4- write a js function to count the number of vowels in a string alphabet
// let str = "alphabet";
// let count = 0;
// let i = 0;

// function getVowels(str) {
//     while (i < str.length) {
//         if (str[i] == "a") {
//             count++;
//         }
//         else if (str[i] == "e") {
//             count++;
//         }
//         else if (str[i] == "i") {
//             count++;
//         }
//         else if (str[i] == "o") {
//             count++;
//         }
//         else if (str[i] == "u") {
//             count++;
//         }
//         i++;
//     }
//     return count;
// }
// console.log(getVowels(str));

// or 
// let str = "alphabet";

// function getVowels(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (
//             str.charAt(i) == "a" ||
//             str.charAt(i) == "e" ||
//             str.charAt(i) == "i" ||
//             str.charAt(i) == "o" ||
//             str.charAt(i) == "u") {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(getVowels(str));

// Q5- write a js function to  generate a random number within a range(start, end)
// let start = 1000;
// let end = 2000;

// function genRandom(start, end){
//     let diff = end - start;
//     return Math.floor(Math.random() * diff) + start;
// }
// console.log(genRandom(start, end));

