var express = require('express');
var router = express.Router();
const userController = require('../controllers/users.controller')
const {jsonResponse} = require('../lib/helper.js')
const authController = require('../controllers/auth.controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/register', async(req,res)=>{
  try{
    const result = await userController.add(req.body);
    res.json(jsonResponse(result));

  }catch(err){
    res.json(jsonResponse(err.message,false));
  }
})
router.post('/login', async(req,res)=>{
  try{
    const result = await authController.login(req.body);
    res.json(jsonResponse(result));

  }catch(err){
    res.json(jsonResponse(err.message,false));
  }
})
module.exports = router;