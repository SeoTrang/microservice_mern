import React from 'react'

import Header from '../common/header/Header';

import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router-dom";


import HomePage from '../pages/HomePage';

import Footer from '../common/footer/Footer';
import DetaillProduct from '../pages/DetaillProduct';
import Cart from '../components/cart/Cart';
import Detail from '../components/cart/Detail';
import Review from '../components/cart/Review';
import Products from '../pages/Products';
import AdminPages from '../pages/AdminPages';

import ProductAdmin from '../components/admin/products/ProductAdmin';
import AddNewProduct from '../components/admin/products/AddNewProduct';
import Login from '../components/auth/login';
import Regsiter from '../components/auth/regsiter';
import CategoriesAdmin from '../components/admin/category/CategoriesAdmin';



function RoutesWeb() {
    return (
        <>
            <Router>
            
            <Routes>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/register' element={<Regsiter/>}></Route>
            </Routes>
            <div className='my-app'>
            <Header/> 
              {/* <Pages/> */}

              <div className='content-app'>  
                   
                <Routes>

                      
                    
                      <Route path="/" exact element={<HomePage/>}>
                      </Route>

                      <Route path="/detail/:id" exact element={<DetaillProduct/>}>
                      </Route>
                      
                      <Route path='/cart' exact element={<Cart/>}
                      >

                      </Route>

                      <Route path='/detail-cart' exact element={
                        <Detail 
                          
                        />}>

                        </Route>

                        <Route path='/review-cart' exact element={<Review/>}></Route>

                        <Route path="/products/:id" exact element={<Products/>}></Route>


                        <Route path='/admin' element={<AdminPages/>}></Route>



                        {/* admin */}

                        <Route path='/admin/products' element={<ProductAdmin/>}></Route>
                        <Route path='/admin/add-new-product' element={<AddNewProduct/>}></Route>
                        <Route path='/admin/categories' element= {<CategoriesAdmin/>}></Route>

                </Routes>
                </div>
              <Footer/>
            </div>
          </Router>
        </>
    )
}

export default RoutesWeb
