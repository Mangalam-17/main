// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     //console.log(res.json()); // this returns a promise object which contains our data 
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);                        // this gives proper json data
//     console.log("data 1 -> ",data.fact);     
//     return fetch(url);                       // this sends an another request which returns a promise
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log(data2);
//     console.log("data 2 -> ",data2.fact);    // this is basically promise chaining
// })
// .catch((err)=>{
//     console.log("error",err);

// // Tha above API calls are asynchronous

// console.log("Hello World");
// this gets printed instantly and API calls must be running in the backend and gets printed as soon it gets resolved


// ------------------------------------------------------------------------------------------------------------------------
// Using fetch with async and await
// Now we will be using the same above work using async and await 

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     let res = fetchf(url);
//     console.log(res);
// }
// now call on console -> getFacts()
// This will give undefined, even though the call is made to the fetch(url) but -
// this is because javascript is synchronous so it does not wait for the result, it prints the res instantly 
// this is giving undefined because it may happen that the result is not yet arrived from API


// Now using await and lets see what happens
// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(res);               // this prints the response object
//     console.log(data);              // this prints the data
//     console.log(data.fact)         // this prints the only fact part of the data
// }

// Now if there is some error 
// we know how to handle error -> that is using Try and Catch block

// now, the above code using try and catch block ->
// let url = "https://catfact.ninja/fact";
// // let url = "https://catfact.ninja/fact2"; // this is used to just see how error is handled using try catch block

// async function getFacts() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();            
//         console.log(data.fact);   
//     }
//     catch(err){
//         console.log("Error -> ", err);  // this catches the error
//     }

//     console.log("hello there");
//     // Even if we have some error, this statement gets executed 
//     // inspite having error, our execution wont stop  
// }


// Now if want to chain some data, basically more api calls if we want to request then 
let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log("fact 1 - ",data.fact);

        // Now making more api calls 
        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("fact 2 - ", data2.fact);
    }
    catch(e){
        console.log("Error occured - ", e);
    }
}

// Now, this is more readable format of API calls
