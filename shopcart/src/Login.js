import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card } from 'react-bootstrap';
import LoginForm from "./LoginForm";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";

function Login(props) {
  return (
    <div class="container">
      <Card style={{ width: '800px' }} className='mx-auto mt-5'>
        <Card.Header className='pb-4'>
          <h1>Sign In</h1>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {!props.login && 
            <React.Fragment>
              <h3>Please login using one of the following:</h3>
              {/* Login Form */}
              <LoginForm />
              {/* FB Login Button */}
              <FacebookLogin
                appId="1574757803088884"
                autoLoad={false}
                fields='name,email,picture'
                scope='public_profile,user_friends'
                callback={props.HandleFacebookLogin}
                icon="fa-facebook"
              />
            </React.Fragment>
            }

            {props.login &&
              <Home fbpic={props.profilePicture} fbdata={props.facebookData} />
            }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
