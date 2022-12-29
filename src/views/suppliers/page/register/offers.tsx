import React from 'react';
import { FiCheck } from 'react-icons/fi';

interface Price {
    price: number;
}

export const Starter = () => {
    return (
        <section className='supplier__planInfo'>
            <section style={{ width: '100%' }}>
                <span className='supplier__planTitle'>
                    Free
                </span>
                <hr className='global' />
                <section className='supplier__offerDetails'>
                    <p style={{ margin: '0', paddingBottom: '4px' }}> What you get: </p>
                    <ul>
                        <li>
                            <FiCheck /> Map
                        </li>
                        <li>
                            <FiCheck /> Up to 2 images
                        </li>
                    </ul>
                </section>
            </section>
        </section>
    );
};

export const Pro = ({ price }: Price) => {
    return (
        <section className='supplier__planInfo'>
            <section style={{ width: '100%' }}>
                <span className='supplier__planTitle'>
                    R{price}
                </span>
                <hr className='global' />
                <section className='supplier__offerDetails'>
                    <p style={{ margin: '0', paddingBottom: '4px' }}> What you get: </p>
                    <ul>
                        <li>
                            <FiCheck /> Map
                        </li>
                        <li>
                            <FiCheck /> Contact info
                        </li>
                        <li>
                            <FiCheck /> Social media links
                        </li>
                        <li>
                            <FiCheck /> Up to 3 tags
                        </li>
                        <li>
                            <FiCheck /> Email support
                        </li>
                        <li>
                            <FiCheck /> Up to 10 images
                        </li>
                    </ul>
                </section>
            </section>
        </section>
    );
};

export const Premium = ({ price }: Price) => {
    return (
        <section className='supplier__planInfo'>
            <section style={{ width: '100%' }}>
                <span className='supplier__planTitle'>
                    R{price}
                </span>
                <hr className='global' />
                <section className='supplier__offerDetails'>
                    <p style={{ margin: '0', paddingBottom: '4px' }}> What you get: </p>
                    <ul>
                        <li>
                            <FiCheck /> Location
                        </li>
                        <li>
                            <FiCheck /> Unlimited tags
                        </li>
                        <li>
                            <FiCheck /> Edit profile
                        </li>
                        <li>
                            <FiCheck /> Reply to reviews
                        </li>
                        <li>
                            <FiCheck /> Top of search result
                        </li>
                        <li>
                            <FiCheck /> Social media links
                        </li>
                        <li>
                            <FiCheck /> Brand identity support
                        </li>
                        <li>
                            <FiCheck /> Featured listing
                        </li>
                        <li>
                            <FiCheck /> Unlimited images
                        </li>
                        <li>
                            <FiCheck /> Claim verified badge
                        </li>
                        <li>
                            <FiCheck /> Phone & Email support
                        </li>

                    </ul>
                </section>
            </section>
        </section>
    );
};
