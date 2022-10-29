import React from 'react'
import Sidebar from '../sidebar/Sidebar'

const AddNewProduct = () => {
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
                        <form className='form-input'>
                            <div className='input-name ip-50'>
                            <div>
                                <label className='input-name' for='product_name'>Tên sản phẩm</label>

                            </div>
                            <input type={'text'} id='product_name' name={'product_name'} className='input-name'>

                            </input>

                            

                            </div>

                            <div className='input-category ip-50'>
                            <div>
                                    <label className='' for='category'>Danh mục sản phẩm</label>

                            </div>


                                <select name="category" id="category">
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
                                <input type={'text'} id='' name={''} className=''>

                                </input>
                            </div>

                            <div className='ip-50'>
                            <div>
                                    <label className='' for=''>Số lượng</label>

                            </div>
                                <input type={''} id='' name={''} className=''>

                                </input>
                            </div>

                            <div className='ip-100'>
                            <div>
                                    <label className='' for='product_img'>Ảnh sản phẩm</label>

                            </div>
                                <input type={'file'} id='product_img' name={'product_img'} className='input-img'>

                                </input>
                            </div>

                            <div className='ip-100'>
                            <div>
                                    <label className='' for='product_img'>Danh sách ảnh chi tiết</label>

                            </div>
                                <input  type={'file'} id='product_img' name={'product_img'} className='input-img'>

                                </input>
                            </div>

                            <button className='ip-100 btn-submit'>Thêm sản phẩm</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddNewProduct