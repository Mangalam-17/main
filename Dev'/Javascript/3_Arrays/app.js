// let students = ["abc","def","ghi","jkl"];
// let marks = ["99","94","100","97","98"];
// let info = ["david",45,8.9];

// let str = "david";         // in case of string 
// console.log(str[0]);       // strings are immutable
// console.log(str[0] = 'b');
// console.log(str);

// let fruits = ["apple","banana","orange"];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// fruits[1] = "mango";
// console.log(fruits);
// fruits[3] = "watermelon";
// console.log(fruits);
// fruits[8] = "papaya";
// console.log(fruits);

// Array Methods ->
// 1.push method - adds to end
// let cars = ["audi", "bmw", "maruti"];
// console.log(cars);
// cars.push("toyota");
// console.log(cars);
// cars.push("ferrari");
// console.log(cars);

// 2. pop method - delete from end and returns it
// cars.pop();
// console.log(cars);

// 3. unshift method - adds to start
// cars.unshift("baleno");
// console.log(cars);

// 4. shift method - delete from start and end it
// cars.shift();
// console.log(cars);

//taking example of followers list in a social media site
// let followers = ['a','b','c','d'];
// let blocked = followers.shift();
// console.log(followers);
// console.log(blocked);

// 5. indexOf method - returns index of something
// let primary = ["red","yellow","green"];
// console.log(primary.indexOf("yellow"));
// console.log(primary.indexOf("Yellow"));
// console.log(primary.indexOf("blue"));
// console.log(primary.indexOf("red"));
// console.log(primary.indexOf("magenta"));

// 6. includes method - search for a value
// console.log(primary.includes("yellow"));
// console.log(primary.includes("blue"));
// console.log(primary.includes("red"));
// console.log(primary.includes("magenta"));

// 7. concat method - merge 2 arrays
// let primary = ['a','b','c','d'];
// let secondary = ['e','f','g','h'];
// console.log(primary.concat(secondary));

// 8. reverse method - reverse an array
// console.log(primary.reverse());
// console.log(secondary.reverse());
// console.log(primary.reverse());
// console.log(secondary.reverse());
// remember, by using reverse method, changes takes place in the og array

// 9. slice method - copies a portion of an array 
// let colors = ["red","blue","yellow","orange","magenta","white"];
// console.log(colors.slice());
// console.log(colors.slice(2));
// console.log(colors.slice(2,3));
// console.log(colors.slice(-2));
// console.log(colors.slice(6));
// console.log(colors.slice(colors.length-1));
// console.log(colors.slice(colors.length));

// 10. splice method - removes/replaces/add elements in place
// format -> splice(start,deleteCount,item0...itemN)
// let colors = ["red","blue","yellow","orange","magenta","white"];
// console.log(colors);
// console.log(colors.splice(5));  //removes the elements after a certain index hits  
// console.log(colors);
// console.log(colors.splice(0,1));
// console.log(colors);
// console.log(colors.splice(0,0,"pink","grey"));
// console.log(colors);
// console.log(colors.splice(1,0,"cyan"));
// console.log(colors);
// console.log(colors.splice(1,1,"maroon"));
// console.log(colors);

// 11. sort method - sorts an array 
// let arr = ['f','e','a','b','d','c'];
// console.log(arr);
// console.log(arr.sort()); 


// Array References -> address in memory 
// console.log("name" == "name");
// console.log("name" === "name");
// console.log([1] == [1]);
// console.log([1] === [1]);
// console.log([] == []);
// console.log([] === []);

// let arr = ['a','b','c'];
// let arrCopy = arr;
// console.log(arr == arrCopy);
// console.log(arr === arrCopy);
// here address gets same of both the arrays 
// same changes will reflect only when the addresses are same
// new array means new address 
// arr.push('d');
// arrCopy.pop();
// console.log(arrCopy);
// console.log(arr);

// Constant Arrays 
// const nums = [1,2,3];
// nums.push(4);
// nums.pop();
// console.log(nums);
// nums = [1,2,3,4,5];
// console.log(nums);

// Nested Arrays / Multidimensional Arrays ->
// let nums = [[1,2],[3,4],[5,6]];
// console.log(nums);

// Tic-Tac-Toe game -
// let game = [["X",null,'O'],[null,"X",null],["O",null,'X']];
// console.log(game);

// Assignment ->
// Q1 -
// let nums = [7,9,0,-2];
// let n = 3;
// let ans = nums.slice(0,n);
// console.log(ans);

//Q2-
// let arr = [7,9,0,-2];
// let n = 3;
// let ans = arr.slice(arr.length - n);
// console.log(ans);

// Q3 - 
// let str = prompt("please enter a string : ");
// if(str.length == 0){
//     console.log("empty string");
// }
// else{
//     console.log("not an empty string");
// }

// Q4-
// let string = "arraY";
// let ans = string[4];
// if(string[4].toLowerCase() == ans){
//     console.log("true");
// }
// else{
//     console.log("false");
// }


// Q5-
// let str = prompt("please enter a string : ");
// console.log(`original string : ${str}`);
// console.log(`modified string : ${str.trim()}`);

// Q6-
// let arr = [1,2,3,4,5];
// let element = 4;
// if(arr.includes(element)){
//     console.log(arr.indexOf(element));
// }
// else{
//     console.lopg("element not found")
// }

// we can also write as -
// if(arr.indexOf(element) != -1){
//     console.log("element exists in array");
// }
// else{
//     console.log("element does not exists in array");
// }