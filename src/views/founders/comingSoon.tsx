import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

export const ComingSoon = () => {
    return (
        <section className='founder__comingSoon container'>
            <FiAlertTriangle className='founder__alert' />
            <h1>Coming Soon</h1>
            <p> The page is currently under mantainance. <br /> We will announce when it is up and running. </p>
        </section>
    );
};
