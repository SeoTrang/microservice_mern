const express = require('express')
const router = express.Router()

const userControllers = require('../controllers/user.controller')
const authController = require('../controllers/auth.controller')


// user service
router.post('/register',authController.register)
router.post('/login',authController.login)



router.get('/',(req,res)=>{
    
    res.send('Welcome to api server')
   
})


module.exports = router