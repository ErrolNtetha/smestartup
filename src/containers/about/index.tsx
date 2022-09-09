import React from 'react';
import { Logo } from 'components/header/logo';
import { Header } from '../../views/header';
// import { RouteComponentProps } from 'react-router-dom';

// interface Props extends RouteComponentProps {}

export const About: React.FC = () => {
    return (
        <section>
            <Header>
                <Logo />
            </Header>
            <p> You are in about section </p>
        </section>
    );
};
