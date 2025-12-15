const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");
const { isMarkedAsUntransferable } = require("worker_threads");
const { handle } = require("express/lib/application.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
// to parse the data we receive in body so that we can access the data, we use this line below
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

const port = 3000;

// Index Route
app.get(
  "/chats",
  asyncWrap(async (req, res) => {
    let chats = await Chat.find(); // this is an asynchronous function
    // console.log(chats);
    res.render("index.ejs", { chats });
  })
);

// New Route
app.get("/chats/new", (req, res) => {
  // throw new ExpressError(404, "Page not found!");
  res.render("new.ejs");
});

// Create Route
app.post(
  "/chats",
  asyncWrap(async (req, res, next) => {
    let { from, to, message } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      message: message,
      created_at: new Date(),
    });
    // we can think that we have to use async callback and await here because save() is asynchronous,
    // but we dont have to because when we are using then we dont use await
    await newChat.save();
    // permanent storage of chats is done, unlike earlier when the data was getting erased when we refresh the site
    res.redirect("/chats");
  })
);

function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

// New - Show Route
app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      next(new ExpressError(500, "Chat not found!"));
    }
    res.render("edit.ejs", { chat });
  })
);

// Edit Route
app.get(
  "/chats/:id/edit",
  asyncWrap(async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  })
);

// Update Route
app.put(
  "/chats/:id",
  asyncWrap(async (req, res) => {
    let { id } = req.params;
    let { message: newMsg } = req.body;
    console.log(newMsg);
    // async and await is used because findByIdAndUpdate() is also an asynchronous function
    let updatedChat = await Chat.findByIdAndUpdate(
      id,
      { message: newMsg },
      { runValidators: true, new: true }
    );
    console.log(updatedChat);
    res.redirect("/chats");
  })
);

// Destroy Route
app.delete(
  "/chats/:id",
  asyncWrap(async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
  })
);

app.get("/", (req, res) => {
  res.send("root is working");
});

const handleValidationError = (err) => {
  console.log("This was a validation error, please follow the rules");
  console.dir(err.name);
  console.dir(err.message);
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    err = handleValidationError(err);
  }
  next(err);
});

// Error Handling middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Some error occured" } = err;
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
