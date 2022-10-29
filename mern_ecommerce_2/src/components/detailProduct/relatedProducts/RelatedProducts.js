import React from 'react'

import styles from './FlashDeals.module.css'
import RelateCard from './RelatedCard'

const FlashDeals = () => {
  return (
    <div className='mt-50 mb-50'>
        <section className={styles.flash_backgroud}>
            <div className={styles.container_flashDeals}>
                <div className='heading d_flex '>
                    <div className='c_flex'>
                      
                      <h2>Sản phẩm có liên quan</h2>
                    </div>
                    <div className= 'viewmore c_flex'>
                      <p className='views-all'>Xem thêm</p>
                      <i class="fa-solid fa-caret-right"></i>                    
                      
                    </div>
                </div>

                <RelateCard/>
            </div>
        </section>
    </div>
  )
}

export default FlashDeals