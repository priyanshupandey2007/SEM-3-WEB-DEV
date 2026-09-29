// step-1 import module
const express = require("express");
const { connection, userModel } = require("./db");

// step-2 building application via express
const app = express();

app.use(express.json());

// step-4 making API
// API
app.get("/", (req, res) => {
  res.send({ msg: "Welcome to my application" });
});

// GET route: for read all the user document
app.get("/read", async (req, res) => {
  try {
    const user = await userModel.find();
    res.send(user);
  } catch (error) {
    res.send({ msg: "Something went wrong" });
  }
});

// GET route: for read all the user document basedd upon ID
app.get("/read/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userModel.findById({ _id: id });
    res.send(user);
  } catch (error) {
    res.send({ msg: "Something went wrong" });
  }
});

// POST Route : for creating user
app.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const newUser = newUserModel(payload);
    await nreUser.save();
    res.send({ msg: "New User Succesfully" });
  } catch (error) {
res.send({ msg: "Something went wrong" });
  }
});

// step-3 run app on 8080 port
app.listen(8080, async () => {
  try {
    // step-5 connect sever with DB
    await connection;
    console.log("DB Connected");
  } catch (error) {
    console.group(error);
  }
  console.log("Server started");
});
