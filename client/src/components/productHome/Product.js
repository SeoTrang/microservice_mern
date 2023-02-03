import React,{useState,useEffect} from 'react'
import ProductHomeData from './ProductHomeData'

import products_api from '../../apis/products_api'

const Product = () => {
  const [listData,setListData] = useState([])
  
    useEffect(()=>{
      async function getFlashProducts() {
        const listProducts = await products_api.get_8_products_mobile_phone()
        if(listProducts){
            console.log("__hello");
            await setListData(listProducts)
            console.log(listData);
            
        }else{
            console.log('none');
        }
      }
  
      getFlashProducts()
    },[])


  return (
    <div className='cards-product cards-product-wrap d_flex' >
        {listData.map((value,index)=>{
                return (
                  <div className='card-product' key={index}>
                    <img src={value.img} alt='' />
                    <div className='short-description'>
                      <div className='product-name'>
                        <a href=''>{value.name}</a>
                      </div>
                      <div className='old-price'>{value.price}₫</div>
                      <div className='product-price'>{value.price}₫</div>
                      <div className='product-action c_flex'>
                        <i class="fa-regular fa-heart like"></i>
                        <i class="fa-solid fa-plus add-product"></i>
                      </div>
                    </div>
                  </div>
                )
        })}
    </div>
  )
}

export default Product