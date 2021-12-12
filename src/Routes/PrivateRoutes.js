import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

export default function PrivateRoutes({isAuth, component: Component, ...rest}) {
    const location = useLocation();
    console.log(location);

    return (
        <Route {...rest} render={() => {
            return isAuth ? <Component /> : <Redirect to='/login' />
        }
    }   
         />
    )
}
