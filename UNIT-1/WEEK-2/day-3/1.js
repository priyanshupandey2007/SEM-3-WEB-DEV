const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("Home Page")
    }else if (req.url == "/read" && req.method == "POST"){{
//   read client data that pass in request body 
        // const data = req.body;
        // console.log(data);

        let str = "";
        req.on("data", (chuck) => {
            str += chuck;
        });
        req.on("end", () => {
            console.log(str);
        });
res.end("Data fetch seccessfully");
    }}else{
        console.log("Not Found ");
    }
});


server.listen(8080, () =>{
    console.log("server started")
})