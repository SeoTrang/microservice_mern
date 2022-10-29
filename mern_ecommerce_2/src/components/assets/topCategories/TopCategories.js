import React from 'react'
import TopCategoryCards from './TopCategoryCards'

const TopCategories = () => {
  return (
    <div >
                <div className='heading top d_flex'>
                    <div className='c_flex'>
                    <i class="fa-solid fa-qrcode"></i>
                      <h2>Top danh mục</h2>
                    </div>
                   
                </div>

               <TopCategoryCards/>
    </div>
  )
}

export default TopCategories