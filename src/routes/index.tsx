import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../containers/home';
import { Header } from '../views/header';
import { Footer } from '../views/footer';

export const Main: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/header' component={Header} />
                <Route path='/about' component={Footer} />
            </Switch>
        </Router>
    );
};