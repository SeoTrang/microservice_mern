import React from 'react'

import ShoppingTrendCard from './ShoppingTrendCard'

const ShoppingTrend = () => {
  return (
    <>
        <div >
                <div className='heading top d_flex'>
                    <div className='c_flex'>
                    <i class="fa-solid fa-arrow-trend-up"></i>
                      <h2>Xu hướng mua xắm</h2>
                    </div>
                    <div  className = 'viewmore c_flex'>
                      <p className='views-all'>Xem thêm</p>
                      <i class="fa-solid fa-caret-right"></i>                    
                      
                    </div>
                </div>

                <ShoppingTrendCard/>
            </div>
    </>
  )
}

export default ShoppingTrend