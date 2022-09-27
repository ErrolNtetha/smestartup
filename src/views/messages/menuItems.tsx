import React from 'react';
import {
    Link,
    Route,
    Switch,
} from 'react-router-dom';
import { MessagesContainer } from '.';

export const MenuItems = () => {
    // const { path, url } = useRouteMatch();
    return (
        <section>
            <Link to='/message'> Inbox </Link>
            <Link to='/queries'> Queries </Link>
            <Link to='/requests'> Requests </Link>

            <Switch>
                <Route exact path='/messages' component={MessagesContainer} />
            </Switch>
        </section>
    );
};
