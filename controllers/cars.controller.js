const carModel = require('../models/car.models');

module.exports ={
    addCar: async(params) =>{
        const result = await carModel.create({
            title:params.title,
            description:params.description,
            yearProduction:params.yearProduction,
            section:params.section,
            price:params.price
        })
        return result;
    },
    createImage: async (id, file) => {
        let fileName = null
        console.log(id);
     
        if(file){
          fileName =  `/images/${file.filename}` 
        }    
        const postId= await carModel.findById(id);
        console.log(postId);
        let postImages = postId.image;
        console.log(postImages);
        postImages = [fileName];

  
        const result = await carModel.findByIdAndUpdate(id,{image:postImages}).exec();
        console.log(result);
       
        return result 
      },
      getCars:async(params) =>{
        const result = await carModel.find({section:params}).limit(8).sort("-createdAt");
        return result;
      }
}