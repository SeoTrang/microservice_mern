import React from 'react'


import Slider from './Slider';
import Categories from './Categories';

import './Home.css'

export const Home = () => {
  return (
    <>
        <section className='home'>
            <div className=' d_flex'>
                <Categories/>
                <Slider/>
                {/* <Home/> */}

            </div>
        </section>
    </>
  )
}

export default Home;