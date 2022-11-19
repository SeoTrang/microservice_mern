import React from 'react'

import { Link } from 'react-router-dom'

import NavCart from './NavCart'


import img from './1.Ford2019.png'

const Review = () => {
  return (
    <div className='mt-50'>
      <NavCart 
        lineCartActive1='line_cart_active'
        navCartActive2='nav_cart_active'
        lineCartActive2='line_cart_active'
        navCartActive3='nav_cart_active'
      
      />
      <div className='review_cart mt-50 mb-50 cart_title d_flex'>
          <div className='review_cart_left'>
            <div className='review_cart_title'>
              <span>Chi tiết sản phẩm</span>

            </div>

            <div className='review_cart_products'>
              <div className='review_cart_products'>
                <div className='cart_product'>
                    
                      <img className='cart_img' src={img} alt=''/>
                    

                    <div className='name_price_action ml-80'>
                      <div className='name_price'>
                        <div className='product_cart_name c_flex'>
                          <div className='name_product'>
                              <span>Lord 2019</span>
                              
                          </div>
                          
                        </div>
                      </div>


                        <div className='price_amount_action c_flex'>
                          <div className='price_amount'>
                            <span className='cart_price'>
                              44.990.000₫
                            </span>
                            <span className='cart_multiplication'>X</span>
                            <span className='cart_amount'>
                              1
                            </span>
                            </div>

                           
                        </div>
                      


                      
                    </div>
                    
                </div>

              


              <div className='cart_product'>
                    
                      <img className='cart_img' src={img} alt=''/>
                    

                    <div className='name_price_action ml-80'>
                      <div className='name_price'>
                        <div className='product_cart_name c_flex'>
                          <div className='name_product'>
                              <span>Lord 2019</span>
                              
                          </div>
                          
                        </div>
                      </div>


                        <div className='price_amount_action c_flex'>
                          <div className='price_amount'>
                            <span className='cart_price'>
                              44.990.000₫
                            </span>
                            <span className='cart_multiplication'>X</span>
                            <span className='cart_amount'>
                              1
                            </span>
                            </div>

                           
                        </div>
                      


                      
                    </div>
                    
                </div>


                <div className='cart_product'>
                    
                      <img className='cart_img' src={img} alt=''/>
                    

                    <div className='name_price_action ml-80'>
                      <div className='name_price'>
                        <div className='product_cart_name c_flex'>
                          <div className='name_product'>
                              <span>Lord 2019</span>
                              
                          </div>
                          
                        </div>
                      </div>


                        <div className='price_amount_action c_flex'>
                          <div className='price_amount'>
                            <span className='cart_price'>
                              44.990.000₫
                            </span>
                            <span className='cart_multiplication'>X</span>
                            <span className='cart_amount'>
                              1
                            </span>
                            </div>

                           
                        </div>
                      


                      
                    </div>
                    
                </div>


                <div className='cart_product'>
                    
                      <img className='cart_img' src={img} alt=''/>
                    

                    <div className='name_price_action ml-80'>
                      <div className='name_price'>
                        <div className='product_cart_name c_flex'>
                          <div className='name_product'>
                              <span>Lord 2019</span>
                              
                          </div>
                          
                        </div>
                      </div>


                        <div className='price_amount_action c_flex'>
                          <div className='price_amount'>
                            <span className='cart_price'>
                              44.990.000₫
                            </span>
                            <span className='cart_multiplication'>X</span>
                            <span className='cart_amount'>
                              1
                            </span>
                            </div>

                           
                        </div>
                      


                      
                    </div>
                    
                </div>
                

              
            </div>
            </div>
          </div>

          <div className='review_cart_right '>
            <div className='review_cart_user_info mb-30'>
              <div className='review_cart_username mt-20'>
                <i class="fa-solid icon_review fa-user"></i>
                <span className='title_review_user_info color_opacity'>Họ tên : </span>
                <span className='value_review_user_info'>Ma Seo Tráng</span>
              </div>

              <div className='review_cart_phonenumber mt-20'>
                <i class="fa-solid icon_review fa-phone"></i>
                <span className='title_review_user_info color_opacity'>Số điện thoại : </span>
                <span className='value_review_user_info'>0386640397</span>

              </div>

              <div className='review_cart_useremail mt-20'>
                <i class="fa-solid icon_review fa-envelope"></i>
                <span className='title_review_user_info color_opacity'>Địa chỉ email : </span>
                <span className='value_review_user_info'>seotrangbh24@gmail.com</span>
              </div>

              <div className='review_cart_address mt-20'>
                <i class="fa-solid icon_review fa-location-dot"></i>
                <span className='title_review_user_info color_opacity'>Địa chỉ giao hàng : </span>
                <span className='value_review_user_info'>Gần Trường Đại Học Công Nghệ Thông Tin & Truyền Thông Thái Nguyên</span>
              </div>

              
              
            </div>

            <div className='review_cart_total'>
              <div className='review_cart_total_top mt-30'>
                <div className='subtotal_review_cart mt-30'>
                  <span className='subtotal_title color_opacity'>Tổng giá trị sản phẩm : </span>
                  <span className='subtotal_value color_pink'>59.990.000₫</span>
                </div>

                <div className='shipping_review_cart mt-30'>
                  <span className='shipping_title color_opacity'>Phí vận chuyển : </span>
                  <span className='shipping_value color_pink'>39.000₫</span>
                </div>

                <div className='voucher_review_cart mt-30'>
                  <span className='voucher_review__title color_opacity'>Giá trị voucher : </span>
                  <span className='voucher_review_value color_pink'>-90.000₫</span>
                </div>

                
              </div>


              <div> 
                <div className='review_line mt-30 mb-30'></div>
              </div>


              <div className='review_cart_total_buttom'>
                <span className='total_all color_pink'>55.990.000₫</span>
              </div>


            </div>
          </div>


          
      </div>

      <div className='review_cart_action'>
            <div className='detail_cart_action c_flex mt-30 mb-50'>
              <Link to={'/detail-cart'} className='link_cart'>
                  <button className='btn_back'>
                    Quay lại
                  </button>
              </Link>

              <Link to={'/store-order'} className='link_cart'>
                  <button className='btn_next btn_order'>
                      Đặt hàng
                  </button>
              </Link>
            </div>
          </div>
    </div>
  )
}

export default Review