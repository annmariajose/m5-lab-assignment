import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card } from 'react-bootstrap';
import LoginForm from "./LoginForm";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';

function Login(props) {
  return (
    <div className="container">
      <Card style={{ width: '800px' }} className='mx-auto mt-5'>
        <Card.Header className='pb-4'>
            {!props.login &&
            <h1>Sign In</h1>
            }
            {props.login &&
            <h1>Check Out</h1>
            }
        </Card.Header>
        <Card.Body>
            {!props.login && 
            <React.Fragment>
              <h4>Please login using one of the following:</h4>
              {/* Login Form */}
              <LoginForm />
              {/* FB Login Button */}
              <FacebookLogin
                appId="1574757803088884"
                autoLoad={false}
                fields='name,email,picture'
                scope='public_profile,user_friends'
                callback={props.HandleFacebookLogin}
                textButton=' Login with facebook'
                cssClass="facebook-login-button text-uppercase"
                icon="fa-facebook"
              />
            </React.Fragment>
            }

            {props.login &&
              <Home fbpic={props.profilePicture} fbdata={props.facebookData} />
            }
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
