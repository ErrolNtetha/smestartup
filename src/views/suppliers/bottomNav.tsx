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
    console.log(url, path);
    const history = useHistory();
    return (
        <>
            <section className='supplier__filterIconGroup'>
                <span className='supplier__bottomNav'>
                    <Link to={`${url}`}>
                        <FiHome className='supplier__icon' />
                        <p> Home </p>
                    </Link>
                    <Link to={`${url}/profiles`}>
                        <FiList className='supplier__icon' />
                        <p> Profiles </p>
                    </Link>
                    <span>
                        <FiPlusCircle className='supplier__icon' onClick={() => history.push('/suppliers/register')} />
                        <p> Add </p>
                    </span>
                    <span>
                        <FiSliders className='supplier__icon' />
                        <p> Filter </p>
                    </span>
                    <Link to={`${url}/saved`}>
                        <FiHeart className='supplier__icon' />
                        <p> Saved </p>
                    </Link>
                </span>
            </section>
            <Switch>
                <Route exact path={`${path}`} component={Results} />
                <Route exact path={`${path}/profiles`}>
                    Profiles
                </Route>
                <Route exact path={`${path}/saved`}>
                    Saved profiles
                </Route>
            </Switch>
        </>
    );
};
