const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

let allChats = [
  {
    from: "Adam",
    to: "Bob",
    message: "hello there!",
    created_at: new Date(),
  },
  {
    from: "Casey",
    to: "Donald",
    message: "lets go on a trip this weekend!",
    created_at: new Date(),
  },
  {
    from: "Eve",
    to: "Hamilton",
    message: "Hii! How are you?",
    created_at: new Date(),
  },
  {
    from: "Jack",
    to: "Kane",
    message: "Its been a long time since we met",
    created_at: new Date(),
  },
  {
    from: "Marie",
    to: "Tim",
    message: "send me the js notes",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
