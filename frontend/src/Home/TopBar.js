import React from 'react'
import img from '../Assets/img5.png'
import { useNavigate } from 'react-router-dom'
// import { BiSearchAlt } from "react-icons/bi";
function TopBar() {
    const navigate = useNavigate();
  return (
    <div className='top-bar d-flex justify-content-center'>
      <div className=' text-white d-flex justify-content-between px-5 sticky-top'>
          <div className='topBar'>
            <img className='top' src={img} alt='' />
          </div>
          <div className='search1 d-flex justify-content-center'>
              <input type='text' placeholder='search' className='search rounded'/>
          </div>
          <div className='right gap-2'>
              <span className='mx-2 fs-5' onClick={()=>navigate('/')}>Home</span>
              <span className='mx-2 fs-5'>about</span>
              <span className='mx-2 fs-5'>Contact</span>
              <span className='mx-2 fs-5' onClick={()=>navigate('/main')}>Login</span>
          </div>
      </div>
    </div>
  )
}

export default TopBar