// Understanding JS call stack - basically function call stored in stack having function information 
// As soon as the function is executed the function gets removed from the call stack

// function hello(){
//     console.log("inside the hello function");
//     console.log("hello");
// }

// function demo(){
//     console.log("inside the demo function");
//     hello();
//     console.log("demo");
// }

// console.log("calling demo function");
// demo(); // first 
// console.log("done! Bye");

// Visualizing the call stack
function one(){
    return 1;
}

function two(){
    // first one function does the third call
    // second one function does the fourth call
    return one() + one();
}

function three(){
    // two() function does the second call
    let result =  two() + one();
    // one() function does the fifth call 
    console.log(result);
}

three(); // first call invoked