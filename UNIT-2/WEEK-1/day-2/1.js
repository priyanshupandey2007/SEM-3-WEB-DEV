// step -1 

const express = require("express");

// step -2

const app = express();

// step -3 routes/API

app.get("/about", (req,res) => {
    res.send({msg: "Welcome to about page"})
});

app.get("/home", (req,res) => {
    res.send({msg: "Welcome to home page"})
});

app.get("/home", (req,res) => {
    res.send({msg: "Welcome to home page"})
});

app.listen(8080, () =>{
    console.log("server started")
})