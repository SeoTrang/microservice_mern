import React from 'react'
import Product from './Product'
import ProductBaner from './ProductBaner'
import ProductHomeCategory from './ProductHomeCategory'

const ProductHome = () => {
  return (
    <>
        <div className='products-container'>
        <div className='products'>
                <div className='heading top d_flex'>
                    <div className='c_flex'>
                    <i style={{fontSize:'20px'}} class="fa-solid fa-mobile-screen-button"></i>
                      <h2>Điện thoại di động</h2>
                    </div>
                    <div  className = 'viewmore c_flex'>
                      <p className='views-all'>Xem thêm</p>
                      <i class="fa-solid fa-caret-right"></i>                    
                      
                    </div>
                </div>
                <div className='product-content d_flex'>
                    <ProductHomeCategory/>
                    <Product/>
                    
                </div>
                
            </div>
            <ProductBaner/>
        </div>
    </>
  )
}

export default ProductHome