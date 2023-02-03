
const categories = require('../models/categories')
const products = require('../models/products')

const controller = {

    //[get]:/products-home
    productsHome:async(req,res,next)=>{
        res.json('hello from product service')
    },


    //[post]:/add-category
    storeCategory:async(req,res,next)=>{
        // console.log(req.body.data);
        console.log('hello');
        console.log(req.body);
        try {
            // let name = req.body.name;
            // console.log(name);

            // let img = req.body.img;
            // console.log(img);
            const categories_save = await new categories({
                name:req.body.name,
                img:req.body.img,
                count : 0
            })

            await categories_save.save();

            res.status(200).json('ok')
        } catch (error) {
            res.status(500).json('fail!!!')
        }
        
    },

    //[get]/get-all-category
    getCategories:async(req,res)=>{
        try {
            categories.find()
            .then(categories =>{
                res.status(200).json(categories)
            })
        } catch (error) {
            
        }
    },



    // [POST]:/add-product
    storeProduct:async(req,res,next)=>{
        
        try {
            console.log(req.body);
            const product_save = await new products({
                name        : req.body.name,    
                img         : req.body.img,
                imgDt       : req.body.imgDt,
                count       : req.body.count,
                categorory  : req.body.category,
                price       : req.body.price,
                moreInfo    : req.body.moreInfo
            })

            await product_save.save();
            res.status(200).json('ok')
        } catch (error) {
            res.status(500).json('fail!')
        }
    },


    getFlash:async(req,res)=>{
        try {
            products.find().limit(8)
            .then(products =>{
                res.status(200).json(products)
            })
            
        } catch (error) {
            
        }
    },

    // [get] /get-8-mobilephone
    get8ProductMobilePhone:async(req,res)=>{
        try {
            products.find({categorory:'dien-thoai'}).limit(8)
            .then(products=>{
                // console.log(products);
                res.status(200).json(products)
            })
        } catch (error) {
            
        }
    },

    // [get]//get-all-products
    getAllProducts:async(req,res)=>{
        products.find()
        .then(products =>{
            console.log(products);
            res.status(200).json(products)
        })
    },

    // [get]/get-1-product
    get1Product:async(req,res)=>{
        console.log(req.params.slug);
        products.find({slug:req.params.slug})
        .then(products =>{
            console.log(products);
            res.status(200).json(products)
        })
    }
}

module.exports = controller