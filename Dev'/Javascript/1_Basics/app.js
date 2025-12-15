//Looking at basics of JS
// console.log("Hello World");
// console.log("This is JS");

// let a = 10;
// let b = 15;
// console.log("Sum of a and b is :", a + b);

//Template Literals ->
// let pencilPrice = 10;
// let eraserPrice = 5;
// let total = "Total Price is : "+ (pencilPrice + eraserPrice) + " Rupees.";
// let total = `Total Price is : ${pencilPrice + eraserPrice} Rupees.`
// console.log(total);
//console.log(`Total Price is : ${pencilPrice + eraserPrice} Rupees.`)

//Operators in JS 
//Arithmetic Operators
// let a = 10;
// let b = 5;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

//Unary Operators - ++a,a++,a--,--a,pre and post
// console.log(a++); //10
// console.log(++a); //12

//Assignment Operators -> =,+=,*=,%=
// b = a;
// console.log(b);

//Comparison Operators -> >,>=,<,<=,==,!=
// == -> compares value not type
// === -> compares value as well as type too
// let age = 18;
// console.log(age == 18); //false
// console.log(123 == '123');
// console.log(1 == '1');
// console.log(0 == ' ');
// console.log(0 == false);
// console.log(null == undefined);

// console.log(age === 18); //false
// console.log(123 === '123');
// console.log(1 === '1');
// console.log(0 === ' ');
// console.log(0 === false);
// console.log(null === undefined);

//Comparison for non numbers
//console.log('a' < 'A');
//small alphabets have higher values as compared to the capital alphabets
// console.log('*' < '&');

//Conditional Statements -> if-else,nested if-else,switch 

// if statement ->
// if(some condition){
//     do something
// }
// some code after if 
//eg -
// let age = 25;
// if (age >= 18) {
//     console.log("You can vote");
//     console.log("You can drive");
//     let x = 45;
//     console.log(5 * x);
// }

// let name = "Mangalam"
// if(name == "Mangalam"){
//     console.log(`Welcome ${name} ...`)
// }

// Practice Question - create a traffic light system that shows what to do based on colour 
// let color = "red";
// if(color === "red"){
//     console.log("Stop! Risky");
// }
// if(color === "yellow"){
//     console.log("Get ready! Anytime soon");
// }
// if(color === "green"){
//     console.log("Go ! Gotta Go");
// }

// else if statement ->
// if(condition1){
//     do something
// }
// else if(condition2){
//     do something else
// }
// else if(condition3){
//     do something else 
// }

// NOTE- when using multiple if, every if gets executed 
// whereas while using if and else if together, 
// then if first if is right, then else if never gets executed

// let age = 14;
// if(age > 18){
//     console.log("you can vote");
// }
// else if(age >= 18){
//     console.log("you can vote");
// }
// else if(age < 18){
//     console.log("you can not vote");
// }

// let marks = 90;
// if(marks >= 80){
//     console.log("A+");
// }
// else if(marks >= 33 && marks >= 60){
//     console.log("B");
// }
// else if(marks < 33){
//     console.log("F");
// }   

// else statement ->
// let age = 18;
// if( age >= 18){
//     console.log("you can vote");
// }
// else{
//     console.log("you can not vote");
// }

// Popcorn Practice question
// let size = 'XS';
// if(size === 'XL'){
//     console.log("Price is Rs 250");
// }
// else if(size === 'L'){
//     console.log("Price is Rs 200");
// }
// else if(size === 'M'){
//     console.log("Price is Rs 100");
// }
// else if(size === 'S'){
//     console.log("Price is Rs 50");
// }
// else{
//     console.log("Not defined");
// }

//Nested if-else -> writing if-else statement in between if-else statement
// let marks = 45;
// if(marks >= 33){
//     console.log("Pass");
//     if(marks >= 80){
//         console.log("O");
//     }
//     else{
//         console.log("A");
//     }
// }
// else{
//     console.log("Better Luck Next Time");
// }


//Logical Operators -> logical and(&&), logical OR(||), logical NOT(!)
//eg -> making a grading system 

// Practice Questions - done solved

// Truthy and Falsy values 
// if(true){
//     console.log("it has true value");
// }
// else{
//     console.log("it has false value");
// }

// if(false){
//     console.log("it has true value");
// }
// else{
//     console.log("it has false value");
// }

// if(0){
//     console.log("it has true value");
// }
// else{
//     console.log("it has false value");
// }

// if(1){
//     console.log("it has true value");
// }
// else{
//     console.log("it has false value");
// }

// let string = ""; // try with some characters inside the string
// if(string){
//     console.log("string is not empty");
// }
// else{
//     console.log("string is empty");
// }

// let num = 0; // try with some other value in num 
// if(num){
//     console.log("num is not equal to 0");
// }
// else{
//     console.log("num is equal to 0");
// }

// switch statement 

// let color = "blue";
// console.log("Before switch statement");
// switch(color){
//     case "red":
//         console.log("Stop");
//         break;

//     case "yellow":
//         console.log("Get ready");
//         break;

//     case "green":
//         console.log("Go");
//         break;

//     default:
//         console.log("The light is broken");
//         break;
// }

// console.log("After switch statement");

// switch statement for day wise printing 
// let day = 1;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thursday");
//         break;

//     case 5:
//         console.log("Friday");
//         break;

//     case 6:
//         console.log("Saturday");
//         break;

//     case 7:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("Not a valid day");
//         break;
// }

// Alerts and Prompts

//Alerts -> 
// alert("This is an alert msg")
// console.log("this is a simple msg");
// console.error("this is an error msg");
// console.warn("this is a warning msg")

//Prompts ->
//prompt("Please enter your name : ");
// let name = prompt("Please enter your name : ");
// console.log(name);

// let firstname = prompt("Enter your firstname : ");
// let lastname = prompt("Enter your lastname : ");
// //console.log("Welcome",firstname,lastname);
// let fullname = "Welcome " + firstname + " " + lastname ;
// alert(fullname);

// Assignment Q1 -
// let num = 11;
// if(num % 10 == 0){
//     console.log("good");
// }
// else{
//     console.log("bad");
// }

// Assignment Q2 -
// let name = prompt("Enter your username : ");
// let age = prompt("Enter your age : ");
// alert(`${name} is ${age} years old.`)

// Assignment Q3 -
// let quarter = 4;
// switch (quarter) {
//     case 1: console.log("January, February and March");
//         break;

//     case 2: console.log("April, May and June");
//         break;

//     case 3: console.log("July, August and September");
//         break;

//     case 4: console.log("October, November and December");
//         break;

//     default: console.log("Not a valid input");
// }

// Assignment Q4 -
// let string = "amanda";
// if((string[0] == "a" || string[0] == "A") && string.length == 5){
//     console.log("Golden String");
// }
// else{
//     console.log("Not a Golden String")
// }

// Assignment Q5 - 
// let a = 41;
// let b = 51;
// let c = 61;

// if(a > b){
//     if(a > c){
//         console.log("a is the largest");
//     }
//     else{
//         console.log("c is the largest");
//     }
// } else{
//     if(b > c){
//         console.log("b is the largest");
//     }
//     else{
//         console.log("c is the largest");
//     }
// }

// Assignment Q6 - 
// let firstnum = 12;
// let secondnum = 223;
// if((firstnum % 10) == (secondnum % 10)){
//     console.log("numbers have the same last digit which is", firstnum % 10);
// }
// else{
//     console.log("numbers dont have the same largest digit");
// }
