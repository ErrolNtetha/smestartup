/* eslint-disable new-cap */
/* eslint-disable prefer-destructuring */
import React from 'react';
import dots from 'assets/veges.jpg';
// import format from 'date-fns/format';
import { FiCalendar, FiHardDrive, FiSettings } from 'react-icons/fi';
import { format } from 'date-fns';
// import { format } from 'date-fns';
import {
    Link,
    Route,
    Switch,
    useRouteMatch,
} from 'react-router-dom';
import { BusinessAvatar } from 'components/avatar/business';
import { Photos } from './photos';
import { Reviews } from './reviews';
import { Overview } from './overview';
import { Map } from '../map';

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
    isOwner: boolean;
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
    quotation,
    isOwner
}: DProps) => {
    const { path, url } = useRouteMatch();
    const pathname = window.location.pathname;
    return (
        <section className='supplier__supplierWrapper'>
            <section className='container'>
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
                <span style={{ margin: '0', padding: '0' }}>
                    <Link to={`${url}`} className={pathname === `${url}` ? 'active' : ''}> Overview </Link>
                    <Link to={`${url}/photos`} className={pathname === `${url}/photos` ? 'active' : ''}> Photos {`(${photos?.length})`} </Link>
                    <Link to={`${url}/reviews`} className={pathname === `${url}/reviews` ? 'active' : ''}> Reviews </Link>
                </span>
            </section>
            <section className='supplier__innerSupplierContainer'>
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
                <Route exact path={`${path}/photos`}>
                    <Photos photos={photos} />
                </Route>
                <Route exact path={`${path}/reviews`} component={Reviews} />
            </Switch>
            <section className='supplier__mapContainer'>
                <Map />
            </section>
            </section>
            {isOwner
                && (
                <section className='supplier__editButtonContainer'>
                    <span className='supplier__edit'>
                        <Link to={`${url}/update`}> <FiSettings /> <span> Edit Profile </span> </Link>
                    </span>
                </section>
            )}
            </section>
        </section>
    );
};
