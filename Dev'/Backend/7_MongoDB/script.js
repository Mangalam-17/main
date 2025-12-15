const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful, connected to mongo db");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/examination");
}

const exam = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: Number,
    required: true,
    maxLength: 6,
  },
  enrolNo: {
    type: Number,
    required: true,
    maxLength: 6,
  },
  studentId: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  subjects: {
    type: [String],
    enum: [
      "Cryptography",
      "Machine Learning",
      "Data Mining",
      "Web Dev",
      "Robotics",
      "Android Dev",
    ],
  },
});

const Student = mongoose.model("Student", exam);

// let student2 = new Student({
//   name: "Nevill",
//   rollNo: 23456,
//   enrolNo: 34567,
//   studentId: "2022BECSE002",
//   semester: 6,
//   subjects: [
//     "Cryptography",
//     "Machine Learning",
//   ],
// });

// student2.save().then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

// Student.findOneAndUpdate(
//   { name: "Nevill" },
//   { enrolNo: 456789 },
//   { new: true }
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });