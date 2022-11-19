import React from 'react'
import Sidebar from '../sidebar/Sidebar'

import { Navigate, useNavigate } from 'react-router-dom'

import axios from 'axios'

import { useForm } from 'react-hook-form'




const AddNewProduct = () => {
    let navigate = useNavigate()


    const { register, handleSubmit, getValues } = useForm();

    const postValue = ()=>{
        let name = getValues("product_name")
        let category = getValues("category")
        let price = getValues("price")
        let amout = getValues("amout")
        let img = getValues("img")

        console.log(name,category);

    }
  return (
    <div>
        <div className='d_flex mt-30 mb-50'>
            <Sidebar/>
            <div className='admin-content'>
                <div className='add-new-product'>
                    <div className='admin-title'>
                    <i class="fa-solid fa-upload"></i>
                    <span>Thêm sản phẩm mới</span>
                    </div>

                    <div className=''>
                        <div className='form-input'>
                            <div className='input-name ip-50'>
                            <div>
                                <label className='input-name' for='product_name'>Tên sản phẩm</label>

                            </div>
                            <input {...register("product_name")} type={'text'} id='product_name'  className='input-name'>

                            </input>

                            

                            </div>

                            <div className='input-category ip-50'>
                            <div>
                                    <label className='' for='category'>Danh mục sản phẩm</label>

                            </div>


                                <select {...register("category")} id="category">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>

                            

                            <div className='ip-50'>
                            <div>
                                    <label className='' for=''>Giá tiền</label>

                            </div>
                                <input {...register("price")} type={'text'} id='' >

                                </input>
                            </div>

                            <div className='ip-50'>
                            <div>
                                    <label className='' for=''>Số lượng</label>

                            </div>
                                <input type={''} id='' {...register("amout")} className=''>

                                </input>
                            </div>

                            <div className='ip-100'>
                            <div>
                                    <label className='' for='product_img'>Ảnh sản phẩm</label>

                            </div>
                                <input type={'file'} id='product_img' {...register("img")} className='input-img'>

                                </input>
                            </div>

                            <div className='ip-100'>
                            <div>
                                    <label className='' for='product_img'>Danh sách ảnh chi tiết</label>

                            </div>
                                <input  type={'file'} id='product_img' {...register("img_detail")} className='input-img'>

                                </input>
                            </div>

                            <button className='ip-100 btn-submit' onClick={postValue}>Thêm sản phẩm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddNewProduct