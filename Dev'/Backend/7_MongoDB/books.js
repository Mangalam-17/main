const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful, connected to mongo db");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/flipkart");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "Price is too low to sell here"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
  genre: [String],
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//   title: "Mathematics",
//   author: "RD Sharma",
//   price: 10,
//   genre: ["comics", "superheroes", "marvel", "avengers"],
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Book.findByIdAndUpdate(
//   "67bda7e0354f147eccc481bc",
//   { price: -500 },
//   { runValidators: true }
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     // custom error printing
//     console.log(err.errors.price.properties.message);
//   });