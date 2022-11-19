import React from 'react'

import { Link } from 'react-router-dom'

const NavCart = (props) => {
    console.log(props);
  return (
    <div className='time_line f_flex '>
                    <Link to='/cart'>
                        <button className='check_cart_nav nav_cart nav_cart_active'>
                            1. Giỏ hàng
                        </button>
                    </Link>

                    <span className={' line_cart '+ props.lineCartActive1}></span>

                    <Link to='/detail-cart'>
                        <button className={'detail_cart_nav nav_cart '+ props.navCartActive2} >
                            2. Nhập thông tin
                        </button>
                    </Link>


                    <span className={' line_cart '+props.lineCartActive2}></span>

                    <Link to='/review-cart'>
                        <button className={'review_cart_nav nav_cart '+props.navCartActive3} >
                            3. Xác nhận thông tin
                        </button>
                    </Link>

                    
                </div>
  )
}

export default NavCart