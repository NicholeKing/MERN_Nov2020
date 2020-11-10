const mongoose = require("mongoose");
console.log("Hello from mongoose config!");

mongoose.connect("mongodb://localhost/intromongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("It's alive!!"))
  .catch(err=>console.log("Oh no...", err));