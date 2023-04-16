const mongoose = require('mongoose');
const carSchema = new mongoose.Schema({
    title:{type:String,
    required:true},
    description:{
        type:String,
        required:true
    },
    yearProduction:{
        type:Number,
        required:true
    },
    section:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:[{
        type:String,
        required:true,
    }],
},
{timestamps: {createdAt:'createdAt',updatedAt:'updatedAt'}})
const carModel = mongoose.model('cars',carSchema);
module.exports = carModel;