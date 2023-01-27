/* eslint-disable jsx-a11y/interactive-supports-focus */

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
    FiHome,
    FiX
} from 'react-icons/fi';
import { Results } from './results';
import { Filter } from './filter';

export const BottomNav = () => {
    const [show, setShow] = React.useState(false);
    const { path, url } = useRouteMatch();
    const history = useHistory();

    const handleToggle = () => setShow(!show);

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
                    <span onClick={() => handleToggle()} onKeyDown={() => handleToggle()} role='button'>
                        <FiSliders className='supplier__icon' />
                        <p> Filter </p>
                    </span>
                    <Link to={`${url}/m/saved`}>
                        <FiHeart className='supplier__icon' />
                        <p> Saved </p>
                    </Link>
                </span>
            </section>
            {show
                && (
                    <section className='supplier__filterToggle'>
                        <span className='supplier__filterClose' onClick={() => setShow(false)} onKeyDown={() => setShow(false)} role='button'>
                            <FiX />
                        </span>
                        <Filter />
                    </section>
                )}
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
