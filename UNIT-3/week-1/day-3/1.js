// step1 - import 
const mongoose = require("mongoose");

// step4 - schema/ blueprint of the database
const userSchema = new mongoose.Schema({ //Schema ek constructor function hai aur uska first letter hamesha bata hoga aur vo hamesha new keyword ke sath ayega 
    name: String,
    email: String,
    age:Number,
    password:String
},{
    versionKey:false
});

const userModel = mongoose.model("user",userSchema); // model ek constructor function nahi hai to m chota hai model mein 




const main = async ()=>{
    //  step2 - build connection with mongoDB
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/bharat");
    console.log("DB Connected");
    
    await userModel.insertOne({
        name: "priyanshu pandey",
        email: "priyanshupandey2864@gmail.com",
        age: 19,
        password:"xyz.123"
    });
    
    console.log("data added succesfully");
   
    
    const user = await userModel.find();

console.log(user)
// step3 - disconnect 
// mongoose.disconnect();
// console.log("DB Disconnected")
};

main();