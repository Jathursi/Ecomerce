import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Lpgin/Login';
import Signup from './Lpgin/Signup';
import Contact from './Lpgin/Contact';
import './App.css'
import Main from './Lpgin/Main';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/main' element={<Main/>}>
          <Route index element={<Navigate to='login' />} />
          <Route path='signup' element={<Signup/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App