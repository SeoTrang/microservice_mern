const express = require('express')
const router = express.Router()


const multer  = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage });


// const multer  = require('multer')
const upload1 = multer({ dest: './uploads/' })

const adminController = require('../controllers/admin.controller')




//category
router.post('/store-category', upload.single('category_img'),adminController.storeCategory)

router.get('/get-categories',adminController.getCategories);

router.get('/get-products-mobile-8',adminController.get8ProductMobilePhone)


//products-------------------------------------------------------------
router.post('/store-product', upload.fields([{name:'img'},{name:'img_detail'}]), adminController.storeProduct)

router.get('/get-flash-products',adminController.getFlash)

router.get('/get-all-products',adminController.getAllProducts)

router.get('/get-1-product/:slug',adminController.get1Product)
module.exports = router