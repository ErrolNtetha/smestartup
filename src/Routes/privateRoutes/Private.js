import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Feed from '../../components/Feed';
import Header from '../../components/Header';
import Profile from '../../components/Pages/Profile';

export default function Private() {
    return (
        <>
            <Switch>
                <Route path='/feed' component={Feed} />
                <Route path='/profile' component={Profile} />
            </Switch>
        </>
    )
}
