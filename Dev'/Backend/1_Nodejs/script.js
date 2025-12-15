// console.log("We are going to print the numbers from 1 to 5");
// let n = 5;
// for(let i =0; i < 5; i++){
//     console.log("number : ", i);
// }
// console.log("The numbers has been printed");

// console.log(process.argv);
// let args = process.argv;

// for (let i = 0; i < args.length; i++) {
//   console.log("hello to ", args[i]);
// }

// const math = require("./math");

// console.log(math);

// console.log(math.sum(3, 7));
// console.log(math.mul(3, 7));
// console.log(math.PI);



// const info = require("./Fruits");
// console.log(info);

// console.log(info[0]);
// console.log(info[1].name);
// console.log(info[2].color);
// index.js is a special name - remember 


//--------------------------------------------------------------------------------------------------------------------------
//Using import instead of require, 
// Either we use require only in our project completely or import 
// Its not like using both, its a bad practice 

// import{sum, PI} from "./math.js";

// Here we have to write the file name with extension as well

// console.log(sum(1, 2));
// This will show an error that only using import and export the things wont work 
// We should have a file under the directory which is package.json 
// under package.json, we have to set -> "type" : "module"

// After having package.json in the directory, now 

// import{sum, PI} from "./math.js";
// console.log(sum(1, 2));
// now this will work now 

// basically for using import, we have to export the things as well and along with that
// we have to have package.json in our diretory using npm init and set -> "type":"module"

// when we use require, we have to take whole thing even if we dont want, 
// which is not efficient memory wise

// but what if we want only few things, then we use import,
// we can even import only one function 

// Loading is synchronous for require means the first written things loads first and later...

// But in import, it is asynchronous which doesnt follow any particular orderd,
// if the later things are ready, then it can be loaded first
// which results in better management 
// relatively, import is better than require    

// we should only one of them at once


// using random words library
import { generate } from "random-words";
console.log(generate());
// now this above will generate a random word 