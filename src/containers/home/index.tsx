import React from 'react';
import { Header } from '../../views/header';
import { Footer } from '../../views/footer';

export const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Footer name='Hey' />
        </>
    );
};