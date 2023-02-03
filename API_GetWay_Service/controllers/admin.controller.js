
const FormData = require('form-data');
const multer  = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage });

const axios = require('axios')

const adminController = {
    


    // until
    


    // [post]:/storeCategory --------------------------------
    storeCategory:async(req,res,next)=>{
        try {
            let category_name = req.body.category_name;
            // console.log(data);
            // console.log(req.file);
            // console.log("hello");
            if(req.file){
                
                let form = new FormData();
            
            
                // form.append('folderId', req.body.folderId);
            //    add img to new form => send img service

                await form.append('img', req.file.buffer,{
                    filename: req.file.originalname, 
                // encoding: req.file.encoding,
                    mimeType: req.file.mimeType 
                });


                axios({
                    method: "post",
                    url: "http://localhost:7003/admin/store-img-category",
                    data: form,
                    headers: { "Content-Type": "multipart/form-data" },
                })
                .then(async function (response) {
                    console.log(response);
                    let data = await {
                        "name":category_name,
                        "img":response.data
                    }
                    console.log(data);

                    // let img = response.data
                    // let tam = {
                    //     "name":category_name
                    // }
                    let tam2 = JSON.stringify(data)
                    
                    axios({
                        method: "post",
                        url: "http://localhost:7002/store-category",
                        data: tam2,
                        headers: { "Content-Type": "application/json" },
                    })
                    .then(function (response) {
                        
                    })
                    .catch(function (error) {
                        //handle error
                        console.log(error);
                    });
                    // await fetch('http://localhost:7002/store-category', {
                    //     method: 'post',
                    //     body: JSON.stringify(tam),
                    //     headers: {'Content-Type': 'application/json'}
                    // });
                })
                .catch(function (error) {
                    //handle error
                    console.log(error);
                });
        
                

             
            }
        } catch (error) {
            console.log(error);
        }
    },


    //[get]/getcategories
    getCategories:async(req,res)=>{
        try {
            axios({
                method:"get",
                url:"http://localhost:7002/get-categories",
                headers: { "Content-Type": "application/json" }
            })
            .then(function (response) {

                //get data and response to client
                res.status(200).json(response.data)  
                // console.log(response.data);
            })
            .catch(function (error) {
                //handle error
                console.log(error);
                res.status(500).json('fail!')
            });
        } catch (error) {
            
        }
    },


    //[post]/store-product
    storeProduct:async function (req, res, next) {
        let temp = 0 ; // check save data axios (if saved temp = 1, else temp = 0)
        // req.file is the `avatar` file
        // req.body will hold the text fields, if there were any
        // console.log(req.file);
        console.log(req.files);
        console.log(req.body);
        // const file = await req.file
    
        let form_avatar = new FormData();
        let form_dt = new FormData();
    
        // form.append('folderId', req.body.folderId);
    //    add img to new form => send img service

        await form_avatar.append('img', req.files.img[0].buffer,{
            filename: req.files.img[0].originalname, 
           // encoding: req.file.encoding,
            mimeType: req.files.img[0].mimeType 
          });
    
          
        await form_dt.append('img_dt', req.files.img_detail[0].buffer,{
        filename: req.files.img_detail[0].originalname, 
        // encoding: req.file.encoding,
        mimeType: req.files.img_detail[0].mimeType 
        });
    
        let data = {
            "name":req.body.name,
            "img":"",
            "imgDt":"",
            "category":req.body.category,
            "price":req.body.price,
            "count":req.body.amout,
            "moreInfo":req.body.product_more_info
        }

        
    
        await axios({
            method: "post",
            url: "http://localhost:7003/admin/store-img-product",
            data: form_avatar,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            console.log(response);
            data.img = response.data
            axios({
                method: "post",
                url: "http://localhost:7003/admin/store-img-dt-product",
                data: form_dt,
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then(async function (response) {
                console.log(response);
                data.imgDt = response.data
                console.log(data);
                let tam = JSON.stringify(data)
                axios({
                    method: "post",
                    url: "http://localhost:7002/store-product",
                    data: tam,
                    headers: { "Content-Type": "application/json" },
                })
                .then(function (response) {
                    
                    res.status(200).json('ok')
                })
                .catch(function (error) {
                    //handle error
                    console.log(error);
                    res.status(200).json(error)

                });
            })
            .catch(function (error) {
                //handle error
                console.log(error);
                res.status(200).json(error)


            });
        
        })
        .catch(function (error) {
            //handle error
            console.log(error);
            res.status(200).json(error)

        });
    
    
        
      },

      getFlash:async(req,res)=>{
        try {
            axios({
                method:"get",
                url:"http://localhost:7002/get-flash-products",
                headers: { "Content-Type": "application/json" }
            })
            .then(function (response) {

                //get data and response to client
                // console.log(response.data);
                res.status(200).json(response.data)  
            })
            .catch(function (error) {
                //handle error
                console.log(error);
                res.status(500).json('fail!')
            });
        } catch (error) {
            
        }
      },

    // [get] /get8ProductMobilePhone
    get8ProductMobilePhone:async(req,res)=>{
        try {
            axios({
                method:"get",
                url:"http://localhost:7002/get-products-mobile-8",
                headers: { "Content-Type": "application/json" }
            })
            .then(function (response) {

                //get data and response to client
                // console.log(response.data);
                res.status(200).json(response.data)  
            })
            .catch(function (error) {
                //handle error
                console.log(error);
                res.status(500).json('fail!')
            });
        } catch (error) {
            
        }
    },


    // [get]/get-all-products
    getAllProducts:async(req,res)=>{
        try {
            axios({
                method:"get",
                url:"http://localhost:7002/get-all-products",
                headers: { "Content-Type": "application/json" }
            })
            .then(function (response) {

                //get data and response to client
                // console.log(response.data);
                res.status(200).json(response.data)  
            })
            .catch(function (error) {
                //handle error
                console.log(error);
                res.status(500).json('fail!')
            });
        } catch (error) {
            
        }
    },

    // [get]/get-1-product
    get1Product:async(req,res)=>{
        
        try {
            let slug = req.params.slug
            console.log(slug);
            if(slug){
                let url = "http://localhost:7002/get-1-product/"+slug
                axios({
                    method:"get",
                    url:url,
                    headers: { "Content-Type": "application/json" }
                })
                .then(function (response) {
    
                    //get data and response to client
                    console.log(response.data);
                    res.status(200).json(response.data)  
                })
                .catch(function (error) {
                    //handle error
                    console.log(error);
                    res.status(500).json('fail!')
                });
            }
        } catch (error) {
            
        }
    }
}

module.exports = adminController