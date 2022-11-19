import React from 'react'
import ProductHomeData from './ProductHomeData'

const Product = () => {
  return (
    <div className='cards-product cards-product-wrap d_flex' >
        {ProductHomeData.map((value,index)=>{
                return (
                  <div className='card-product' key={index}>
                    <img src={value.img} alt='' />
                    <div className='short-description'>
                      <div className='product-name'>
                        <a href=''>{value.name}</a>
                      </div>
                      <div className='old-price'>{value.price}</div>
                      <div className='product-price'>44.990.000₫</div>
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