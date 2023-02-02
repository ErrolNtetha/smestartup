/* eslint-disable no-nested-ternary */

import { Logo } from 'components/header/logo';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from 'views/header';
import { axiosPrivate } from 'config/axiosInstance';
import { Plan } from './plans';
import { Premium, Pro, Starter } from './offers';
import { PayFast } from '../../payfast';

export const ChoosePlan = () => {
    const [plan, setSelectedPlan] = React.useState('');
    const history = useHistory();

    const PRICES = {
        STARTER: 0,
        PRO: 99,
        PREMIUM: 199
    };

    const selectPlan = (e: React.ChangeEvent<HTMLInputElement>) => setSelectedPlan(e.target.value);

    const handlePayment = async () => {
        const planDetails = {
            planType: plan,
            planPrice: plan === 'starter'
                ? PRICES.STARTER
                : plan === 'pro'
                ? PRICES.PRO
                : plan === 'premium'
                ? PRICES.PREMIUM
                : null
        };

        if (planDetails.planType === 'starter') {
            console.log(planDetails);
            const response = await axiosPrivate.post('/payments', planDetails);
            try {
                console.log(response);
                if (response.status === 200) {
                    console.log('It worked!');
                    history.push('/suppliers/register');
                }
            } catch (error) {
                console.error(error);
            }
        }
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
                    <Pro price={PRICES.PRO} />
                </Plan>
                <Plan
                  value='premium'
                  id='plan2'
                  htmlFor='plan2'
                  planType='Premium'
                  selectPlan={selectPlan}
                >
                    <Premium price={PRICES.PREMIUM} />
                </Plan>

                {!plan
                    ? <button type='button' disabled> Choose Package </button>
                    : plan === 'starter'
                    ? <button type='button' onClick={handlePayment}> Continue with Starter (Free) </button>
                    : plan === 'pro'
                    ? (
                        <PayFast
                          buttonText={`Pay Now (R${PRICES.PRO})`}
                          confirmationEmail='mphumier@outlook.com'
                          firstName='Mphumeleli Errol'
                          lastName='Ntetha'
                          email='mphumier@outlook.com'
                          itemName='Pro Supplier Profile'
                          amount={PRICES.PRO}
                          cancelUrl='http://localhost:3000/suppliers/payments'
                        />
                        )
                    : (
                        <PayFast
                          buttonText={`Pay Now (R${PRICES.PREMIUM})`}
                          confirmationEmail='mphumier@outlook.com'
                          firstName='Mphumeleli Errol'
                          lastName='Ntetha'
                          email='mphumier@outlook.com'
                          itemName='Premium Supplier Profile'
                          amount={PRICES.PREMIUM}
                          cancelUrl='http://localhost:3000/suppliers/payments'
                        />
                    )}
            </section>
        </>
    );
};
