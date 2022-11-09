/* eslint-disable no-nested-ternary */

import { Logo } from 'components/header/logo';
import React from 'react';
import { Header } from 'views/header';
// import { Nav } from 'components/header/nav';
import { Plan } from './plans';
import { Premium, Pro, Starter } from './offers';

export const ChoosePlan = () => {
    const [selectedPlan, setSelectedPlan] = React.useState('');

    const prices = {
        pro: 109,
        premium: 199
    };

    const selectPlan = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPlan(e.target.value);
    };

    const handlePayment = () => {
        const planDetails = {
            planType: selectedPlan,
            planPrice: prices.pro,
        };
        console.log(planDetails);
    };
    return (
        <>
            <Header>
                <Logo />
            </Header>
            <section className='supplier__plans'>
                <Plan
                  value='starter'
                  id='plan'
                  htmlFor='plan'
                  planType='Starter'
                  selectPlan={selectPlan}
                >
                    <Starter />
                </Plan>
                <Plan
                  value='pro'
                  id='plan1'
                  htmlFor='plan1'
                  planType='Pro'
                  selectPlan={selectPlan}
                >
                    <Pro price={prices.pro} />
                </Plan>
                <Plan
                  value='premium'
                  id='plan2'
                  htmlFor='plan2'
                  planType='Premium'
                  selectPlan={selectPlan}
                >
                    <Premium price={prices.premium} />
                </Plan>

                {!selectedPlan
                    ? <button type='button' disabled> Choose Package </button>
                    : selectedPlan === 'starter'
                    ? <button type='button' onClick={handlePayment}> Continue with Starter (Free) </button>
                    : selectedPlan === 'pro'
                    ? <button type='button' onClick={handlePayment}> Continue with Pro (R{prices.pro}/pm) </button>
                    : <button type='submit' onClick={handlePayment}> Continue with Premium (R{prices.premium}/pm) </button>}
            </section>
        </>
    );
};
