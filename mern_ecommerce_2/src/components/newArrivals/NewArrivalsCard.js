import React from 'react'

import style from './NewArrivals.module.css'
import NewArrivalsData from './NewArrivalsData'

console.log(style);

const NewArrivalsCard = () => {
  return (
    <>
        <div className={style.new_arrivals_cards}>
            {NewArrivalsData.map((value,index)=>{
                return ( 
                    <div className={style.new_arrivals_card}>
                        <img className={style.img} src={value.img} alt=''/>
                        <div className='short-description'>
                            <div className={style.product_name}>
                                <a href=''>{value.name}</a>
                            </div>
                            
                            <div className={style.product_price}>{value.price}</div>
                            
                        </div>

                    </div>
                 )
            })}
        </div>
    </>
  )
}

export default NewArrivalsCard