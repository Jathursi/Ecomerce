import React from 'react'

function Login() {
  return (
    <div className='login'>
    <h2>Login</h2>
    <form className='form'>
      <div className='row'>
        <label className='col-2'>Email</label>
        <input type='text' placeholder='Email' className='form-control mt-3 col-6'/>
      </div>
      <div>
        <label>Password</label>
        <input type='password' placeholder='Password' className='form-control mt-3'/>
      </div>
      <div className='d-grid gap-2'>
        <button className='btn btn-primary mt-3'>Login</button>
      </div>
    </form>
    </div>
  )
}

export default Login