import React from 'react'

// import {useParams , Redirect  } from 'react-router-dom'
import * as ReactDOM from "react-dom";

import { Navigate, useNavigate } from 'react-router-dom'

import axios from 'axios'

import { useForm } from 'react-hook-form'


function Regsiter() {

  let navigate = useNavigate()


  const { register, handleSubmit, getValues } = useForm();


  async function postValue(){
    // alert(JSON.stringify(getValues("firstName")));
    // console.log(getValues(["name","mobilephone","email","psw","psw_repeat"]));

    try {

      // console.log("da vao");

      // let name =  await getValues("name")
      // let mobilephone = await getValues("mobilephone")
      // let email = await getValues("email")
      // let psw = await getValues("psw")
      // let psw_repeat = await getValues("psw_repeat")

      let data = {
        name :  await getValues("name"),
        mobilephone : await getValues("mobilephone"),
        email : await getValues("email"),
        psw : await getValues("psw")
      }

      if(data.name != '' && data.mobilephone != '' && data.email != '' 
        && data.psw != ''){
          console.log("da vao")
          axios.post('http://localhost:7000/register', {
            data
          })
          .then(function (response) {
            console.log(response);
            return navigate('/login')
          })
          .catch(function (error) {
            console.log(error);
          });
        } else{
          // console.log('not ok !');
          alert('vui long nhap du thong tin ')
        }

      
      
    } catch (error) {
      console.log(error);
    }
    

    // 'http://localhost:7000/register'


  }
    //     </div>
    // )
  

  return (
    <div className='register'>
          <div class="modal-content">
                <div class="container">
                    <div className='d_flex'>
                        <h1>Đăng ký</h1>
                    </div>

                    {/* <input {...register("firstName")} /> */}
                    
                    <label for="username"><b>Tên người dùng</b></label>
                    <input {...register("name")} type="text" placeholder="Nhập tên ..." id='username' />

                    <label for="mobilephone"><b>Số điện thoại người dùng</b></label>
                    <input {...register("mobilephone")} type="text" placeholder="Nhập số điện thoại .." />


   

                    <label for="email"><b>Email khách hàng</b></label>
                    <input {...register("email")} type="text" placeholder="Nhập email" />

                    <label for="psw"><b>Mật khẩu</b></label>
                    <input {...register("psw")} type="password" placeholder="Mật khẩu" />

                    <label for="psw_repeat"><b>Nhập lại mật khẩu</b></label>
                    <input {...register("psw_repeat")} type="password" placeholder="Nhập lại mật khẩu" />

                    
                    <div class="clearfix d_flex">
                        <button type="button" class="cancelbtn">Cancel</button>
                        <button class="signupbtn" onClick={postValue}>Sign Up</button>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Regsiter
