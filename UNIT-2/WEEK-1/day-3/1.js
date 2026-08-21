// step-1
const express = require("express");
const fs = require ("fs");
// step-2
const app = express()
// middleware --> req.body --> parse
app.use(express.json());

// step-3 Routes/Api
app.get("/",(req,res) => {
    res.send({ msg: "welcome to exprrss server"})
});

app.get("/home",(req,res) => {
    res.send({ msg: "welcome to home page"})
});

app.get("/read",(req,res) => {
    const data = fs.readFileSync("./1.json","utf-8");
    // console.log(data, typeod data);

    // converting json data --- parse ---> js object
    const jsData = JSON.parse(data);
    console.log(jsData, typeof jsdata);

    console.log(jsData)
    
        res.send({ data: jsData})
});
app.post("/create",(req,res) =>{
    const payload = req.body;
    console.log(payload);
    const data = JSON.parse(fs.readFileSync("./1.json", "utf-8"));

    const stdata = data.student;
    console.log(stdata);
    stdata.push(payload);
    console.log(stdata);

    fs.writeFileSync ("./1.json", JSON.stringify(data));
    res.send({msg:"new student added successfully"})
})



app.listen(8080, () => {
    console.log("Server started")
});