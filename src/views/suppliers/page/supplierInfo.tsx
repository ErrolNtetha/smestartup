/* eslint-disable new-cap */
import React from 'react';
import dots from 'assets/veges.jpg';
// import format from 'date-fns/format';
import { FiCalendar, FiHardDrive, FiUser } from 'react-icons/fi';
import { format } from 'date-fns';
import { Tooltip } from 'components/tooltip';
// import { format } from 'date-fns';
import {
    Link,
    Route,
    Switch,
    useRouteMatch,
    BrowserRouter
} from 'react-router-dom';
import { Collapsable } from 'components/collapsable';

interface DProps {
    name: string;
    photos: string[];
    about: string;
    isRegistered: boolean;
    author: {
        name: {
            firstName: string;
            lastName: string;
        }
        avatar: string;
        _id: string;
        occupation: string;
    }
    established: number;
    companyType: string;
    category: string;
    createdAt: Date | string;
    description: string;
}

export const SupplierInfo = ({
    name,
    photos,
    about,
    isRegistered,
    author,
    established,
    companyType,
    category,
    createdAt,
    description
}: DProps) => {
    const { path, url } = useRouteMatch();
    const message = 'MOQ stands for Minimum Order Quantity. This suppliers requires that you order a specified minimum quantity.';
    return (
        <main>
            <section className='supplier__coverContainer'>
                <img src={dots} alt='dfd' className='supplier__cover' />
                <section className='supplier__supplierIntroText'>
                    <span className='supplier__text'>
                        <h1> {name} </h1>
                        <p> <FiHardDrive /> Category: {category} </p>
                        <p> <FiCalendar /> Published: {`${format(new Date(createdAt), 'd MMMM yyy')}`} </p>
                        <p> <FiUser /> Created by: <a href={`users/${author?._id}`} className='supplier__authorLink'> Mphumeleli Errol Ntetha </a> </p>
                        <hr className='global' style={{ margin: '.3em 0' }} />
                        <p className='supllier__aboutIntro'>{about}</p>
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
                    <Collapsable end={300} className='supplier__description'>
                        {description}
                    </Collapsable>
            </article>
            <hr className='global' />
            <section className='supplier__listContainer'>
                <ul className='supplier__lists'>
                    <li>
                        <span> Type </span>
                        <span> {companyType} </span>
                    </li>
                    <li>
                        <span> Established </span>
                        <span> {established} </span>
                    </li>
                    <li>
                        <span> MOQ <Tooltip message={message} className='$1' /> </span>
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
                        <span> {isRegistered ? 'Yes' : 'No'} </span>
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
