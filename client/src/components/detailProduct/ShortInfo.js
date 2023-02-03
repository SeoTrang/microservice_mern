import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import products_api from '../../apis/products_api';

const ShortInfo = (props) => {
  // console.log('test');
  // console.log(props.data[0]);
  // let product = props.data[0];
  // console.log(product.name);
  // const [data,setData] = useState()
  // useEffect(()=>{

  //   setData(props)
  //     console.log("ee");
  //     console.log(data);
  //   // function test(){
      
  //   //   setData(product)
  //   //   console.log("ee");
  //   //   console.log(data);
  //   // }

  //   // test()
  // },[])
    
  const [listData,setListData] = useState([])

  let { id } = useParams();
  console.log(id);

  useEffect(()=>{
    async function getdata() {
      // console.log("hello: "+id);
      const listProducts = await products_api.get_1_product(id)
      if(listProducts){
        // console.log(listProducts);
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
    <>
    {listData.map((data,index)=>{
      return (
        <div className='short_info'>
        <div className='name_product'>
            <span>{data.name}</span>

        </div>
        <div className='brand'>
          <span className='title'>Nhãn hiệu : </span>
          <span className='ml_20'></span>

        </div>
        <div className='price'>
          <span className='old_price'>{data.price}₫</span>
          <span className='current_price'>{data.price}₫</span>
          
        </div>

        <div className='color_product f_flex'>
          <div className='title'>
            <span>Màu Sắc : </span>
          </div>

          <div className='list_color d_flex ml_20'>
            <span className='color color_active'>
                Vàng
                <span className='pick_icon'>✓</span>
            </span>


            <span className='color'>
                Xanh dương
            </span>

            <span className='color'>
                Xanh lá
            </span>

            <span className='color'>
                Bạc
            </span>

            <span className='color'>
                Xám
            </span>
          </div>
        </div>

        <div className='amount f_flex '>
          <div className='title'>
            <span>Số Lượng : </span>
          </div>
          <div className='amount_action ml_20'>
            <button className='summation action'>
              +
            </button>

            <input type='number' value='1' />

            <button className='subtraction action'>
              -
            </button>
            
          </div>
        </div>

        <div class="product_action">
            <div class="buy_now">
              <button>
                Mua ngay
              </button>
            </div>
            <div class="add_cart">
              <button>
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
    </div>

      )
    })}
    </>
 


 
  )
}

export default ShortInfo