import React from 'react';
import dots from 'assets/veges.jpg';
// import format from 'date-fns/format';
import { FiCalendar, FiHardDrive, FiUser } from 'react-icons/fi';
// import { format } from 'date-fns';
import {
    Link,
    Route,
    Switch,
    useRouteMatch,
    BrowserRouter
} from 'react-router-dom';

interface DProps {
    name: string;
    photos: string[];
    about: string;
    isRegistered: boolean;
}

export const SupplierInfo = ({
    name,
    photos,
    about,
    isRegistered
}: DProps) => {
    const { path, url } = useRouteMatch();
    return (
        <main>
            <section className='supplier__coverContainer'>
                <img src={dots} alt='dfd' className='supplier__cover' />
                <section className='supplier__supplierIntroText'>
                    <span className='supplier__text'>
                        <h1> {name} </h1>
                        <p> <FiHardDrive /> Category: Wholesaler </p>
                        <p> <FiCalendar /> Published: 18 September 2022 </p>
                        <p> <FiUser /> Created by: Mphumeleli Errol Ntetha </p>
                    </span>
                </section>
            </section>
            <section className='supplier__navigationContainer'>
                <span>
                    <Link to={`${url}`}> Overview </Link>
                    <Link to={`${url}/photos`}> Photos {`(${photos.length})`} </Link>
                    <Link to={`${url}/reviews`}> Reviews </Link>
                </span>
            </section>
            <article className='supplier__infoContainer'>
                    <h4> description & info </h4>
                    <p> {about} </p>
            </article>
            <hr className='global' />
            <section className='supplier__listContainer'>
                <ul className='supplier__lists'>
                    <li>
                        <span> Type </span>
                        <span> Private </span>
                    </li>
                    <li>
                        <span> Minimum Units </span>
                        <span> 10 000 </span>
                    </li>
                    <li>
                        <span> BEE Compliance </span>
                        <span> Level 2 </span>
                    </li>
                    <li>
                        <span> Quotation </span>
                        <span> No </span>
                    </li>
                    <li>
                        <span> Registered </span>
                        <span> {isRegistered} </span>
                    </li>
                </ul>
            </section>
            <hr className='global' />

            <BrowserRouter>
            <Switch>
                <Route exact path={`${path}`} />
                <Route path={`${path}/photos`}>
                    <p> Photos </p>
                </Route>
                <Route path={`${path}/reviews`}>
                    <p> Reviews </p>
                </Route>
            </Switch>
            </BrowserRouter>
        </main>
    );
};
