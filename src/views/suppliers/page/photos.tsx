import React from 'react';
import {
    //    Link,
    Route,
    Switch,
    useRouteMatch,
} from 'react-router-dom';

interface IProps {
    photos: string[];
}

export const Photos = ({ photos }: IProps) => {
    const { path } = useRouteMatch();
    return (
        <section>
            {photos.length === 0
                ? (
                    <section className='supplier__imagesLoader'>
                        <h5> No images uploaded yet. </h5>
                    </section>
                )
                : photos.map((item) => (
                    <section className='supplier__imagesContainer'>
                        <img src={item} alt='' className='supplier__supplierImage' />
                    </section>
                ))}
            <span>
                <Switch>
                    <Route exact path={`/${path}/photos`} component={Photos} />
                </Switch>
            </span>
        </section>
    );
};
