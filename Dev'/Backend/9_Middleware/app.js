const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// we generally write middleware at the starting of the code not at the end
// Suppose when we write at the end, what happens is that if we have defined any route which is sending a response,
// then the response gets returned and middleware dont gets executed
// As soon as the response is sent, cycle is completed and done !
// Middleware -> response send
// Whenever we enter a route that doesnt exist, then ->
// NOTE- Middleware always works irrespective of what is sent in the body or how the request is structured
// next() is considered as the end of the middleware
// we can also use return next() which ensures that whatever we write after next doesnt gets executed

// app.use((req, res, next) => {
//   console.log("Hii, I am 1st middleware");
//   next();
//   return next();
// });

// app.use((req, res, next) => {
//   console.log("Hii, I am 2nd middleware");
//   next();
// });

// this middleware gets executed only when /random route is used
// app.use("/random", (req, res, next) => {
//   console.log("I am only for random");
//   next();
// });

// but generally we dont specify route that basically means / route which
// works for every route out there
// app.use("/", (req, res, next) => {
//   console.log("I am only for random");
//   next();
// });

// Logger ->
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//   console.log(req.method, req.hostname, req.path, req.time);
//   next();
// });

// Create a middleware for an api that checks if the access token was passed in the query string or not
// app.use("/api", (req, res, next) => {
//   let { token } = req.query;
//   if (token === "giveaccess") {
//     next();
//   }
//   res.send("ACCESS DENIED !");
// });

// app.get("/api", (req, res) => {
//   res.send("data");
// });

// Multiple Middlewares
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  //   res.send("ACCESS DENIED !");
  // now we can also throw errors on our own as well
  //   throw new Error("ACCESS DENIED!");
  throw new ExpressError(401, "ACCESS DENIED!");
};

// passing the middleware as a function in the route, but rest routes works normal that is without this above middleware
// if we apply this to other routes, then it works for them too that is multiple middleware
app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/", checkToken, (req, res) => {
  res.send("Hi, I am the root");
});
// this route wont work when middleware is there because it is already sending a response

app.get("/random", (req, res) => {
  res.send("Hii, this is a random page");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

// Activity - Create an admin route and send an error with a 403 status code
app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to Admin is forbidden");
});

app.use((err, req, res, next) => {
  //   console.log("-----ERROR-----");
  //   next(err);
  let { status = 500, message = "Some error occured" } = err;
  res.status(status).send(message);
  //   res.send(err);
  // when we have further more custom error handlers
  // this above line basically means we have handled the error from our side
  // futher, which middleware is handling the error, it can be any other custom middleware or the express default handler
});

// app.use((err, req, res, next) => {
//   console.log("-----ERROR2 middleware-----");
//   next(err);
// });

//404 Error -> we write this as the last middleware which prints custom error when no previous middleware matches the requests
//then this gets executed
// app.use((req, res) => {
//   res.status(404).send("Page not found!, Error 404");
// });

app.listen("3001", () => {
  console.log("server is listening to port 3001");
});
