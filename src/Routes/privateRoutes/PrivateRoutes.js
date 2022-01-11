import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoutes({isAuth, component: Component, ...rest}) {
    return (
        <Route {...rest} render={() => {
            return rest.loggedIn ? <Component /> : <Redirect to='/login' />
        }
    }   
         />
    )
}
