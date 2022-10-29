import React from 'react'
import logo from "../../components/assets/images/Logo-FPT_2.webp"


const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='footer-col location'>
                <div className='logo-shop'>
                    <img src={logo} alt=""/>
                
                </div>
                <div className='location-chind'>
                    <i class="fa-solid fa-location-dot"></i>
                    <div><h4>Địa chỉ cửa hàng : </h4><span>Gần Trường Đại Học Công Nghệ Thông Tin & Truyền Thông Thái Nguyên</span></div>
                    
                </div>
                <div className='link-to-app'>
                    <a href='' className='ch-play'>
                        
                            <div className='logo'>
                                <img src="https://img.icons8.com/fluency/48/000000/google-play.png"/>

                            </div>
                            <div className='caption'>
                                
                                <span className='second-cap'>Google Play</span>
                            </div>
                        
                    </a>

                    <a href='' className='app-store'>
                        
                            <div className='logo'>
                            <img src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png"/>

                            </div>
                            <div className='caption'>
                                
                                <span className='second-cap'>App Store</span>
                            </div>
                        
                    </a>
                </div>
            </div>


            <div className='footer-col about-us'>
                <div className='title'>
                    About Us
                </div>
                <div className='footer-chind'>
                    <span>Careers</span><br/>
                    <span>Our Stores</span><br/>
                    <span>Our Cares</span><br/>
                    <span>Terms & Conditions</span><br/>
                    <span>Privacy Policy</span><br/>
                </div>
            </div>
            <div className='footer-col customer-care'>
                <div className='title'>
                    Customer Care
                </div>
                <div className='footer-chind'>
                    <span>Help Center</span><br/>
                    <span>Track Your Order</span><br/>
                    <span>How to Buy</span><br/>
                    <span>Corporate & Bulk Purchasing</span><br/>
                    <span>Returns & Refunds</span><br/>
                </div>
            </div>
            <div className='footer-col contact-us'>
                <div className='title'>
                    Contact Us
                </div>
                <div className='footer-chind'>
                    <span>70 Washington Square South, New York, NY 10012, United States</span><br/>
                    <span>Email: uilib.help@gmail.com</span><br/>
                    <span>Phone: +1 1123 456 780</span><br/>
                    <div className='socical-network'>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-google"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer