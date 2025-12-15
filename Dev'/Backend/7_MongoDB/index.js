const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//   name: "Adam",
//   email: "adam@gmail.com",
//   age: 19,
// });

// user1.save();

// const user2 = new User({
//   name: "Steve",
//   email: "steve@gmail.com",
//   age: 24,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   { name: "david", email: "david@gmail.com", age: 27 },
//   { name: "kane", email: "kane@gmail.com", age: 22 },
//   { name: "philips", email: "philips@gmail.com", age: 25 },
//   { name: "darcy", email: "darcy@gmail.com", age: 23 },
// ]).then((res) => {
//   console.log(res);
// });

// User.find({})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   User.find({ age: { $gt: 25 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.find({ age: { $gt: 25 } })
//   .then((res) => {
//     // console.log(res[0]);
//     console.log(res[0].name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOne({ age: { $gt: 22 } })
//   .then((res) => {
//     // console.log(res[0]);
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOne({ _id: "67bd14e619f63def126b9e30" })
//   .then((res) => {
//     // console.log(res[0]);
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findById("67bd14e619f63def126b9e30")
//   .then((res) => {
//     // console.log(res[0]);
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateOne({ name: "Steve" }, { age: 26 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.updateMany({ age: {$gt: 22} }, { age: 28 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndUpdate({ name: "Steve" }, { age: 26 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndUpdate({ name: "david" }, { age: 29 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findByIdAndUpdate({ _id: "67bd15ca218a274ae6b4bfe8" }, { age: 24 }, {new: true})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });

// User.deleteOne({ name: "david" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.deleteMany({ age: { $lt: 25 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findByIdAndDelete("67bd14e619f63def126b9e30")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndDelete({email: 'darcy@gmail.com'})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndDelete('67bd4c455d92ccdfb09adba2')
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndDelete({age: {$lt: 25}})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.deleteMany({ age: { $lt: 25 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
