import React from 'react'

import style from './Slogan.module.css'

const Slogan = () => {
  return (
    <div className={style.slogan_container}>
        <div className={style.item_slogan}>
            <i className={style.icon_slogan + " fa-solid fa-truck "}></i>
            <div className={style.slogan_name}>
                <span>Giao hàng toàn quốc</span>
            </div>
            <div className={style.slogan_description}>
                <span>
                    Vận chuyển khắp Việt Nam
                </span>
            </div>

        </div>
        <div className={style.item_slogan}>
        <i className={style.icon_slogan + " fa-solid fa-money-check-dollar"}></i>
            <div className={style.slogan_name}>
                <span>Thanh toán an toàn</span>
            </div>
            <div className={style.slogan_description}>
                <span>
                    Thanh toán khi nhận hàng
                </span>
            </div>

        </div>

        <div className={style.item_slogan}>
            <i className={style.icon_slogan + " fa-solid fa-rotate"}></i>
            <div className={style.slogan_name}>
                <span>Dễ dàng đổi trả</span>
            </div>
            <div className={style.slogan_description}>
                <span>
                    Đổi trả hàng nhanh chóng trong 30 ngày
                </span>
            </div>

        </div>

        <div className={style.item_slogan}>
            <i className={style.icon_slogan + " fa-solid fa-headset"}></i>
            <div className={style.slogan_name}>
                <span>Hỗ trợ 24/7</span>
            </div>
            <div className={style.slogan_description}>
                <span>
                    Hỗ trợ tư vấn mọi thắc mắc khách hàng 24/7
                </span>
            </div>

        </div>

        
    </div>
  )
}

export default Slogan