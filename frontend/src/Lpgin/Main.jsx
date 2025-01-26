import React from 'react'
import TopBar from '../Home/TopBar'
import { Outlet } from 'react-router-dom'
import About from '../Home/About'
function Main() {
  return (
    <div>
        <div className='sticky-top'>
            <TopBar/>
        </div>
        <div className='main d-flex justify-content-center'>
          <div className='main-sub'>
            <Outlet/>
          </div>
        </div>
        <div className='main d-flex justify-content-center'>
            <About/>
        </div>
    </div>
  )
}

export default Main