// https --> hyper text transfer protocol 
// it creates connection between client and server

const http = require("http");

const server = http.createServer((request,response)=>{
    response.end("welcome to my nodejs server");
});


server.listen(8080);