const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("Home Page")
    }else if(req.url== "/read" && req.method=="GET"){
    //    read the file through fs
        // const data = fs.readFileSync("./1.json", "utf-8")
        // res.end(data)

        // using stream
        const data = fs.createReadStream("./1.json","utf-8");
        data.pipe(res);
    
    }else if(req.url=="/add"){
        res.end("data created succesfull")
    }else{
        res.end("Not Found")
    }
})

server.listen(8080,()=>{
    console.log("server started")
});