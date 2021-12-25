import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../components/Home';

export default function Private() {
    return (
        <>
            <Switch>
                <Route path='/feed' component={Home} />
            </Switch>
        </>
    )
}
