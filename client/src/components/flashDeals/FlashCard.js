import React, {useState , useEffect} from 'react'

import { Link } from 'react-router-dom';

import styles from './FlashDeals.module.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


import FlashData from './FlashData'
import products_api from '../../apis/products_api';

// console.log(FlashData);

const FlashCard = () => {

  const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };



  const [flashCardData,setFlashCardData] = useState([])

  useEffect(()=>{
    async function getFlashProducts() {
      const listProducts = await products_api.get_flash_products()
      if(listProducts){
          // console.log("__hello");
          await setFlashCardData(listProducts)
          console.log(flashCardData);
          
      }else{
          console.log('none');
      }
    }

    getFlashProducts()
  },[])

  
  return (
    <>
    
      <div className={styles.container + 'container'}>
       
          <div className='cards-product'>

              <Slider {...settings}>
              {flashCardData.map((value,index)=>{
                return (
              
                    <Link to={"/detail/" + value.slug} className='card-product' key={index}>
                    <img src={value.img} alt='' />
                    <div className='short-description'>
                      <div className='product-name'>
                        <a href=''>{value.name}</a>
                      </div>
                      <div className='old-price'>{value.price}</div>
                      <div className='product-price'>{value.price}</div>
                      <div className='product-action c_flex'>
                        <i class="fa-regular fa-heart like"></i>
                        <i class="fa-solid fa-plus add-product"></i>
                      </div>
                    </div>
                  </Link>

                )
              })}
              
              </Slider>
          </div>
        
      </div>
    </>
  )
}

export default FlashCard







/*

<div className='card-product'>
                      <img src='https://cdn.tgdd.vn/Products/Images/42/289696/iphone-14-pro-tim-thumb-600x600.jpg' alt='' />
                      <div className='short-description'>
                        <div className='product-name'>
                          <a href=''>iPhone 14 Pro 1TB</a>
                        </div>
                        <div className='old-price'>44.990.000₫</div>
                        <div className='product-price'>44.990.000₫</div>
                        <div className='product-action c_flex'>
                          <i class="fa-regular fa-heart"></i>
                          <i class="fa-solid fa-plus"></i>
                        </div>
                      </div>
              </div>
              <div className='card-product'>
                      <img src='https://cdn.tgdd.vn/Products/Images/42/289696/iphone-14-pro-tim-thumb-600x600.jpg' alt='' />
                      <div className='short-description'>
                        <div className='product-name'>
                          <a href=''>iPhone 14 Pro 1TB</a>
                        </div>
                        <div className='old-price'>44.990.000₫</div>
                        <div className='product-price'>44.990.000₫</div>
                        <div className='product-action c_flex'>
                          <i class="fa-regular fa-heart"></i>
                          <i class="fa-solid fa-plus"></i>
                        </div>
                      </div>
              </div>
              <div className='card-product'>
                      <img src='https://cdn.tgdd.vn/Products/Images/42/289696/iphone-14-pro-tim-thumb-600x600.jpg' alt='' />
                      <div className='short-description'>
                        <div className='product-name'>
                          <a href=''>iPhone 14 Pro 1TB</a>
                        </div>
                        <div className='old-price'>44.990.000₫</div>
                        <div className='product-price'>44.990.000₫</div>
                        <div className='product-action c_flex'>
                          <i class="fa-regular fa-heart"></i>
                          <i class="fa-solid fa-plus"></i>
                        </div>
                      </div>
              </div>
              <div className='card-product'>
                      <img src='https://cdn.tgdd.vn/Products/Images/42/289696/iphone-14-pro-tim-thumb-600x600.jpg' alt='' />
                      <div className='short-description'>
                        <div className='product-name'>
                          <a href=''>iPhone 14 Pro 1TB</a>
                        </div>
                        <div className='old-price'>44.990.000₫</div>
                        <div className='product-price'>44.990.000₫</div>
                        <div className='product-action c_flex'>
                          <i class="fa-regular fa-heart"></i>
                          <i class="fa-solid fa-plus"></i>
                        </div>
                      </div>
              </div>
              <div className='card-product'>
                      <img src='https://cdn.tgdd.vn/Products/Images/42/289696/iphone-14-pro-tim-thumb-600x600.jpg' alt='' />
                      <div className='short-description'>
                        <div className='product-name'>
                          <a href=''>iPhone 14 Pro 1TB</a>
                        </div>
                        <div className='old-price'>44.990.000₫</div>
                        <div className='product-price'>44.990.000₫</div>
                        <div className='product-action c_flex'>
                          <i class="fa-regular fa-heart"></i>
                          <i class="fa-solid fa-plus"></i>
                        </div>
                      </div>
              </div>
              <div className='card-product'>
                      <img src='https://cdn.tgdd.vn/Products/Images/42/289696/iphone-14-pro-tim-thumb-600x600.jpg' alt='' />
                      <div className='short-description'>
                        <div className='product-name'>
                          <a href=''>iPhone 14 Pro 1TB</a>
                        </div>
                        <div className='old-price'>44.990.000₫</div>
                        <div className='product-price'>44.990.000₫</div>
                        <div className='product-action c_flex'>
                          <i class="fa-regular fa-heart"></i>
                          <i class="fa-solid fa-plus"></i>
                        </div>
                      </div>
              </div>
*/ 