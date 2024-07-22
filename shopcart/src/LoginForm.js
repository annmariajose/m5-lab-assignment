import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm(props) {
  return (
    <form className='border mt-3 mb-5 p-3 bg-white'>
      <label className='m-2'>Name:</label>
      <input type='text' name="name" placeholder='Your name' />
      <label className='m-2'>Email:</label>
      <input type='email' name="email" placeholder='Your Email' />
      <input type='submit' value="login" className='btn bg-success text-white my-3' />
    </form>
  );
}

export default LoginForm;
