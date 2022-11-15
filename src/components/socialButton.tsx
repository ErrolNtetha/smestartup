import React from 'react';
import ReactGoogleLogin from 'react-google-login';
import ReactFacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

export const Google = () => {
    const onResponse = (res) => console.log(res);
    return (
        <ReactGoogleLogin
          clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
          onSuccess={onResponse}
          onFailure={onResponse}
          cookiePolicy='single_host_origin'
          render={({ onClick }) => {
              return (
                    <button className='login__facebookLogin' type='button' onClick={onClick}>
                        <FaGoogle />
                        <p>Login with Google</p>
                    </button>
              );
          }}
        />
    );
};

export const Facebook = () => {
    const onResponse = (res) => console.log(res);
    return (
        <ReactFacebookLogin
          appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}
          callback={onResponse}
          render={({ onClick }) => {
              return (
                    <button className='login__facebookLogin' type='button' onClick={onClick}>
                        <FaFacebookF />
                        <p>Login with Facebook</p>
                    </button>
              );
          }}
        />
    );
};
