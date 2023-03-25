import React from 'react';
import { FiCheck } from 'react-icons/fi';

interface Price {
    price: number;
}

export const Free = () => {
    return (
        <section className='supplier__planInfo'>
            <section style={{ width: '100%' }}>
                <hr className='global' />
                <span className='supplier__planTitle'>
                    <p>Free</p>
                    <p className='supplier__billingInterval'> Forever </p>
                </span>
                <hr className='global' />
                <section className='supplier__offerDetails'>
                    <p style={{ margin: '0', paddingBottom: '4px' }}> What you get: </p>
                    <ul>
                        <li>
                            <FiCheck /> Basic contacts
                        </li>
                        <li>
                            <FiCheck /> Upload 1 image
                        </li>
                    </ul>
                </section>
            </section>
        </section>
    );
};

export const Starter = ({ price }: Price) => {
    return (
        <section className='supplier__planInfo'>
            <section style={{ width: '100%' }}>
                <hr className='global' />
                <span className='supplier__planTitle'>
                    <p>R{price}</p>
                    <p className='supplier__billingInterval'> Monthly </p>
                </span>
                <hr className='global' />
                <section className='supplier__offerDetails'>
                    <p style={{ margin: '0', paddingBottom: '4px' }}> What you get: </p>
                    <ul>
                        <li>
                            <FiCheck /> Map View
                        </li>
                        <li>
                            <FiCheck /> Basic contacts
                        </li>
                        <li>
                            <FiCheck /> 1 branch
                        </li>
                        <li>
                            <FiCheck /> Up to 3 images
                        </li>
                        <li>
                            <FiCheck /> Email Support
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
                <hr className='global' />
                <span className='supplier__planTitle'>
                    <p>R{price}</p>
                    <p className='supplier__billingInterval'> Monthly </p>
                </span>
                <hr className='global' />
                <section className='supplier__offerDetails'>
                    <p style={{ margin: '0', paddingBottom: '4px' }}> What you get: </p>
                    <ul>
                        <li>
                            <FiCheck /> Map View
                        </li>
                        <li>
                            <FiCheck /> Additional contact info
                        </li>
                        <li>
                            <FiCheck /> Up to 3 branches
                        </li>
                        <li>
                            <FiCheck /> Social media links
                        </li>
                        <li>
                            <FiCheck /> Edit profile
                        </li>
                        <li>
                            <FiCheck /> Up to 3 tags
                        </li>
                        <li>
                            <FiCheck /> Claim verified badge
                        </li>
                        <li>
                            <FiCheck /> Email support
                        </li>
                        <li>
                            <FiCheck /> Up to 5 images
                        </li>
                        <li>
                            <FiCheck /> Featured listing
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
                <hr className='global' />
                <span className='supplier__planTitle'>
                    <p>R{price}</p>
                    <p className='supplier__billingInterval'> Monthly </p>
                </span>
                <hr className='global' />
                <section className='supplier__offerDetails'>
                    <p style={{ margin: '0', paddingBottom: '4px' }}> What you get: </p>
                    <ul>
                        <li>
                            <FiCheck /> Map View
                        </li>
                        <li>
                            <FiCheck /> Up to 10 tags
                        </li>
                        <li>
                            <FiCheck /> Edit profile
                        </li>
                        <li>
                            <FiCheck /> Up to 4 branches
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
                            <FiCheck /> Similar suggestion
                        </li>
                        <li>
                            <FiCheck /> Up to 10 images
                        </li>
                        <li>
                            <FiCheck /> Claim verified badge
                        </li>
                        <li>
                            <FiCheck /> Phone & Email support
                        </li>
                        <li>
                            <FiCheck /> Social media promotion
                        </li>

                    </ul>
                </section>
            </section>
        </section>
    );
};
