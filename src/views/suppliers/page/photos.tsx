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
            <section className='supplier__imagesLoader'>
                <h5> No images uploaded yet. </h5>
            </section>
            {/*
             <section className='supplier__imagesContainer'>
                <section className='supplier__supplierImage' />
                <section className='supplier__supplierImage' />
                <section className='supplier__supplierImage' />
                <section className='supplier__supplierImage' />
                <section className='supplier__supplierImage' />
                <section className='supplier__supplierImage' />
                <section className='supplier__supplierImage' />
            </section>
                */}
            <span>
                <Switch>
                    <Route exact path={`/${path}/photos`} component={Photos} />
                </Switch>
            </span>
        </section>
    );
};
