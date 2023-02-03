import React,{ useState , useEffect } from 'react'
import { Link } from 'react-router-dom'


import MoreForYouData from './MoreForYouData'

import products_api from '../../apis/products_api'

const MoreForYouCard = () => {


  const [listData,setListData] = useState([])
  
    useEffect(()=>{
      async function getFlashProducts() {
        const listProducts = await products_api.get_all_products()
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
    <>
    <div className='list-products' >
        {listData.map((value,index)=>{
                return (
                  <Link to={"/detail/" + value.slug} className='card-product' key={index}>
                  <div className='l-card-product' key={index}>
                    <img src={value.img} alt='' />
                    <div className='short-description'>
                      <div className='product-name'>
                        <a href=''>{value.name}</a>
                      </div>
                      <div className='old-price'>{value.price}</div>
                      <div className='product-price'>{value.price}</div>
                      <div className='product-action c_flex'>
                        <i class="fa-regular fa-heart like"></i>
                        <i class="fa-solid fa-plus add-product"></i>
                      </div>
                    </div>
                  </div>
                  </Link>
                )
        })}
    </div>
    </>
  )
}

export default MoreForYouCard