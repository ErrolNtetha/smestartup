import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import {
    Route,
    Switch,
    Link,
    useRouteMatch
} from 'react-router-dom';
import { Starred } from './starred';
import { useFetchPosts } from '../../hoc/useFetchPosts';

export const Post = () => {
    const posts = useFetchPosts();
    const { path, url } = useRouteMatch();
    console.log(posts);

    return (
        <section className='profile__wrapper'>
            <section className='profile__tabsContainer'>
                <Link to={`${url}/posts`} className='profile__tabPosts'> Posts  <span> ({posts.length}) </span> </Link> |
                <Link to={`${url}/starred`} className='profile__tabStarred'> Starred </Link> |
                <Link to={`${url}/starred`} className='profile__tabStarred'> Starred </Link>
            </section>
            <section className='profile__postsContainer'>
                {posts.length ? posts.map(({ post }) => (
                <section className='profile__post'>
                    <span className='profile__titleContainer'>
                        <section className='profile__titleChild'>
                            <p>avatar </p>
                            <span style={{ paddingLeft: '.8em' }}>
                                <h4 className='profile__fullNames'> Mphumeleli </h4>
                                <p className='profile__timeAgo'> time </p>
                            </span>
                        </section>
                        <FiMoreHorizontal />
                    </span>
                    {post}
                </section>
            )) : 'You have not created any post yet.'}
            </section>

            <Switch>
                <Route path={`${path}/posts`} component={Starred} />
                <Route path={`${path}/starred`} component={Starred} />
            </Switch>
        </section>
    );
};
