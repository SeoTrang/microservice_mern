
const controller = {

    //[get]:/products-home
    productsHome:async(req,res,next)=>{
        res.json('hello from product service')
    },

    // [POST]:/add-product
    addProduct:async(req,res,next)=>{
        console.log(req.body);
    }
}

module.exports = controller