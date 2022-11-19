import React from 'react'

import Table from 'react-bootstrap/Table';

import DoughnutChart from '../dashboard/DoughnotChart'
import LineChart from '../dashboard/LineChart'
import Sidebar from '../sidebar/Sidebar'

import faker from 'faker'

const ProductAdmin = () => {
  const labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'];
  

  const datasetsmoreLine = [
    {
      label: 'Thu nhập',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Thu nhập',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'blue',
      backgroundColor: 'blue',
    },
    {
      label: 'Thu nhập',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'blue',
      backgroundColor: 'blue',
    },
    {
      label: 'Thu nhập',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'blue',
      backgroundColor: 'blue',
    }
  ]


  const datasetsDotChart = [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ]

  const datasetsDotChartsale = [
    {
      label: '',
      data: [122, 29, 60, 55, 20, 31],
      backgroundColor: [
        '#0000FF',
        'rgb(255,69,0)',
        'rgb(255,215,0)',
        'rgb(0,255,0)',
        'rgb(0,255,255)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ]

  
  return (
    <div className='d_flex mt-30 mb-50'>
      <Sidebar/>
      <div className='admin-content'>
        <div className='products-admin '>
          <div className='admin-title'>
            <i class="fa-brands fa-product-hunt"></i>
            <span>Sản phẩm</span>
          </div>

          <div className='charts_product c_flex'>
            <div className='chart chart_top_product chart_product'>
              <DoughnutChart title={'Top 6 số lượng sản phẩm trong kho'} datasets={datasetsDotChart}/>
            </div>

            <div className='chart chart_top_product_sale chart_product'>
              {/* <LineChart title={'Top bán chạy'} datasets = {datasetsmoreLine}/>
              <LineChart title={'Top bán chạy'} datasets = {datasetsmoreLine}/>
               */}

              <DoughnutChart title={'Top 6 sản phẩm bán chạy nhất'} datasets={datasetsDotChartsale}/>
            </div>
          </div>

          <div className='all-produdcts mt-50'>

          <Table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Hình ảnh</th>
          <th>Tên</th>
          <th>Giá</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <img src='https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/19/637859770669240063_iphone-13-pro-max-xanh-1.jpg' />
          </td>
          <td>iPhone 13 Pro Max 128GB</td>
          <td>27.990.000₫</td>
        </tr>
        <tr>
          <td>2</td>
          <td>
          <img src='https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/19/637859770669240063_iphone-13-pro-max-xanh-1.jpg' />
          </td>
          <td>iPhone 13 Pro Max 128GB</td>
          <td>27.990.000₫</td>
        </tr>
        <tr>
          <td>3</td>
          <td >
          <img src='https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/19/637859770669240063_iphone-13-pro-max-xanh-1.jpg' />
          </td>
          <td>
          iPhone 13 Pro Max 128GB
          </td>
          <td>27.990.000₫</td>
        </tr>

        <tr>
          <td>3</td>
          <td >
          <img src='https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/19/637859770669240063_iphone-13-pro-max-xanh-1.jpg' />
          </td>
          <td>
          iPhone 13 Pro Max 128GB
          </td>
          <td>27.990.000₫</td>
        </tr>
        <tr>
          <td>3</td>
          <td >
          <img src='https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/19/637859770669240063_iphone-13-pro-max-xanh-1.jpg' />
          </td>
          <td>
          iPhone 13 Pro Max 128GB
          </td>
          <td>27.990.000₫</td>
        </tr>

        <tr>
          <td>3</td>
          <td >
          <img src='https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/19/637859770669240063_iphone-13-pro-max-xanh-1.jpg' />
          </td>
          <td>
          iPhone 13 Pro Max 128GB
          </td>
          <td>27.990.000₫</td>
        </tr>

        <tr>
          <td>3</td>
          <td >
          <img src='https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/19/637859770669240063_iphone-13-pro-max-xanh-1.jpg' />
          </td>
          <td>
          iPhone 13 Pro Max 128GB
          </td>
          <td>27.990.000₫</td>
        </tr>

        <tr>
          <td>3</td>
          <td >
          <img src='https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/4/19/637859770669240063_iphone-13-pro-max-xanh-1.jpg' />
          </td>
          <td>
          iPhone 13 Pro Max 128GB
          </td>
          <td>27.990.000₫</td>
        </tr>
      </tbody>
    </Table>
          </div>


        </div>
      </div>
    </div>
  )
}

export default ProductAdmin






 
    


