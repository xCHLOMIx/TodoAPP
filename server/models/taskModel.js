const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    time : {
        type : Date,
        required : true
    }
}, { timestamps : true })

module.exports = mongoose.model('Task', taskSchema)