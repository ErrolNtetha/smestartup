import React from 'react';
import { Tooltip } from 'components/tooltip';
import { Map } from './map';

interface Props {
    about: string;
    established: number;
    email: string;
    website: string;
}

export const Preview = ({
    about,
    established,
    email,
    website
}: Props) => {
    return (
        <section className='supplier__previewContainer'>
            <p className='supplier__information'> Information </p>
            <hr className='global' />
            <div className='supplier__map'>
                <Map />
            </div>
            <hr className='global' />
            <section className='supplier__details'>
                <section>
                    <p style={{ textAlign: 'left', fontWeight: 'bold' }}>About</p>
                    <p> {about} </p>
                </section>
                <section className='supplier__informationList'>
                    <span> Established <p>{established}</p> </span>
                    <span> Website <a href={website} rel='noreferrer' target='_blank'>{website}</a> </span>
                    <span> Telephone <p>0312345678</p> </span>
                    <span> Email <p>{email}</p> </span>
                    <span> Sector <p>Construction</p> </span>
                    <span>
                        <p> Returns </p> <Tooltip message='Protection Policy protects buyers from fraud that might be caused by third parties. Suppliers might offer this policy to its custormers to protect them.' />
                        <p>Yes</p>
                    </span>
                    <span>
                        <p> International </p>
                        <p>Yes</p>
                    </span>
                    <span>
                        <p> Quotation </p>
                        <p>Yes</p>
                    </span>
                </section>
            </section>
        </section>
    );
};
