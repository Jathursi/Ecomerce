import React from 'react';
import TopBar from '../Home/TopBar';
import { Outlet } from 'react-router-dom';
import About from '../Home/About';
import img from '../Assets/back3.png'

function Main() {
  return (
    <div style={{ minheight: '90vh' }}> {/* Ensure the parent container has a height */}
      <div className="sticky-top">
        <TopBar />
      </div>
      <div className="row"> {/* Subtract TopBar's height */}
        <div
          className="log-left col-8"
        >
          <img src={img} alt='' className='img-left'/>
        </div>
        <div className="col-4">
          <Outlet />
        </div>
      </div>
      <div className='main d-flex justify-content-center'>
            <About/>
        </div>
    </div>
  );
}

export default Main;
