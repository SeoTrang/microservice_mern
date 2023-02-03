const express = require('express')
const router = express.Router()

const multer  = require('multer')
const adminController = require('../../API_GetWay_Service/controllers/admin.controller')

const categories_path = 'http://localhost:7003/categories/'
const products_path = 'http://localhost:7003/products/'
const products_dt_path = 'http://localhost:7003/products_dt/'

// banners
const storage_banner = multer.diskStorage(
              {
                  destination: './uploads/banners/',
                  filename: function ( req, file, cb ) {
                      //req.body is empty...
                      //How could I get the new_file_name property sent from client here?
                      cb( null, file.originalname+ '-' + Date.now()+".jpg");
                  }
              }
            );

const upload_banner = multer({ storage: storage_banner })


// categories
const storage_categorie = multer.diskStorage(
  {
      destination: './uploads/categories/',
      filename: function ( req, file, cb ) {
          //req.body is empty...
          //How could I get the new_file_name property sent from client here?
          cb( null, file.originalname+ '-' + Date.now()+".jpg");
      }
  }
);

const upload_categorie = multer({ storage: storage_categorie })


// other
const storage_other = multer.diskStorage(
  {
      destination: './uploads/others/',
      filename: function ( req, file, cb ) {
          //req.body is empty...
          //How could I get the new_file_name property sent from client here?
          cb( null, file.originalname+ '-' + Date.now()+".jpg");
      }
  }
);

const upload_other = multer({ storage: storage_other })


// products
const storage_product = multer.diskStorage(
  {
      destination: './uploads/products/',
      filename: function ( req, file, cb ) {
          //req.body is empty...
          //How could I get the new_file_name property sent from client here?
          cb( null, file.originalname+ '-' + Date.now()+".jpg");
      }
  }
);

const upload_product = multer({ storage: storage_product })

// products-dt

const storage_product_dt = multer.diskStorage(
  {
      destination: './uploads/products_dt/',
      filename: function ( req, file, cb ) {
          //req.body is empty...
          //How could I get the new_file_name property sent from client here?
          cb( null, file.originalname+ '-' + Date.now()+".jpg");
      }
  }
);


const upload_product_dt = multer({ storage:storage_product_dt})


// user
const storage_user = multer.diskStorage(
  {
      destination: './uploads/users/',
      filename: function ( req, file, cb ) {
          //req.body is empty...
          //How could I get the new_file_name property sent from client here?
          cb( null, file.originalname+ '-' + Date.now()+".jpg");
      }
  }
);

const upload_user = multer({ storage: storage_user })

// images - products-----------------------------------------------------------

//-------------------------------------------------------------------------

//======================================================================
router.post('/store-img-product', upload_product.single('img'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    // console.log(req.file);
    console.log(req.file);
    try {
      if(req.file){
        res.status(200).json(products_path+''+req.file.filename);
      }
    } catch (error) {
      console.log(error);
    }
    
  })

  router.post('/store-img-dt-product', upload_product_dt.single('img_dt'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log("hello");
    console.log(req.file);
    try {
      if(req.file){
        res.json(products_dt_path+''+req.file.filename);
      }
    } catch (error) {
      res.json("fail!!!!")
    }
    
  })

  




  // -------------------------------store category ---------------------
  router.post('/store-img-category',upload_categorie.single('img'), async(req,res,next)=>{
    console.log(req.file);
    try {
      if(req.file){
        res.status(200).json(categories_path+''+req.file.filename);
      }
    } catch (error) {
      res.status(500).json("fail!!!!")
    }
  })

 


module.exports = router