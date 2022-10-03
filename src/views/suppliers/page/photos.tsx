import React from 'react';
import {
    //    Link,
    Route,
    Switch,
    useRouteMatch,
} from 'react-router-dom';

export const Photos = () => {
    const { path } = useRouteMatch();
    console.log('these are your photos');
    return (
        <section>
            this are supplier photos
            <span>
                <Switch>
                    <Route exact path={`/${path}/photos`} component={Photos} />
                </Switch>
            </span>
        </section>
    );
};
