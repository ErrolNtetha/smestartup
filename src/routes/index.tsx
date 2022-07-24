import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RootState } from 'store';
import { useSelector } from 'react-redux';
import { FAQ } from 'containers/faq';
import { Post } from 'views/feed/post';
// import { Wrapper } from 'containers';
import { Home } from '../containers/home';
import { NotFound } from '../containers/notFound';
import { About } from '../containers/about';
import { Contact } from '../containers/contact';
// import { Header } from '../views/header';
import { Profile } from '../containers/profile';
import { Login } from '../containers/login';
import { Register } from '../containers/register';
import { Suppliers } from '../containers/suppliers';
import { Feed } from '../containers/feed';
import { Private } from './privateRoute';

export const Main: React.FC = () => {
    const isAuth = useSelector((state: RootState) => state.isLogged);

    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/profile' exact component={Profile} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <Route exact path='/feed/p/:id' component={Post} />
                <Route exact path='/suppliers' component={Suppliers} />
                <Route path='/faq' exact component={FAQ} />

                <Private exact isAuth={isAuth} path='/feed' component={Feed} />
                <Private exact isAuth={isAuth} path='/feed/post/:id' component={Post} />

                <Route path='/' component={NotFound} />
            </Switch>
        </Router>
    );
};
