// Node js  is a runtime environment

const fs = require("fs");

// 1. Read operation async manner 

// fs.readFile("./2.txt","utf-8" ,(err, data) => {
//     if (err) {
//         console.log("something went wrong");
//     } else {
//         console.log(data);
//     }
// });

//  const data = fs.readFileSync("./2.txt","utf-8");    //synchronous manner
//  console.log(data);

// 2. Write operation
//  fs.writeFile("./2.txt","hello world", (err) => {
//     if (err) {
//         console.log("something went wrong");
//     } else {
//         console.log("file write successfully");
//     }
//  })

//  fs.writeFileSync("./2.txt","Welcome to web dev 3");
//  console.log("file write successfully");


// Append

//  fs.appendFileSync("./2.txt","\n Welcome to web dev 3");
//  console.log("file write successfully append");

//  fs.renameSync("./2.txt","./3.txt");
//  console.log("file rename successfully");

//   file delete
// fs.unlinkSync("./3.txt");
// console.log("file delete successfully");

