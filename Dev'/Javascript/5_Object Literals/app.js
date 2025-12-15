// const student = {
//     name : "David",
//     age : 18,
//     marks : 97
// };
// Here, the student stores the reference which stores the address like arrays
// But, its values which are inside can be changed like arrays
// we can also add values like arrays
// console.log(student);

// let student2 = ["David",18,97];
// console.log(student2);
// the sequence in the array gives as the indices are followed by

// const item = {
//     price : 100,
//     discount : 50,
//     colors : ["red","pink"]
// };
// console.log(item);

//Thread / Twitter Post ->
// const post = {
//     username : "David",
//     content : "This is my first post",
//     likes : 120,
//     reposts : 29,
//     tags : ["@facebook","@linkedin"]
// };
// console.log(post);
// let prop = "reposts";
// console.log(post[prop]);
// console.log(post.prop); // this gives error because we cannot use dot operator to access variable



// Get Values ->
// let student = {
//     name : "David",
//     marks : 98
// };
// Syntax -> 
// 1. Object["key"];
// 2. Object.key;
// console.log(student["name"]);
// console.log(student["marks"]);
// console.log(student.name);
// console.log(student.marks);
// when using dot operator, we cannot use variable name 

// Conversion in get values 
// const obj = {
//     1 : "a",
//     2 : "b",
//     true : "c",
//     null : "d",
//     undefined : "e"
// };
// console.log(obj);
// console.log(obj[1]);
// console.log(obj[2]);
// console.log(obj.null);
// console.log(obj.undefined);

// Add / Update values -
// const student = {
//     name : "David",
//     age : 18,
//     marks : 96,
//     city : "California"
// };
// console.log(student); 
// Try further in console section
// student.gender = "Male";
// console.log(student);
// student.city = "Chicago";
// console.log(student);
// student.marks = ['98','99','100'];
// console.log(student);
// delete student.marks;
// console.log(student);

// Nested Objects ->
// const classInfo = {
//     david : {
//         grade : 'A',
//         city : "California"
//     },
//     tom : {
//         grade : 'B',
//         city : "Amsterdam"
//     },
//     steve : {
//         grade : 'C',
//         city : "Chicago"
//     }
// };
// console.log(classInfo);
// console.log(classInfo.david);
// console.log(classInfo.david.city);
// console.log(classInfo.tom);
// console.log(classInfo.tom.grade);
// console.log(classInfo.steve);
// classInfo.david.city = "LA City";
// console.log(classInfo.david.city);

// Array Of Objects ->
// const classInfo = [
//     {
//         name : 'a',
//         grade : 'A',
//         city : "a"
//     },
//     {
//         name : 'b',
//         grade : 'B',
//         city : "b"
//     },
//     {
//         name : 'c',
//         grade : 'C',
//         city : "c"
//     }
// ];
// console.log(classInfo);
// console.log(classInfo[0]);
// console.log(classInfo[1]);
// console.log(classInfo[2]);
// console.log(classInfo[0].city);
// console.log(classInfo[1].grade);
// classInfo[0].gender = "Male";
// console.log(classInfo[0]);
// console.log(classInfo[1]);
// console.log(classInfo[2]);
// console.log(classInfo);

// Math Object ->
// console.log(Math); // we got a list of various properties 
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.abs(-12));
// console.log(Math.floor(5.6));
// console.log(Math.floor(5.9));
// console.log(Math.ceil(5.2));
// console.log(Math.ceil(5.1));
// console.log(Math.random()); // exclusive of 1
// console.log(Math.random());
// console.log(Math.random());

// Random Integers -> from 1 to 10
// let num = Math.random();
// num = num * 10;
// num = Math.floor(num);
// num + 1 is used because 1 is exclusive, so it will never provide 1 or 10 as result, so to get it done we add 1 
// num = num + 1;
// console.log(num);

//One liner random number generator ->
// let num = 
// console.log(Math.floor(Math.random() * 10)) + 1;

// Practice Question 1 - Generate a random number between 1 and 100
// console.log(Math.floor(Math.random() * 100)) + 1;

// Practice Question 1 - Generate a random number between 1 and 100
// console.log(Math.floor(Math.random() * 5)) + 1;

// ASSIGNMENT 
// Q1 - Generate a random number between 1 and 6 representing a dice roll
// let dice = (Math.floor(Math.random() * 6) + 1);
// console.log(dice);

// Q2 - Create an object representing a car that stores following properties -
// car : name,model,color
// print the car's name
// const car = {
//     name : "Audi",
//     model : "A8",
//     color: "white"
// };
// console.log(car.name);
// console.log(car["name"]);

// Q3 - Create an object person with their name, age and city 
// edit their original city to new york
// add a new property country and set it to United States
// const person = {
//     name : "David",
//     age : 18,
//     city : "California",
// }
// console.log(person);
// person.city = "New York";
// console.log(person);
// person.country = "United States";
// console.log(person);