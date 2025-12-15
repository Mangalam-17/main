// String Methods->
// 1. Trim Method
// let msg = "   H ello   ";

// let password = prompt("set your password : ");    
// console.log(password.trim());                    // remember - original string value never changes,
                                                    // always a new string is created for any function

// Strings are immutable in JS , original value of string never changes

// let str = "Random String";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// String methods with arguments -> argument is some value we pass in to the field 
// let str = "IloveCoding";
// console.log(str.indexOf("C"));
// console.log(str.indexOf("Love"));
// console.log(str.indexOf("love"));
// console.log(str.indexOf("y"));

// Method Chaining ->
// let msg = "  hello  ";
// let newMsg = msg.trim();
// console.log("After trim : ", newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("After to_uppercase : ", newMsg);
//let newMsg = msg.trim().toUpperCase();   // method chaining
//console.log(newMsg);

// String Slicing/ Slice method -> Returns the part of the original string as a new string 
// ending part of any index is non inclusive, that is not included 
// let str = "Ilovecoding";
// console.log(str.slice(0, 5));
// console.log(str.slice(5, 11));
// console.log(str.slice(5)); 
// when we pass single index,then after that indexx everything is printed by default ending index is taken as string.length
// console.log(str.slice(-1));
// when we pass negative values, then the remaining values gets printed after the value hit a cetain index