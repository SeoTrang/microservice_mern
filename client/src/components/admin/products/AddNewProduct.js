import React, {useState,useEffect} from 'react'
import Sidebar from '../sidebar/Sidebar'

import { Navigate, useNavigate } from 'react-router-dom'

import axios from 'axios'

import { useForm } from 'react-hook-form'


import categories_api from '../../../apis/categories_api'







const AddNewProduct = () => {
    let navigate = useNavigate()

    const [listCate,setListCate] = useState([]);


    const { register, handleSubmit, getValues, setValue } = useForm();



    useEffect(()=>{
        async function getCate() {
            const listCategories = await categories_api.get_all_categories()
            if(listCategories){
                setListCate(listCategories)
                console.log(listCategories);
                
            }else{
                console.log('none');
            }
        }

        getCate()
        
    },[])

    function validate() {
        setValue('product_name', '',{
            shouldValidate: true,
            shouldDirty: true
          })
     
        setValue('price', '',{
            shouldValidate: true,
            shouldDirty: true
          })
        setValue('amout', '',{
            shouldValidate: true,
            shouldDirty: true
          })
        setValue('img', '')
        setValue('img_detail', '')
        setValue('product_more_info', '')

    }

    // const postValue = ()=>{
    //     validate()
    // }
    const postValue = async ()=>{
        let name = getValues("product_name")
        let category = getValues("category")
        let price = getValues("price")
        let amout = getValues("amout")
        let img = await getValues("img")[0]
        let img_detail = await getValues("img_detail")[0]
        let product_more_info = await getValues("product_more_info")

        // console.log(img_detail);
        // var temp = []
        // // let formdata = new FormData();
 
        // for( let i = 0 ; i < img_detail.length ; i++){
        //     temp.push(img_detail[i])
           
        //   await formdata.append('img_dt',i)
        //   console.log(i);
            
        // }

        // console.log(temp);

        // await formdata.append('img_detail',temp)
        // console.log(formdata.getAll("img_detail"));
    
        // console.log(tam[0]);
        // console.log(formdata.getAll("img_detail"));
        // var temp = formdata.getAll("img_detail")
        
        // console.log(img);
        // console.log(typeof(img));
        // console.log(img_detail);
        // console.log(typeof(img_detail));

        // const files = [...img_detail]
        // console.log(files);


        axios.post('http://localhost:7000/admin/store-product',{
            name,
            category,
            price,
            amout,
            img,
            img_detail,
            product_more_info
        },{
            headers: {
                'Content-Type': 'multipart/form-data,application/json'
              }
        })
        .then(function(response){
            console.log(response);
            validate();
        })
        .catch(function(error){
            console.log(error);
        })
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
                                <label className='input-name' for='product_name'>Tên sản phẩm (*)</label>

                            </div>
                            <input {...register("product_name")} type={'text'} id='product_name'  className='input-name'>

                            </input>

                            

                            </div>

                            <div className='input-category ip-50'>
                            <div>
                                    <label className='' for='category'>Danh mục sản phẩm (*)</label>

                            </div>


                                <select {...register("category")} id="category">
                                    
                                    {listCate.map((list,index)=>(
                                        <option key={index} value={list.slug}>{list.name}</option>
                                    ))}
                                </select>
                            </div>

                            

                            <div className='ip-50'>
                            <div>
                                    <label className='' for=''>Giá tiền (*)</label>

                            </div>
                                <input {...register("price")} type={'text'} id='' >

                                </input>
                            </div>

                            <div className='ip-50'>
                            <div>
                                    <label className='' for=''>Số lượng (*)</label>

                            </div>
                                <input type={''} id='' {...register("amout")} className=''>

                                </input>
                            </div>

                            <div className='ip-100'>
                            <div>
                                    <label className='' for='product_img'>Ảnh sản phẩm (*)</label>

                            </div>
                                <input type={'file'} id='product_img' {...register("img")} className='input-img'>

                                </input>
                            </div>

                            <div className='ip-100'>
                            <div>
                                    <label className='' for='product_img'>Danh sách ảnh chi tiết</label>

                            </div>
                                <input type={'file'} id='product_img' {...register("img_detail")} className='input-img'>

                                </input>
                            </div>

                            <div className='ip-100'>
                            <div>
                                    <label className='' for='product_img'>Thông tin thêm</label>

                            </div>
                                <textarea type={'text'} id='product_more_info' {...register("product_more_info")} style={{width:'100%' , minHeight:'100px'}}>

                                </textarea>
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