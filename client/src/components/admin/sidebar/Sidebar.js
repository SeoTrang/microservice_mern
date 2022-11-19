import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='my-sidebar'>
        
          
            <Link to={'/admin'} className={'nav-sidebar nav-sidebar-active item-sidebar-active'}>
            <i class="fa-solid fa-gauge-high"></i>
            <span className='ml-20'>Tổng quan</span>
          </Link>
          
       

        
          
            <Link to={'/admin/products'} className={'nav-sidebar'}>
            <i class="fa-brands fa-product-hunt"></i>
            <span className='ml-20'>Sản phẩm</span>
          </Link>
          

          
            <Link to={'/admin/add-new-product'} className={'nav-sidebar'}>
            <i class="fa-solid fa-upload"></i>
            <span className='ml-20'>Thêm sản phẩm mới</span>
          </Link>
          

          
            <Link to={'/admin/categories'} className={'nav-sidebar'}>
            <i class="fa-solid fa-bars"></i>
            <span className='ml-20'>Danh mục</span>
          </Link>
          
       
          
            <Link to={'/admin/add-category'} className={'nav-sidebar'}>
            <i class="fa-solid fa-plus"></i>
            <span className='ml-20'>Thêm danh mục</span>
          </Link>
          

          
            <Link to={'/admin/order'} className={'nav-sidebar'}>
            <i class="fa-solid fa-cart-shopping"></i>
            <span className='ml-20'>Đơn hàng</span>
          </Link>
          

          
            <Link to={'/admin/add-order'} className={'nav-sidebar'}>
            <i class="fa-solid fa-cart-plus"></i>
            <span className='ml-20'>Thêm đơn hàng</span>
          </Link>
          


        
          
       
      </div>

    </div>
   
  )
}

export default Sidebar