const mongoose = require('mongoose')

const NotesSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true,
        minlength:[3,'name length should be minimum of 3'],
        trim:true
    },
    description:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        default:"general"
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const Notes = mongoose.model("Notes",NotesSchema);
module.exports = Notes;