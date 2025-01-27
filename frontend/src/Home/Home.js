// import React from 'react'
// import TopBar from './TopBar'
// import Main from './Main'
// import Things from './Things'
// import About from './About'
// // import img from '../Assets/img.png'
// function Home() {
//   return (
//     <div className=''>
//         <div className='sticky-top'>
//             <TopBar/>
//         </div>
//         <div className='main d-flex justify-content-center'>
//           <div className='main-sub'>
//             <Main/>
//           </div>
//         </div>
//         <div className='main3 mt-4'>
//           <h2>For You</h2>
//         </div>
//         <div className='main mt-3 d-flex col justify-content-center'>
//           <div className='main2'>
//             <Things/>
//           </div>
//         </div>
//         <div className='main d-flex justify-content-center'>
//             <About/>
//         </div>
//         <div className='chatbot sticky-top'>
//           <div className='chat'>
//             {/* <img src={img} alt='' /> */}
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Home

import React, { useState } from 'react';
import TopBar from './TopBar';
import Main from './Main';
import Things from './Things';
import About from './About';
import Chatbot from '../chatbot/Chatbot'; // Import the Chatbot component

function Home() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false); // State to control chatbot visibility

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible); // Toggle chatbot visibility
  };

  return (
    <div className=''>
      <div className='sticky-top'>
        <TopBar />
      </div>
      <div className='main d-flex justify-content-center'>
        <div className='main-sub'>
          <Main />
        </div>
      </div>
      <div className='main3 mt-4'>
        <h2>For You</h2>
      </div>
      <div className='main mt-3 d-flex col justify-content-center'>
        <div className='main2'>
          <Things />
        </div>
      </div>
      <div className='main d-flex justify-content-center'>
        <About />
      </div>
      <div className='chatbot sticky-top'>
        <div className='chat' onClick={toggleChatbot} style={{ cursor: 'pointer' }}>
        </div>
      </div>
      {isChatbotVisible && (
        <div className='chatbox-container'>
          <Chatbot />
        </div>
      )}
    </div>
  );
}

export default Home;