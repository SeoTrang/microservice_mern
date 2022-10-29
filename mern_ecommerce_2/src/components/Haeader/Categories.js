import React from 'react'
import img_fashion from './category/fashion.png'
import img_electronic from './category/electronic.png'
import img_car from './category/car.png'
import img_mobile from './category/mobilephone2.png'
import img_beauty from './category/Beauty.png'

const Categories = () => {
    const data = [
        {
            cateImg : img_fashion,
            cateName:"Thời trang"
        },
        {
            cateImg : img_electronic,
            cateName:"Điện tử"
        },
        {
            cateImg : img_car,
            cateName:"Ô tô & xe máy"
        },
        {
            cateImg : img_mobile,
            cateName:"Điện thoại"
        },
        {
            cateImg : img_beauty,
            cateName:"Sắc đẹp"
        },
        {
            cateImg : img_fashion,
            cateName:"Thời trang"
        },
        {
            cateImg : img_electronic,
            cateName:"Điện tử"
        },
        {
            cateImg : img_car,
            cateName:"Ô tô & xe máy"
        },
        {
            cateImg : img_mobile,
            cateName:"Điện thoại"
        },
        {
            cateImg : img_beauty,
            cateName:"Sắc đẹp"
        }
        
        
    ]
  return (
    <>
        <div className='category'>
            
            {
                data.map((value,index)=>{
                    return (
                        <div key={index} className='box f_flex'>
                            <img src={value.cateImg} alt="" />

                            <span>{value.cateName}</span>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Categories

// 38: