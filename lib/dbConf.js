const mongoose = require('mongoose');

module.exports = {
    connect:async() =>{
      const conn = await mongoose.connect('mongodb+srv://egzonbajrami:xoni1234@cluster0.bb5w9vb.mongodb.net/LandingPage');
        if(conn){
            console.log('db connected')
        }
    }
}