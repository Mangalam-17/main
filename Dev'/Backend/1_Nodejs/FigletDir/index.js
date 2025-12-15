var figlet = require("figlet");

//whenever we are requiring packages, 
// we dont have to use ./ 
// we directly wtite the name of the package

figlet("Figlet!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});