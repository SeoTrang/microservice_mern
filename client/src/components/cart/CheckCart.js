import React from 'react'


import {Link} from 'react-router-dom'


import NavCart from './NavCart';

import img from './1.Ford2019.png'



const CheckCart = () => {

  return (
    
    <div>
      <NavCart/>
      <div className='check_cart d_flex mb-50'>
        <div className='cart_products'>
            <div className='cart_product'>
                
                  <img className='cart_img' src={img} alt=''/>
                

                <div className='name_price_action'>
                  <div className='name_price'>
                    <div className='product_cart_name c_flex'>
                      <div className='name_product'>
                          <span>Lord 2019</span>
                          
                      </div>
                      <i class="fa-solid remove_cart fa-xmark"></i>
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

                        <div className='cart_action'>
                          <button className='cart_reduce cart_action_btn'>
                            -
                          </button>
                          
                          <span className='cart_amount_value'>
                              1
                          </span>
                          <button className='cart_augment cart_action_btn'>
                            +
                          </button>

                          

                          
                        </div>
                    </div>
                  


                  
                </div>
                
            </div>

          


          <div className='cart_product'>
                
                  <img className='cart_img' src={img} alt=''/>
                

                <div className='name_price_action'>
                  <div className='name_price'>
                    <div className='product_cart_name c_flex'>
                      <div className='name_product'>
                          <span>Lord 2019</span>
                          
                      </div>
                      <i class="fa-solid remove_cart fa-xmark"></i>
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

                        <div className='cart_action'>
                          <button className='cart_reduce cart_action_btn'>
                            -
                          </button>
                          
                          <span className='cart_amount_value'>
                              1
                          </span>
                          <button className='cart_augment cart_action_btn'>
                            +
                          </button>

                          

                          
                        </div>
                    </div>
                  


                  
                </div>
                
            </div>


            <div className='cart_product'>
                
                  <img className='cart_img' src={img} alt=''/>
                

                <div className='name_price_action'>
                  <div className='name_price'>
                    <div className='product_cart_name c_flex'>
                      <div className='name_product'>
                          <span>Lord 2019</span>
                          
                      </div>
                      <i class="fa-solid remove_cart fa-xmark"></i>
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

                        <div className='cart_action'>
                          <button className='cart_reduce cart_action_btn'>
                            -
                          </button>
                          
                          <span className='cart_amount_value'>
                              1
                          </span>
                          <button className='cart_augment cart_action_btn'>
                            +
                          </button>

                          

                          
                        </div>
                    </div>
                  


                  
                </div>
                
            </div>


            <div className='cart_product'>
                
                  <img className='cart_img' src={img} alt=''/>
                

                <div className='name_price_action'>
                  <div className='name_price'>
                    <div className='product_cart_name c_flex'>
                      <div className='name_product'>
                          <span>Lord 2019</span>
                          
                      </div>
                      <i class="fa-solid remove_cart fa-xmark"></i>
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

                        <div className='cart_action'>
                          <button className='cart_reduce cart_action_btn'>
                            -
                          </button>
                          
                          <span className='cart_amount_value'>
                              1
                          </span>
                          <button className='cart_augment cart_action_btn'>
                            +
                          </button>

                          

                          
                        </div>
                    </div>
                  


                  
                </div>
                
            </div>
            

          
        </div>

        <div className='cart_product_right'>
          <div className='cart_pd_right_container'>
          <div className='voucher mt-30'>
              <div className='form_code'>
                <input type='text' placeholder='Nhập mã giảm giá..'/>

              </div>

              <div className='apply_voucher mt-30'>
                <button className='btn_apply_voucher'>
                  Áp dụng mã
                </button>
              </div>
          </div>

          <div className='total_price mt-30'>
            <span className='total_title'>
              Tổng giá : 
            </span>
            <span className='price_value'>
              44.990.000₫
            </span>
          </div>

          <div className='next_to_detail mt-30'>
            <Link to='/detail-cart'>
              <button className='btn_next_cart' >
                Tiếp theo
              </button>
            </Link>
          </div>
          </div>
        </div>


    </div>
    </div>
  )
}

export default CheckCart