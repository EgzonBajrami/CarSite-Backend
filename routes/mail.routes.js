var express = require('express');
var router = express.Router();
const {jsonResponse} = require('../lib/helper')
const mailsController = require('../controllers/mail.controller')

/* GET home page. */
router.post('/appointment', async(req,res)=>{
    try{
        const result = await mailsController.setAppointment(req.body);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));

    }
})
router.post('/subscribe', async(req,res)=>{
    try{
        const result = await mailsController.subscribe(req.body);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));
    }
})
module.exports = router;