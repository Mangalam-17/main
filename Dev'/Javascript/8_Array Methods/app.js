// forEach -
// let arr = [1,2,3,4,5,6,7];

// let print = function(ele){
//     console.log(ele);
// }
// arr.forEach(print);

// arr.forEach(function(ele){
//     console.log(ele);
// });

// using forEach with arrow function
// arr.forEach((ele) =>{
//     console.log(ele);
// });

// using forEach for objects
// let arr = [{
//     name : "david",
//     marks : 96,
//     },
//     {
//     name : "tom",
//     marks : 93,
//     },
//     {
//     name : "steve",
//     marks : 99,
//     },
// ];
// arr.forEach((student) =>{
//     console.log(student);
//     console.log(student.marks);
// })

// Map Function ->
// let arr = [1,2,3,4];
// let double = arr.map((ele) =>{
//     return ele * 2;
// });
// console.log(double);

// another usecase
// let arr = [{
//     name : "david",
//     marks : 96,
//     },
//     {
//     name : "tom",
//     marks : 93,
//     },
//     {
//     name : "steve",
//     marks : 99,
//     },
// ];

// let gpa = arr.map((ele) => {
//     return ele.marks / 10;
// })
// console.log(gpa);

// Filter function
// let arr = [1,2,3,4,5,6,7,8,9,10];

// let ans = arr.filter((ele) =>{
//return ele % 2 == 0;     // filters out only even numbers
//return ele % 2 != 0;       // filters out only odd numbers
//     return ele < 5;            // filters out numbers less than 5
// });
// console.log(ans);

// Every function -> returns true if every element of array gives true for some function
// else returns false

// console.log([1,2,3,4,5].every((ele) => {return ele % 2 == 0}));
// console.log([2,4,6].every((ele) => {return ele % 2 == 0}));
// console.log([1,2,3,4,5].every((ele) => {return ele % 2 != 0}));
// console.log([1,3,5].every((ele) => {return ele % 2 != 0}));

// Some function - > returns true if some element of array gives true for some function
// else returns false

// console.log([1,2,3].some((ele) => {return ele % 2 == 0}));
// console.log([3,5,7].some((ele) => {return ele % 2 == 0}));
// console.log([2,4,6,7].some((ele) => {return ele % 2 != 0}));
// console.log([2,4,6,8].some((ele) => {return ele % 2 != 0}));

// Reduce function ->  reduce the array to a single value
// let nums = [1,2,3,4,5];
// let finalValue = nums.reduce((res, ele) => (res + ele));
// console.log(finalValue);

// let nums = [1,2,3,4,5];
// let finalValue = nums.reduce((res, ele) => {
//     console.log(res);
//     return res + ele;
// });
// console.log(finalValue);

// Finding the maximum in an array using the reduce method ->
// let arr = [1,2,3,4,5,6,17,8,9,4,2,6];

// let max = arr.reduce((max, ele) => {
//     if(max < ele){
//         return ele;
//     }
//     else{
//         return max;
//     }
// })
// console.log(max);

// Q -> check if all numbers in our array are multiples of 10 or not
// let nums = [10,20,30,40,50];

// let res = nums.every((ele) => ele % 10 == 0);
// console.log(res);

// Q-> create a function to find the min element in an array
// let nums = [21,5,6,8,9,11];
// let min = nums.reduce((min, ele) => {
//     if(min > ele){
//         return ele;
//     }
//     else{
//         return min;
//     }
// })
// console.log(ans);

//or
// function getMin(nums){
//     let min = nums.reduce((min, ele) => {
//         if(min > ele){
//             return ele;
//         }
//         else{
//             return min;
//         }
//     });

//     return min;
// }
// let arr = [3,4,5,-3];
// console.log(getMin(arr));

// Default Parameters -> giving a default value to the arguments
// function sum(a, b = 10){
//     return a + b;
// }
// console.log(sum(5,4));
// console.log(sum(5));

// Spread
// console.log(Math.min(1, 2, 3));
// console.log(Math.min(1, 2, 3, 4, 5, 6, 7));
// console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8));
// console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(
//   Math.min(
//     arr[0],
//     arr[1],
//     arr[2],
//     arr[3],
//     arr[4],
//     arr[5],
//     arr[6],
//     arr[7],
//     arr[8],
//     arr[9]
//   )
// );
// console.log(Math.min(...arr)); // this passes the whole array at once, basically individual elements one by one

// Spread with Array literals 
// let arr = [1,2,3,4,5];
// let newArr = [...arr];
// console.log(arr);
// console.log(newArr);
// newArr.push(6); //this will not arr array
// console.log(newArr);

// taking strings in an array using the spread 
// let chars = [..."hello"];
// console.log(chars);

// adding two arrays in another using spread
// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];

// let nums = [...odd, ...even];
// console.log(nums);
// if we want to change the order of the odd and even 
// let nums = [...even, ...odd];
// console.log(nums);

// Spread with Object Literals ->
// const data = {
//     email : "ironman@gmail.com",
//     password : "abcd",
// };

// const dataCopy = {...data, id : 123, country : "India"};
// console.log(data);
// console.log(dataCopy);

// spread array in an object - basically indices are key here and values are pairs here 
// let arr = [1,2,3,4,5];
// let obj1 = {...arr};
// console.log(obj1);

// spread string in an object - basically indices are key here and values are pairs here 
// let obj2 = {..."hello"};
// console.log(obj2);

// REST concept -> allows a function to take an indefinite number of arguments and bundle them in an array
// args basically stores all the elements in form of an array 
// but arguments can not use the array functions and methods 
// so we use ...args which can perform the functions of the array as well

// function sum(...args){
//     for(let i = 0; i<args.length; i++){
//         console.log("you gave us : ", args[i]);
//     }
// }
// sum(1,2,3,4);


// function sum(){                              // this will not work because arguments is not an array
//     arguments.reduce((sum,el) => sum + el);  // so we try to avoid using arguments, we use REST which is (...args)
// }

// but what if 
// function sum(...args){                           // this will work because args acts an array
//     return args.reduce((sum,el) => sum + el);  
// }
// console.log(sum(100,200));

// We can also use REST to replicate the Math.min and Math.max function
// Math.min using REST -
// function min(...args){
//     return args.reduce((min, el) => {
//         if(min > el){
//             return el;
//         }
//         else{
//             return min; 
//         }
//     })
// }
// console.log(min(-100,4,6,3,9));

// Math.max using REST -
// function max(...args){
//     return args.reduce((max, el) => {
//         if(max > el){
//             return max;
//         }
//         else{
//             return el; 
//         }
//     })
// }
// console.log(max(-100,4,6,3,900));

// Using REST, but passing another argument as well with ...args ->
// function max(msg, ...args){
//     console.log(msg);
//     return args.reduce((max, el) => {
//         if(max > el){
//             return max;
//         }
//         else{
//             return el; 
//         }
//     })
// }
// console.log("hello", 100,200,300); // here hello is assigned to msg argument and rest are assigned to ...args
// console.log(max(-100,4,6,3,900));  // here -100 is assigned to msg argument and rest are assigned to ...args
// when we want to take extra parameter, we write another argument only before using the ...args 
// otherwise the syntax becomes wrong , causing error, basically not a valid syntax
// NOTE -  A REST parameter must be the last in the parameter list


// Destructing -> storing values of array into multiple variables
// let names = ["tony","bruce","steve","peter","abc","xyz","pyq"];
// let winner = names[0];
// let runnerUp = names[1];
// let [winner, runnerUp, secondRunnerUp] = names;
// console.log(winner);
// console.log(runnerUp);
// console.log(secondRunnerUp);
//orderwise the value gets assigned
// but when we have large number of elements then we mixmatch the concepts of REST-
// let [winner, runnerUp, secondRunnerUp, ...others] = names;
// console.log(winner);
// console.log(runnerUp);
// console.log(secondRunnerUp);
// console.log(others);

// Destructing objects -> 
// const student = {
//     name : "david",
//     age : 14,
//     class : 11,
//     subjects : ["hindi","english","maths","science"],
//     username : "david@123",
//     password : "abcd",
    //city : "Pune",
// };
// let{username, password} = student;
// console.log(username);
// console.log(password);  

// let {username : user, password : secret} = student;
// console.log(user);
// console.log(secret);

// let {username : user, password : secret, city = "Mumbai"} = student; // city value will not change 
// console.log(user);
// console.log(secret);
// console.log(city);


// let {username : user, password : secret, city : place = "Mumbai"} = student; 
// console.log(secret);
// console.log(place);
// here, it will show city is not defined, but as soon as we remove city from the object, it will show mumbai 



// Assignment 
// Q1 - square and sum the array elements using the arrow function and then find the average of the array 
// let arr = [1,2,3,4,5,6,7,8,9,10];

// const square = arr.map((ele) => ele * ele)
// console.log(square);

// let sum = square.reduce((res, ele)=> res + ele);
// console.log(sum);

// let avg = sum / arr.length;
// console.log(avg);


// Q2 - create a new array using map function whose element is equal to the original element plus 5
// let arr = [0,5,10,15,20,25];

// console.log(arr.map((ele) => ele + 5));

// Q3 - create a new array whose elements are in uppercase of words present in the original array
// let arr = ["hi","there","whats","up"];
// console.log(arr);

// console.log(arr.map((ele)=> ele.toUpperCase()));

// Q4 - Write a function called double And Return Args whicha ccepts an array and a variable number of arguments.
// The function should return a new array with the original array values and all of the additional arguments doubled.

// const doubleAndReturnArgs = (arr, ...args) => [...arr,...args.map((v) => v * 2),
// ];

// console.log(doubleAndReturnArgs([1,2,3],4,4));
// console.log(doubleAndReturnArgs([2],10,4));


// Q5 - Write a function called mergeObjects that accepts two objects and returns a new object 
// which contains all the keys and values of the first object and second object.
// const mergObjects = (obj1, obj2) => ({...obj1,...obj2})
//console.log(mergObjects({a : 1, b : 2}, {c : 3, d : 4}));