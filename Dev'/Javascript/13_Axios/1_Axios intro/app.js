// Axios -> Library to make http requests
// Axios internally uses fetch only but it is much better and more compact way to send requests
// visit - axios github
// adding axios via cdn link in html

/* Question -  Why axios is used when we have fetch method ??
   Answer - the response in fetch was a readable stream but not the exact json data,
   But we have to parse the data
   
   But here in axios we get directly the exact response, we dont need to parse the data here
   Hence, we have a better method to directly access the data basically response 
*/

// let url = "https://catfact.ninja/fact";

// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         // console.log(res);
//         // console.log(res.data);
//         console.log(res.data.fact);
//     }
//     catch(e){
//         console.log("Error - ", e);
//     }
// }

// ------------------------------------------------------------------------------------------------
// Axios further ->

// Sending Headers with API requests ->

// let url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//   try {
//     let res = await axios.get(url);
//     console.log(res); // returns the promise object
//     console.log(res.data); // gives the data in html format
//   } catch (e) {
//     console.log(e);
//   }
// }
// call the function in console

// Now we will be passing headers with our request ->
// we want our data in application/json format

// async function getJokes() {
//   try {
//     const config = { headers: { Accept: "application/json" } };
//     let res = await axios.get(url, config);
//     //console.log(res); // returns the promise object
//     console.log(res.data); // gives the data in html format
//   } catch (e) {
//     console.log(e);
//   }
// }
// call the function in console

//------------------------------------------------------------------------------------------------------------------------

//Activity using Query Strings
// let url = "http://universities.hipolabs.com/search?name=";

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//   let country = document.querySelector("input").value;
//   console.log("Country - ",country);
//   let collArr = await getColleges(country);
//   //console.log(collArr);
//   console.log("The colleges are as follows ->");
//   show(collArr);
// });

// function show(collArr){
//     let list = document.querySelector("#result");
//     list.innerText = "";

//     for(col of collArr){
//         console.log(col.name);

//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }
// async function getColleges(country) {
//   try {
//     let res = await axios.get(url + country);
//     return res.data;
//   } catch (e) {
//     console.log("erorr -", e);
//     return [];
//   }
// }
// Basically this above code prints the name of universities based on the country entered by user

// So, now write a code which prints the name of universities based on the states entered
// where the country name is fixed in the header with query string as country name
// we just have to pass the state name 

let url = "http://universities.hipolabs.com/search?name=india&state=";

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//   let country = document.querySelector("input").value;
//   console.log("Country - ",country);
//   let collArr = await getColleges(country);
//   //console.log(collArr);
//   console.log("The colleges are as follows ->");
//   show(collArr);
// });

// function show(collArr){
//     let list = document.querySelector("#result");
//     list.innerText = "";

//     for(col of collArr){
//         console.log(col.name);

//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

let state = "bihar";
async function getColleges() {
  try {
    let res = await axios.get(url + state);
    return res.data;
  } catch (e) {
    console.log("erorr -", e);
    return [];
  }
}