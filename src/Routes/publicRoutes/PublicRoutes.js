import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../../components/Pages/LandingPage';
import Login from '../../components/Pages/Login';
import About from '../../components/Pages/About';
import Signup from '../../components/Pages/Signup';

export default function PublicRoutes() {
    return (
        <>
            <Route path='/' exact component={LandingPage} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/about' component={About} />
        </>
    )
}
