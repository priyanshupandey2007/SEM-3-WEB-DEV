// Import event emitter class from event module ( emit is send )
const EventEmitter = require("events");

//ee object through which i will do all work
var ee = new EventEmitter();


ee.on("hello", ()=> {
    console.log("krmu")
})

// handeling/read
// on => method name, name, message => means read
ee.on("message", function(text){
    console.log(text);
});

//triger/sending data
//emit => method for triggering
ee.emit("message", "hello world")  // krmu  --> hello world