import React from 'react'

import faker from 'faker';

import Sidebar from '../sidebar/Sidebar'



import LineChart from './LineChart'

import AriaChart  from './AriaChart';


//start chart line total earning 




// start monthly earning




const Dashboard = () => {
  const labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'];
  

  const datasets1Line = [
    {
      label: 'Thu nhập',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgb(255, 99, 132)',
    }
  ]

  const datasets2Line = [
    {
      label: 'Thu nhập',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Thu nhập',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'blue',
      backgroundColor: 'blue',
    }
  ]


  return (
    <div className='d_flex mt-30 mb-50'>
        <Sidebar/>
        <div className='admin-content'>
          <div className='dashboard'>
            

            <div className='earning'>
              <div className='admin-title'>
                <i class="fa-brands fa-bitcoin"></i>
                <span>Thu nhập</span>
              </div>

              <div className='box_earning d_flex mt-30'>
                <div className='total_earning box_earning_chind'>
                  <div className='title_earning'>
                    <i class="fa-solid fa-money-bills"></i>
                    <span>Tổng thu nhập</span>
                  </div>
                  <div className='total_earning_value'>
                    <span>44.990.000₫</span>
                  </div>

                  
                </div>

                <div className='last_year_earning box_earning_chind '>
                  <div className='title_earning'>
                    <i class="fa-solid fa-money-bill-1-wave"></i>
                    <span>Thu nhập 2022</span>
                  </div>
                  <div className='total_earning_value'>
                    <span>44.990.000₫</span>
                  </div>

                  
                </div>

                <div className='last_month_earning box_earning_chind '>
                  <div className='title_earning'>
                    <i class="fa-solid fa-money-check-dollar"></i>
                    <span>Thu nhập tháng 9</span>
                  </div>
                  <div className='total_earning_value'>
                    <span>44.990.000₫</span>
                  </div>

                  
                </div>

               
              </div>

              <div className='chart_monthly_earnings chart mt-30'>
                <LineChart title={'Chi tiết thu nhập năm 2022'} datasets = {datasets1Line}/>
              </div>
            </div>

            <div className='admin_products_dashboard mt-50'>
              <div className='admin-title'>
                <i class="fa-brands fa-bitcoin"></i>
                <span>Sản phẩm</span>
              </div>

              

              <div className='chart_monthly_earnings chart mt-30'>
                <AriaChart/>
              </div>
            </div>


          </div>
        </div>
    </div>
  )
}

export default Dashboard