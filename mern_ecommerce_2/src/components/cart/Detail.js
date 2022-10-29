import React from 'react'

import { Link } from 'react-router-dom'

import NavCart from './NavCart'



const Detail = () => {
  return (
    <div className='mt-50'>
      <NavCart 
        lineCartActive1='line_cart_active'
        navCartActive2='nav_cart_active'
        lineCartActive2=''
        navCartActive3=''
      
      />
      <div className='detail_cart mt-50'>
        <div className='detail_cart_title cart_title'>
          <span>Thông tin giao hàng</span>
        </div>
        <div className='form_detail_cart_input'>
          <div className='user_name'>
            <div>
              <label className='label_input_user' for='username'>Họ tên đầy đủ</label>
            </div>
            <input  type={'text'} id='username' className='cart_input' name='userName'/>
          </div>
          
          <div className='user_phonenumber'>
            <div>
              <label className='label_input_user' for='userphonenumber'>Số điện thoại</label>      </div>

            <input  type={'text'} id='userphonenumber' className='cart_input' name='userPhoneNumber'/>
          </div>
          
          <div className='user_email'>
            <div>
              <label className='label_input_user' for='useremail'>Địa chỉ email</label>
          </div>
                   <input  type={'email'} id='useremail' className='cart_input' name='userEmail' placeholder='vidu@gmail.com'/>
          </div>
          
          <div className='user_address'>
            <div>
              <label className='label_input_user' for='useraddress'>Địa chỉ nhận hàng</label>      </div>

            <input  type={'text'} id='useraddress' className='cart_input' name='userAddress'/>
          </div>
          
        </div>

        <div className='detail_cart_action c_flex mt-30 mb-50'>
          <Link to={'/cart'} className='link_cart'>
              <button className='btn_back'>
                Quay lại
              </button>
          </Link>

          <Link to={'/review-cart'} className='link_cart'>
              <button className='btn_next'>
                  Tiếp theo
              </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Detail