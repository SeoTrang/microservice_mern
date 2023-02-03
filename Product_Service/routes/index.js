
const router = require('express').Router();


const controller = require('../controllers/controller')

router.get('/',controller.productsHome)


//products-------------------------------------------

router.post('/store-product',controller.storeProduct)
router.get('/get-flash-products',controller.getFlash)


router.get('/get-products-mobile-8',controller.get8ProductMobilePhone)

router.get('/get-all-products',controller.getAllProducts)

router.get('/get-1-product/:slug',controller.get1Product)

// category ------------------------------
router.post('/store-category',controller.storeCategory);

router.get('/get-categories',controller.getCategories);

module.exports = router;
