import React from 'react';
import {
    Route,
    Switch,
    Link,
    useRouteMatch,
    BrowserRouter
} from 'react-router-dom';
import { UserPosts } from './post';
// import { getDistance } from 'helpers/formatDistance';
import { Starred } from './starred';

interface Props {
    postsNumber: number;
}

export const Tabs = ({ postsNumber }: Props) => {
    const { path, url } = useRouteMatch();

    return (
        <section className='profile__wrapper'>
            <section className='profile__tabsContainer'>
                <Link to={`${url}/posts`} className='profile__tabPosts'> Posts <span> ({postsNumber}) </span> </Link> |
                <Link to={`${url}/starred`} className='profile__tabStarred'> Starred </Link>
            </section>
        <BrowserRouter>
            <Switch>
                <Route path={`${path}/posts`} component={UserPosts} />
                <Route path={`${path}/starred`} component={Starred} />
            </Switch>
        </BrowserRouter>
        </section>
    );
};
