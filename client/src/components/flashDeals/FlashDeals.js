import React from 'react'
import FlashCard from './FlashCard'
import styles from './FlashDeals.module.css'

const FlashDeals = () => {
  return (
    <>
        <section className={styles.flash_backgroud}>
            <div className={styles.container_flashDeals}>
                <div className='heading d_flex'>
                    <div className='c_flex'>
                      <i className='fa fa-bolt'></i>
                      <h2>Flash Deals</h2>
                    </div>
                    <div className= 'viewmore c_flex'>
                      <p className='views-all'>Xem thêm</p>
                      <i class="fa-solid fa-caret-right"></i>                    
                      
                    </div>
                </div>

                <FlashCard/>
            </div>
        </section>
    </>
  )
}

export default FlashDeals