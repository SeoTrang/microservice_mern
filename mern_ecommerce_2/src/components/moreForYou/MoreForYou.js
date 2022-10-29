import React from 'react'
import MoreForYouCard from './MoreForYouCard'



const MoreForYou = (props) => {

  const CategoriesVN = ['Điện thoại','Laptop','Phụ kiện','Đồ gia dụng'];
  const Categories = ['mobile-phone','laptop','accessory','homeware'];

  let categoryResult;
 
  for (let index = 0; index < Categories.length; index++) {
    if(Categories[index] === props.category){
      categoryResult = CategoriesVN[index];
      break;

    }
    
  }

  return (
    <div className='container-products'>

                <div className='heading top d_flex'>
                    <div className='c_flex'>
                    <i style={{fontSize:'20px'}} class="fa-solid fa-mobile-screen-button"></i>
                      <h2>{categoryResult || 'Dành cho bạn'}</h2>
                    </div>
                    <div  className = 'viewmore c_flex'>
                      <p className='views-all'>Xem thêm</p>
                      <i class="fa-solid fa-caret-right"></i>                    
                      
                    </div>
                </div>

                <MoreForYouCard/>

    </div>


  )
}

export default MoreForYou