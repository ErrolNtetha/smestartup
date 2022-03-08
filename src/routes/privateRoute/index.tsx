/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
    isAuth: boolean;
}

export const Private = ({ isAuth, ...rest }: Props) => {
    if (isAuth) {
        return <Route {...rest} />;
    }
    return <Redirect to='/login' />;
};
