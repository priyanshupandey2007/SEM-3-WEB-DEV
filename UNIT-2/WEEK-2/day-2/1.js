const express = require("express");
const fs = require("fs");

const app = express();

// 1.Timelogger M/w

const timeLoggerMiddlewere = (req,res,next)=>{
    const startTime = Date.now();
    next();
    const endTime = Date.now();
    console.log(`time taken by route is : ${endTime-startTime}ms`);
};

// app.use(timeLoggermiddlewere);

// 2. RouteLogger M/w

const routeLoggerMiddle = (req,res,next) => {
     console.log(`Route name is :${req.url} and method is: ${req.method}\n`);
     fs.appendFileSync("./1.txt", record)
     next()
};
// app.use(routeLoggerMiddle);

const watchManMiddlewere = (req,res,next) =>{
    if (req.url =="/admin"){
        res.send("Not Found")
    } else{
    next();
}};
app.use(watchManMiddlewere);

app.get("/home", (req,res) => {
    res.send(" Home Page");
});

app.get("/about", (req,res) => {
    res.send(" About Page");
});

app.get("/read", (req,res) => {
    const data = fs.readFileSync("./1.json", "utf-8");
    res.send(data);
});

app.listen(8080, () => {
  console.log("server started");
});