import React, { useRef, useState , useEffect} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { useParams } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

import products_api from "../../apis/products_api";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function App() {
  const [activeThumb, setActiveThumb] = useState();
  // const data = ['https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/19/637859778843241685_iphone-13-pro-max-vang-1.jpg',
  //               'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/19/637859778843241685_iphone-13-pro-max-vang-2.jpg',
                
  //               'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/19/637859778843397911_iphone-13-pro-max-vang-5.jpg',
  //               'https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/19/637859778843241685_iphone-13-pro-max-vang-1.jpg']

  const [listData,setListData] = useState([])

  let { id } = useParams();
  console.log(id);

  useEffect(()=>{
    async function getdata() {
      // console.log("hello: "+id);
      const listProducts = await products_api.get_1_product(id)
      if(listProducts){
        console.log(listProducts[0].imgDt.length);
        let data = [];
        data.push(listProducts[0].img)
        data.push(listProducts[0].imgDt)
        // console.log(data);
        setListData(data)
        // console.log(listData);

        // console.log(listProducts);
          // console.log("__hello1");
          // await setListData([listProducts[0].img,listProducts[0].imgDt])
          // console.log(listData);
          
      }else{
          console.log('none');
      }
    }

    getdata()
  },[])
  return (
    <div className="slide_images">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            className="images"
      >
        {
          listData.map((value,index)=>{
            return (

              <SwiperSlide key={index}>
                <img src={value} />
              </SwiperSlide>
            )
          })
        
        }
        
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        
        spaceBetween={10}
        slidesPerView={3}
        modules={[Navigation, Thumbs]}
        className="thumbnail_images"
      >
        {
          listData.map((value,index)=>{
            return (

              <SwiperSlide key={index}>
                <img src={value} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}
