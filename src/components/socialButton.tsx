import React, { useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import ReactFacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { axiosPublic } from 'config/axiosInstance';
import logged from 'store/actions/logged';
import { fetchProfile } from 'store/actions/fetchProfile';
import { useHistory } from 'react-router-dom';
import { gapi } from 'gapi-script';

type Props = {
    buttonText: string,
}

export const Google = ({ buttonText }: Props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
            clientId: `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`,
            scope: 'https://www.googleapis.com/auth/userinfo.profile'
        });
    };
        gapi.load('client:auth2', initClient);
    });

    const onFailure = (error) => console.log('Failure: ', error);

    const onSuccess = (res) => {
        if (res.accessToken) {
            axiosPublic.get(`/auth/google/token?accessToken=${res.tokenId}&googleId=${res.googleId}`)
                .then((response) => {
                    const { success, user } = response.data;
                    if (success) {
                        dispatch(logged());
                        dispatch(fetchProfile(user));
                        history.push('/feed');
                    } else {
                        console.log('Res: ', success);
                    }
                })
                .catch((error) => console.log('Aww Error: ', error));
            }
        };
    return (
        <GoogleLogin
          clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy='single_host_origin'
          isSignedIn
          render={({ onClick }) => {
              return (
                    <button className='login__facebookLogin' type='button' onClick={onClick}>
                        <FaGoogle />
                        <p>{buttonText}</p>
                    </button>
              );
          }}
        />
    );
};

export const GLogout = () => {
    const onSuccess = (res) => console.log(res);
    const onFailure = (res) => console.log(res);
return (
        <GoogleLogout
          clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
          onLogoutSuccess={onSuccess}
          onFailure={onFailure}
          render={({ onClick }) => {
              return (
                    <button className='login__facebookLogin' type='button' onClick={onClick}>
                        <FaGoogle />
                        <p>Logout</p>
                    </button>
              );
          }}
        />
    );
};

export const Facebook = ({ buttonText }: Props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const onResponse = (res) => {
        if (res) {
            const { accessToken } = res;
            axiosPublic.get(`/auth/facebook/token?accessToken=${accessToken}`)
                .then((response) => {
                    const { success, user } = response.data;
                    if (success) {
                        dispatch(logged());
                        dispatch(fetchProfile(user));
                        history.push('/feed');
                    } else {
                        console.log('Res: ', success);
                    }
                })
                .catch((error) => console.log('Aww Error: ', error));
            }
        };

    return (
        <ReactFacebookLogin
          appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}
          callback={onResponse}
          render={({ onClick }) => {
              return (
                    <button className='login__facebookLogin' type='button' onClick={onClick}>
                        <FaFacebookF />
                        <p>{buttonText}</p>
                    </button>
              );
          }}
        />
    );
};
