// step- 0 create node js project cammand --> npm init -y

// step-1 import expressjs
// expressjs is a framework to make API
const express = require("express");

// step-2 create a application through express.js
const app = express();

// step-4 create API/routing
app.get("/", (req,res) => {
    res.end("home page");
});

app.get("/about", (req,res) => {
    res.send("about page");
});

// step-3 listen/ run application on port adderess

app.listen(8080, () => {
    console.log("server started")
})

