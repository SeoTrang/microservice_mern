import React from 'react'
import NewArrivalsCard from './NewArrivalsCard'


const NewArrivals = () => {
  return (
    <>
        <div >
                <div className='heading top d_flex'>
                    <div className='c_flex'>
                    <img src="https://img.icons8.com/color/48/000000/new--v1.png"/>
                      <h2>Hàng mới về</h2>
                    </div>
                    <div  className = 'viewmore c_flex'>
                      <p className='views-all'>Xem thêm</p>
                      <i class="fa-solid fa-caret-right"></i>                    
                      
                    </div>
                </div>

                <NewArrivalsCard/>
            </div>
    </>
  )
}

export default NewArrivals