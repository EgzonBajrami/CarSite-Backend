var express = require('express');
var router = express.Router();
const {verifyToken} = require('../middlewares/auth.middleware')
const carsController = require('../controllers/cars.controller');
const {jsonResponse} = require('../lib/helper')
const upload = require('../lib/upload.js')

/* GET home page. */
router.post('/addCar', verifyToken, async(req,res)=>{
    try{
        const result = await carsController.addCar(req.body);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));

    }
})
router.post('/add-image/:id', verifyToken, upload.single('product-image'), async(req,res)=>{
    try{
        const result = await carsController.createImage(req.params.id, req.file);
        res.json(jsonResponse(result));
    
    }catch(err){
        res.json(jsonResponse(err.message,false));
    }

})
router.get('/getCars/:type', async(req,res)=>{
    try{
        const result = await carsController.getCars(req.params.type);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));
    }
})
module.exports = router;