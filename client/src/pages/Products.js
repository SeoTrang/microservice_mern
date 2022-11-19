import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';

import TopCategories from '../components/assets/topCategories/TopCategories'
import MoreForYou from '../components/moreForYou/MoreForYou'
import Slogan from '../components/slogan/Slogan';

const Products = () => {

  let { id } = useParams();
  console.log(id);
  return (
    <div className='products-id'>

      <TopCategories/>

          
      <MoreForYou category={id}/>

      <Slogan/>
    </div>

  )
}

export default Products