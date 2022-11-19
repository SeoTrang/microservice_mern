import React from 'react'

const ShortInfo = () => {
  return (
    <div className='short_info'>
        <div className='name_product'>
            <span>iPhone 13 Pro Max 128GB</span>

        </div>
        <div className='brand'>
          <span className='title'>Nhãn hiệu : </span>
          <span className='ml_20'>iPhone</span>

        </div>
        <div className='price'>
          <span className='old_price'>33.990.000₫</span>
          <span className='current_price'>27.990.000₫</span>
          
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
}

export default ShortInfo