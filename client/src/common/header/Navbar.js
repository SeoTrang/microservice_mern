import React, { useState } from "react"
import {Link} from "react-router-dom"

const Navbar = () => {

    return (
        <>
            <header className="header">
                <div className="container content-app  d_flex" >
                    <div className="categories d_flex">

                    <span class="fa-solid fa-border-all"></span>
                        <h4>
                            
                            <i className="fa fa-chevron-down"></i>
                        </h4>
                    </div>

                    <div className="navlink">
                        <ul className="link f_flex capitalize">
                            <li> 
                                <Link to = '/'>Trang chủ</Link> 
                            </li>
                           
                            <li> 
                                <Link to = {'products/mobile-phone'}>Điện thoại</Link> 
                            </li>
                            <li> 
                                <Link to = 'products/laptop'>Laptop</Link> 
                            </li>

                            <li> 
                                <Link to = 'products/accessory'>Phụ kiện</Link> 
                            </li>
                            <li> 
                                <Link to = 'products/houseware'>Đồ gia dụng</Link> 
                            </li>


                            <li> 
                                <Link to = 'contact'>Liên hệ</Link> 
                            </li>
                        </ul>

                       
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;