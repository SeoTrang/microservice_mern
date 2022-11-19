import React from 'react'

import TopCategoriesData from './TopCategoriesData'

const TopCategoryCards = () => {
  return (
    <div className='categorie-cards w_flex'>
    
        {TopCategoriesData.map((value,index)=>{
            return (
                <div className='categorie-card f_flex' key={index}>
                    <div className='category-img '>
                        <img src={value.cateImg} alt=''/>
                        
                    </div>

                    <div className='categories-name'>
                        <span>{value.cateName}</span>
                    </div>
                </div>
            )
        })}
    
    </div>
  )
}

export default TopCategoryCards