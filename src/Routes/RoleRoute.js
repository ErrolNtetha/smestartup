import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

export default function RoleRoute({role, isAuth, component: Component, rest}) {

    return (
        <Route
            {...rest}
            render={() => {
                return isAuth && role === 'investor' ? <Component /> : null;
            }}
        />
    )
}
