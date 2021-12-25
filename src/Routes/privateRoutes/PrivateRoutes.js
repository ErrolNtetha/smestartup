import React, { useReducer } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

export default function PrivateRoutes({isAuth, component: Component, ...rest}) {
    const {hash, pathname} = useLocation();
    console.log(pathname, {state: { from: useLocation}});

    return (
        <Route {...rest} render={() => {
            return rest.loggedIn ? <Component /> : <Redirect to='/login' />
        }
    }   
         />
    )
}
