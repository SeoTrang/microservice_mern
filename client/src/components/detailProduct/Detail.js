import React,{ useState , useEffect } from 'react'
import ShoppingTrend from '../shoppingTrend/ShoppingTrend';
import Description from './Description';
import RelatedProducts from './relatedProducts/RelatedProducts';
import ShortInfo from './ShortInfo';
import SlideImageSwiper from './SlideImageSwiper'

import { useParams } from 'react-router-dom';

import "./styles.css";

import products_api from '../../apis/products_api';

const Detail = () => {

  const [listData,setListData] = useState([])

  let { id } = useParams();
  console.log(id);

  useEffect(()=>{
    async function getdata() {
      const listProducts = await products_api.get_1_product(id)
      if(listProducts){
          // console.log("__hello");
          await setListData(listProducts)
          // console.log(listData);
          
      }else{
          console.log('none');
      }
    }

    getdata()
  },[])

  return (
    <div className='detail'>
        <div className='d_flex'>
          <SlideImageSwiper/>
          <ShortInfo data={listData}/>
        </div>
        <Description/>
        <ShoppingTrend/>
        <RelatedProducts/>
    </div>
  )
}

export default Detail