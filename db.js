const mongoose = require("mongoose")

mongoose.connect('mongodb:https://inotebookbackend1-rfbv.onrender.com',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected to mongodb successfully...");
}).catch(()=>{
    console.log("connection with mongodb failed...")
})