import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm(props) {
  return (
    <form style={{ width: '300px' }} className='border mt-3 mb-5 p-3 bg-white'>
      <div className='form-group'>
        <label className='m-2'>Name:</label>
        <input className='form-control' type='text' name="name" placeholder='Your name' />
      </div>
      <div className='form-group'>
        <label className='m-2'>Email:</label>
        <input className='form-control' type='email' name="email" placeholder='Your Email' />
      </div>
      
      <input type='submit' value="login" className='btn bg-success text-white my-3' />
    </form>
  );
}

export default LoginForm;
