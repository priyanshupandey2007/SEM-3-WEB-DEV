console.log("jai shree ram");

// Node js core module

// 1. os - operating system

// import os from "os";

//  common js method for import package
const os = require("os");

// console.log(os.freemem());
// console.log(os.version());
// console.log(os.platform());
// console.log(os.cpus());

// 2. dns - domain name system

const dns = require("dns");
console.log(dns.getServers());

// 3. path - address path

// const path = require("path");
// console.log(path.resolve());

// 4. crypto
// const crypto = require("crypto");
// console.log(crypto.randomUUID());
// console.log(crypto.randomInt(1, 10));

// var name = "priyanshu";
// const hashedValue = crypto.createHash("sha256");
// console.log(hashedValue);

// const newVlaue = hashedValue.update(name);
// console.log(newVlaue);

// const ans = newVlaue.digest("hex");
// console.log(ans);
