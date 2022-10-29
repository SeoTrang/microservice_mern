import React from 'react'
import ProductCategoryDada from './ProductCategoryDada'

const ProductHomeCategory = () => {
    console.log(ProductCategoryDada);
  return (
    <div className='product-cate-container'>
        <div className='product-category'>
            {
                ProductCategoryDada.map((value,index)=>{
                    return (

                        <div className='product-cate-item' key={index}>
                            <div className='product-cate-logo'>
                                <img src={value.cateImg} alt=''/>
                            </div>
                            {/* <div className='product-cate-name'>
                                <span>{value.cateName}</span>
                            </div> */}
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default ProductHomeCategory;