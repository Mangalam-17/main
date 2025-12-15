const express = require("express");
// express is basically a function

const app = express();
// this is an onject containing various function

// console.dir(app);
// we can print the object, can see properties and this app object has specific method
// which is listen, listen makes a web server which listens for incoming apis

let port = 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
// we can notice that our server gets started and it listens for request
// press ctrl+C to stop our server

// app.use((req, res) => {
//   console.log(req);
//   console.log("request received");

//   res.send("this is a basic response");

//   res.send({
//     name: "apple",
//     color: "red",
//   });

//   let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
//   res.send(code);
// });

// by default there is req and res in the app.use function is there and is created by express only
// express always converts the response in json representation
// currenty the normal res.send sends same response to every routes
// but generally, we dont do this, for different routes we send different responses

// At one path, we can always send a single response only, we cant send multiple responses for a single path
// for different paths, we can send different responses

// app.get("/", (req, res) => {
//   res.send("hello, you are currently at root");
// });

// app.get("/apple", (req, res) => {
//   res.send("you are currently at apple path");
// });

// app.get("/orange", (req, res) => {
//   res.send("you are currently at orange path");
// });

// // * means wild card, which means if the above path gets executed then its okay
// // but other than above paths, star path always gets executed

// app.get("*", (req, res) => {
//   res.send("this path doesnt exist");
// });

// // Using post request
// app.post("/", (req, res) => {
//   res.send("you sent a post request");
// });

//--------------------------------------------------------------------------------------------------
// Using Path Parameters

app.get("/", (req, res) => {
  res.send("hello, you are currently at root");
});

app.get("/:username/:id", (req, res) => {
  //   console.log(req.params);
  let { username, id } = req.params;
  let htmlStr = `<h1>welcome to the page of @${username} with id ${id}.</h1>`;
  //   res.send(`welcome to the page of @${username}.`);
  res.send(htmlStr);
});


//-----------------------------------------------------------------------
// Understanding Query Strings ->
app.get("/search", (req, res)=>{
    // console.log(req.query);
    let {q} = req.query;
    if(!q){
        res.send(`<h1>Nothing searched</h1>`);
    }
    // res.send(`search results : ${q}`); 
    res.send(`<h1>search results : ${q}</h1>`);  
});