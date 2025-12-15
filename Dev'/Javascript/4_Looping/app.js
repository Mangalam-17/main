// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// for loop ->
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// printing generalized table 
// let n = prompt("Enter the number : ");
// n = parseInt(n); // convert the string in to the integer number 
// for (let i = n; i <= n * 10; i = i + n) {
//     console.log(i);
// }

// Nested Looping ->
// for (let i = 1; i <= 3; i++) {
//     console.log(`outer loop ${i}`);
//     for (let j = 1; j <= 3; j++) {
//         console.log(j);
//     }
// }

// While loop  ->
// let i = 5;
// while(i <= 5){
//     console.log(i);
//     i++;
// }

// while(i >= 1){
//     console.log(i);
//     i--;
// }

// Favourite Movie Program in JS ->
// const favMovie = "Batman";
// let guess = prompt("Guess my fav movie");

// while(guess != favMovie){
//     if(guess == "quit"){
//          console.log("You quit");
//         break;
//     }
//     guess = prompt("Wrong Guess, try again :");
// }

// if(guess == favMovie){
//     console.log("Congrats! You've got it right");
// }


// Break keyword -
// let i = 1;
// while(i <= 5){
//     if(i == 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// Loops with arrays ->
// let fruits = ["apple", "banana", "mango", "orange"];
// fruits.push("watermelon");
// for (let i = 0; i < fruits.length; i++) {
//     console.log(i, fruits[i]);
// }
// prints name of fruits along with index
// try printing the odd indices
// try printing the even indices
// reversing the array
// for (let i = fruits.length - 1; i >= 0; i--) {
//     console.log(i, fruits[i]);
// }

// Nested Loops with Nested Arrays ->
// using concept of outer array and inner array 
// outer array using outer arrays to print the values
// inner array using individual arrays to print the values 
// let heroes = [["batman","superman","spiderman"],["captain america","ironman","thor"]];
// for(let i = 0; i < heroes.length; i++){
//     console.log(heroes[i],heroes[i].length);
//     for(let j = 0; j < heroes[i].length; j++){
//         console.log(`j = ${j}, ${heroes[i][j]}`);
//     }
// }

// let students = [["a",92], ["b",93], ["c",94]];
// for(let i = 0; i < students.length; i++){
//     console.log(`Info of student #${i}`);
//     for(let j = 0; j < students[i].length; j++){
//         console.log(students[i][j]);
//     }
// }  

// for of loop ->
// let fruits = ["apple", "banana", "mango", "orange"];
// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "batman"){
//     console.log(char);
// }

// Nested for-of loop ->
// let heroes = [["batman","superman","spiderman"],["captain america","ironman","thor"]];
// for(list of heroes){
//     console.log(list);
//     for(hero of list){
//         console.log(hero);
//     }
// }

// Assignment 
// Q1 -
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// console.log("Array before deletion - ");
// console.log(arr);
// let nums = 2;

// for(let i = 0; i<arr.length; i++){
//     if(arr[i] == nums){
//         arr.splice(i,1);
//     }
// }

// console.log("Array after deletion - ");
// console.log(arr);

// Q2 ->
// let number = 287152;
// let count = 0;

// let copy = number;

// while(copy > 0){
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);

// Q3 ->
// let number = 287152; 
// let sum = 0; 
// let copy = number; 
// while (copy > 0) { 
//     let digit = copy % 10; 
//     sum += digit; 
//     copy = Math.floor(copy / 10); 
// } 
// console.log(sum);   

// Q4 ->
// let n = 5;
// let fact = 1;
// for(let i = 1; i <= n; i++){
//     fact = fact * i;
// }
// console.log(`Factorial of ${n} is ${fact}`);

// Q5 ->
// let nums = [5,4,3,6,7,80,9,2];
// let largest = nums[0];
// for(let i = 0; i< nums.length; i++){
//     if(nums[i] > largest){
//         largest = nums[i];
//     }
// }
// console.log(`Largest number is : ${largest}`);