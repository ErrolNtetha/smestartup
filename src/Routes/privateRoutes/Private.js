import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../components/Home';
import Header from '../../components/Header';
import Profile from '../../components/Pages/Profile';

export default function Private() {
    return (
        <>
            <Header />
            <Switch>
                <Route path='/feed' component={Home} />
                <Route path='/profile' component={Profile} />
            </Switch>
        </>
    )
}
