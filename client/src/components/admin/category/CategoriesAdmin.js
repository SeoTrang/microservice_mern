import React from 'react'
import Table from 'react-bootstrap/Table';
import { useForm } from 'react-hook-form';
import axios from 'axios'; 



import Sidebar from '../sidebar/Sidebar'


const CategoriesAdmin = () => {

  const { register, handleSubmit, getValues } = useForm();

  const btn_submit = async()=>{
    let category_name = await getValues("category_name");
    let category_img = await getValues("category_img")[0];

    console.log(category_img);

    
    
      axios.post('http://localhost:7000/admin/store-category',{
        category_name,
        category_img
      },{
        headers: {
          'Content-Type': 'multipart/form-data,application/json'
        }
      })
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      })
    
  }
  return (
    <div className='d_flex mt-30 mb-50'>
      <Sidebar/>
      <div className='admin-content'>
        <div className='categories-ad'>
          <div className='admin-title'>
            <i class="fa-solid fa-bars"></i>
            <span>Danh mục</span>
          </div>

          <div className='categories-ad-content'>
            <div className='view-categories'>
            <Table striped variant="dark">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên danh mục</th>
                  <th>Số lượng sản phẩm</th>
                  <th>Ngày tạo</th>
                  <th></th>
                </tr>
              </thead>
              {/* <div className='line'>hello</div> */}
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid icon-delete fa-trash"></i>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>

                  <td>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid icon-delete fa-trash"></i>
                  </td>
                </tr>
                
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>

                  <td>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid icon-delete  fa-trash"></i>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>

                  <td>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid icon-delete  fa-trash"></i>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>

                  <td>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid icon-delete  fa-trash"></i>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>

                  <td>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid icon-delete  fa-trash"></i>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>

                  <td>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid icon-delete  fa-trash"></i>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>

                  <td>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid icon-delete  fa-trash"></i>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>

                  <td>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid icon-delete  fa-trash"></i>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>

                  <td>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid icon-delete  fa-trash"></i>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>

                  <td>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid icon-delete  fa-trash"></i>
                  </td>
                </tr>
              </tbody>
            </Table>
            </div>

            <div className='add-new-category'>
              <div > 
                <input {...register("category_name")} type={'text'} className='input-new-category' placeholder='Nhập tên danh mục mới . . .'/>
                <div className='input-file-category d_flex'>
                <input {...register("category_img")} type={'file'}  className='input-file'/>
                </div>
                <div className='btn-submit' onClick={btn_submit}>Thêm</div>
              </div>
            </div>
          </div>

        </div>


      </div>


    </div>
  )
}

export default CategoriesAdmin