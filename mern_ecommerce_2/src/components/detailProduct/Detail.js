import React from 'react'
import ShoppingTrend from '../shoppingTrend/ShoppingTrend';
import Description from './Description';
import RelatedProducts from './relatedProducts/RelatedProducts';
import ShortInfo from './ShortInfo';
import SlideImageSwiper from './SlideImageSwiper'

import "./styles.css";

const Detail = () => {
  return (
    <div className='detail'>
        <div className='d_flex'>
          <SlideImageSwiper/>
          <ShortInfo/>
        </div>
        <Description/>
        <ShoppingTrend/>
        <RelatedProducts/>
    </div>
  )
}

export default Detail