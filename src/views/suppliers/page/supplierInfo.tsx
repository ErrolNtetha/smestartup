/* eslint-disable new-cap */
import React from 'react';
import dots from 'assets/veges.jpg';
// import format from 'date-fns/format';
import { FiCalendar, FiHardDrive } from 'react-icons/fi';
import { format } from 'date-fns';
// import { format } from 'date-fns';
import {
    Link,
    Route,
    Switch,
    useRouteMatch,
} from 'react-router-dom';
// import { Collapsable } from 'components/collapsable';
import { BusinessAvatar } from 'components/avatar/business';
import { Photos } from './photos';
import { Reviews } from './reviews';
import { Overview } from './overview';

export interface DProps {
    name: string;
    photos: string[];
    isRegistered: boolean;
    established: number;
    companyType: string;
    sector: string;
    createdAt: Date | string;
    description: string;
    avatar: string;
    beeLevel: string;
    moqNumber: number;
    quotation: string;
}

export const SupplierInfo = ({
    name,
    photos,
    sector,
    createdAt,
    avatar,
    description,
    companyType,
    established,
    isRegistered,
    beeLevel,
    moqNumber,
    quotation
}: DProps) => {
    const { path, url } = useRouteMatch();
    return (
        <>
            <section className='supplier__coverContainer'>
                <img src={dots} alt={`${name} avatar`} className='supplier__cover' />
                <section className='supplier__supplierIntroText'>
                    <span className='supplier__textContainer'>
                        <BusinessAvatar avatar={avatar} className='supplier__infoAvatar' />
                        <span className='supplier__text'>
                            <h1> {name} </h1>
                            <p> <FiHardDrive /> Sector: {sector} </p>
                            <p> <FiCalendar /> Published: {`${format(new Date(createdAt), 'd MMMM yyy')}`} </p>
                            {/* <p> <FiUser /> Created by: <a href={`users/${author?._id}`} className='supplier__authorLink'> Mphumeleli Errol Ntetha </a> </p> */}
                        </span>
                        <hr className='global' style={{ margin: '.3em 0' }} />
                    </span>
                </section>
            </section>
            <section className='supplier__navigationContainer'>
                <span>
                    <Link to={`${url}`}> Overview </Link>
                    <Link to={`${url}/photos`}> Photos {`(${photos?.length})`} </Link>
                    <Link to={`${url}/reviews`}> Reviews </Link>
                </span>
            </section>
            <Switch>
                <Route exact path={`${path}`}>
                    <Overview
                      isRegistered={isRegistered}
                      established={established}
                      companyType={companyType}
                      description={description}
                      beeLevel={beeLevel}
                      moqNumber={moqNumber}
                      quotation={quotation}
                    />
                </Route>
                <Route exact path={`${path}/photos`} component={Photos} />
                <Route exact path={`${path}/reviews`} component={Reviews} />
            </Switch>
        </>
    );
};
