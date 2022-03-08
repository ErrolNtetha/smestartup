import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { RootState } from 'store';
// import { useSelector } from 'react-redux';
import { Home } from '../containers/home';
import { NotFound } from '../containers/notFound';
import { About } from '../containers/about';
import { Contact } from '../containers/contact';
import { Profile } from '../containers/profile';
import { Login } from '../containers/login';
import { Register } from '../containers/register';
import { Feed } from '../containers/feed';
import { Private } from './privateRoute';

export const Main: React.FC = () => {
    // const isAuth = useSelector((state: RootState) => state.isLogged);
    const isAuth = true;
    console.log(isAuth);

    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/profile' exact component={Profile} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <Private exact isAuth={isAuth} path='/feed' component={Feed} />

                <Route path='/' component={NotFound} />
            </Switch>
        </Router>
    );
};