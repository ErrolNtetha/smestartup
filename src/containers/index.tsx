import React from 'react';
import { Contact } from '../containers/contact';
import { Header } from '../views/header';
// import { Home } from '../containers/home';

export const Wrapper = () => {
    return (
        <>
            <Header />
            <span>
                <Contact />
            </span>
        </>
    );
};
