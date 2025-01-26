import React from 'react'
import Calender from './Calender'
function Main() {
  return (
    <div className=''>
      <div className='add row mx-1'>
        <div className='col-8 bg-danger'>jathu</div>
        <div className='col-4 bg-warning'>
          <Calender/>
        </div>
      </div>  
      <div className='add2 d-flex justify-content-center bg-success'>
        jathu
      </div>    
    </div>
  )
}

export default Main