import React from 'react'

import TopCategories from '../components/assets/topCategories/TopCategories';
import FlashDeals from '../components/flashDeals/FlashDeals';

import  Home  from '../components/Haeader/Home'
import MoreForYou from '../components/moreForYou/MoreForYou';
import NewArrivals from '../components/newArrivals/NewArrivals';
import ProductHome from '../components/productHome/ProductHome';
import ShoppingTrend from '../components/shoppingTrend/ShoppingTrend';
import Slogan from '../components/slogan/Slogan';


function HomePage(){
  return (
    <>
        {/* <h1>Pages</h1> */}
        <Home/>
        <FlashDeals/>
        <NewArrivals/>
        <ShoppingTrend/>
        <ProductHome/>
        <ProductHome/>
        <TopCategories/>
        <MoreForYou/>
        <Slogan/>
        
    </>
  )
}

export default HomePage;
