import { Logo } from 'components/header/logo';
import React from 'react';
import { Header } from 'views/header';
import { Nav } from 'components/header/nav';
import { Plan } from './plans';
import { Premium, Pro, Starter } from './offers';

export const ChoosePlan = () => {
    return (
        <>
            <Header>
                <Logo />
                <Nav />
            </Header>
            <section className='supplier__plans'>
                <Plan id='plan' htmlFor='plan' planType='Starter'>
                    <Starter />
                </Plan>
                <Plan id='plan1' htmlFor='plan1' planType='Pro'>
                    <Pro />
                </Plan>
                <Plan id='plan2' htmlFor='plan2' planType='Premium'>
                    <Premium />
                </Plan>
                <button type='button'> Proceed to Checkout </button>
            </section>
        </>
    );
};
