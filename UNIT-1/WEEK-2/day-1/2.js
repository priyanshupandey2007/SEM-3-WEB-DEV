const http = require("http");
/// 5 types of method by http
// 1.POST
// 2.PUT 
// 3.PATCH
// 4.DELETE
const fs = require("fs");
const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("Home Page")
    }
    else if (req.url == "/about" && req.method=="POST"){
        res.end("About")
    }
    else if (req.url == "/data"){
       const data = fs.readFileSync("./1.json", "utf-8")
        res.end(data)
    } else {
        res.end("Not Found")
    }
})

server.listen(8080, () => {
  console.log("server is running on server 8080");
});
