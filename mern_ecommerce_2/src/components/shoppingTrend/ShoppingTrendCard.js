import React from 'react'

import ShoppingTrendData from './ShoppingTrendData'
import style from './ShoppingTrend.module.css'

const ShoppingTrendCard = () => {
  return (
    <>
        <div className={style.shopping_trend_cards}>
            {ShoppingTrendData.map((value,index)=>{
                return ( 
                    <div className={style.shopping_trend_card}>
                        <div className={style.div_img}>
                            <img className={style.img} src={value.img} alt=''/>
                        </div>
                        <div className={style.short_description+ ' short-description'}>
                            <div className={style.product_name}>
                                <a className={style.link_product} href=''>{value.name}</a>
                            </div>
                            
                            <div className={style.visit + ' c_flex'}>
                                <span>Ghé thăm</span>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                            
                        </div>

                    </div>
                 )
            })}
        </div>
    </>
  )
}

export default ShoppingTrendCard