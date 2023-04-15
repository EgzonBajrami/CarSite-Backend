const mongoose = require('mongoose');
const subScribeSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    }
 })
const subscribeModel = mongoose.model('subscribe',subScribeSchema);
module.exports = subscribeModel;