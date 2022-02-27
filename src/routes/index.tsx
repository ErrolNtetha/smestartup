import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../containers/home';
import { NotFound } from '../containers/notFound';
import { About } from '../containers/about';
import { Contact } from '../containers/contact';
import { Profile } from '../containers/profile';
import { Login } from '../containers/login';
import { Register } from '../containers/register';

export const Main: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/profile' exact component={Profile} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <Route path='/' component={NotFound} />
            </Switch>
        </Router>
    );
};