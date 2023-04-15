const mongoose = require('mongoose');
const mailSchema = new mongoose.Schema({
    fistName:{type:String},
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:true
    }
 })
const mailModel = mongoose.model('mails',mailSchema);
module.exports = mailModel;