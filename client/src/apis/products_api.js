import axios from 'axios'

const products_api = {

    //get 8 products
    get_flash_products:async()=>{
        // console.log('hello___');
        let data;
        await axios.get('http://localhost:7000/admin/get-flash-products')

        .then(function(response){
            
            data = response.data
            // console.log(data);
        })
        .catch(function(error){
            console.log(error);
        })

        if(data){
            return data;
        }
        return 0;

    },

    //get 8 product mobilephone
    get_8_products_mobile_phone:async()=>{
        console.log('hello___');
        let data;
        await axios.get('http://localhost:7000/admin/get-products-mobile-8')

        .then(function(response){
            
            data = response.data
            // console.log(data);
        })
        .catch(function(error){
            console.log(error);
        })

        if(data){
            return data;
        }
        return 0;

    },

    //get all product
    get_all_products:async()=>{
        console.log('hello___');
        let data;
        await axios.get('http://localhost:7000/admin/get-all-products')

        .then(function(response){
            
            data = response.data
            console.log(data);
        })
        .catch(function(error){
            console.log(error);
        })

        if(data){
            return data;
        }
        return 0;

    },

    //get 1 product
    get_1_product:async(props)=>{
        // console.log('hello___');
        let data;
        let url = 'http://localhost:7000/admin/get-1-product/'+props
        await axios.get(url)

        .then(function(response){
            
            data = response.data
            // console.log(data);
        })
        .catch(function(error){
            console.log(error);
        })

        if(data){
            return data;
        }
        return 0;
    }
}

export default products_api;