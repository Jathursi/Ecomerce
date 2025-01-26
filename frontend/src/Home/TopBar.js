import React from 'react'
import img from '../Assets/img5.png'
// import { BiSearchAlt } from "react-icons/bi";
function TopBar() {
  return (
    <div className='d-flex justify-content-center bg-dark'>
      <div className=' text-white d-flex justify-content-between px-5 sticky-top'>
          <div className='topBar'>
            <img className='top' src={img} alt='' />
          </div>
          <div className='search1 d-flex justify-content-center'>
              <input type='text' placeholder='search' className='search rounded'/>
              {/* <span><BiSearchAlt/></span> */}
          </div>
          <div className='right gap-2'>
              <span className='mx-2 fs-5'>Home</span>
              <span className='mx-2 fs-5'>about</span>
              <span className='mx-2 fs-5'>Contact</span>
              <span className='mx-2 fs-5'>Login</span>
              {/* <span className='mx-2 fs-4'>Logout</span> */}
          </div>
      </div>
    </div>
  )
}

export default TopBar