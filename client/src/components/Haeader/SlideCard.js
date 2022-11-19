import React from 'react'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import SlideData from './SlideData'


const SlideCard = () => {

  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

      autoplay: true,

      autoplaySpeed: 2000,
      cssEase: "",
      appendDots: (dots) => {
        return <ul style={{ margin: "0px" }}>{dots}</ul>
      },
    };

  return (
    <>

      <Slider {...settings}>

        {SlideData.map((value,index)=>{

            return (
              
                <div className='box d_flex top' key={index}>
                  <div className='left'>
                      <h1>{value.title}</h1>
                      <p>{value.desc}</p>
                      <button className='btn-primary'>Ghé Thăm</button>
                      

                  </div>
                  <div className='right'>
                      <img src={value.cover} alt=""/>
                  </div>
              </div>
            )
        })}
      </Slider>
    </>
  )
}

export default SlideCard;