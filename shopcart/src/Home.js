import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';

function Home(props) {
  return (
    <React.Fragment>
      <img className='facebookProfilePhoto' src={props.fbpic} alt={props.fbdata.name}/>
      <h3 className='d-inline text-success mx-2'>
        Welcome back {props.fbdata.name} !
      </h3>
      <p className='my-5'>Time to check out?</p>
    </React.Fragment>
  );
}

export default Home;
