const express = require('express')
const router = express.Router()



const adminController = require('../controllers/admin.controller')


// user service

router.post('/add-product',adminController.addProduct)

// router.post('/login',userCotroller.login)




module.exports = router