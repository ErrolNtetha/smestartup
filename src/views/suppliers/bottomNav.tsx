import React from 'react';
import {
    Link,
    Route,
    Switch,
    useHistory,
    useRouteMatch
} from 'react-router-dom';
import {
    FiHeart,
    FiList,
    FiPlusCircle,
    FiSliders,
    FiHome
} from 'react-icons/fi';
import { Results } from './results';

export const BottomNav = () => {
    const { path, url } = useRouteMatch();
    const history = useHistory();
    return (
        <>
            <section className='supplier__filterIconGroup'>
                <span className='supplier__bottomNav'>
                    <Link to={`${url}`}>
                        <FiHome className='supplier__icon' />
                        <p> Home </p>
                    </Link>
                    <Link to={`${url}/m/profiles`}>
                        <FiList className='supplier__icon' />
                        <p> Profiles </p>
                    </Link>
                    <span>
                        <FiPlusCircle className='supplier__icon supplier__plus' onClick={() => history.push('/suppliers/register')} />
                    </span>
                    <span>
                        <FiSliders className='supplier__icon' />
                        <p> Filter </p>
                    </span>
                    <Link to={`${url}/m/saved`}>
                        <FiHeart className='supplier__icon' />
                        <p> Saved </p>
                    </Link>
                </span>
            </section>
            <Switch>
                <Route exact path={`${path}`} component={Results} />
                <Route path={`${path}/m/profiles`}>
                    Supplier profiles
                </Route>
                <Route path={`${path}/m/saved`}>
                    Saved profiles
                </Route>
            </Switch>
        </>
    );
};
