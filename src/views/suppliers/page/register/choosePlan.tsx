/* eslint-disable no-nested-ternary */

import { Logo } from 'components/header/logo';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from 'views/header';
import { axiosPrivate } from 'config/axiosInstance';
import { fetchSupplier } from 'store/actions/supplier';
import { fetchError } from 'store/actions/fetchProfile';
import { useDispatch } from 'react-redux';
import { Plan } from './plans';
import {
    Free,
    Premium,
    Pro,
    Starter
} from './offers';
import { PayFast } from '../../payfast';

export const ChoosePlan = () => {
    const [plan, setSelectedPlan] = React.useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const PRICES = {
        FREE: 0,
        STARTER: 59,
        PRO: 129,
        PREMIUM: 249
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

        if (planDetails.planType === 'basic') {
            dispatch(fetchSupplier(planDetails));
            history.push('/suppliers/register');

            try {
                const response = await axiosPrivate.post('api/v1/payments', planDetails);
                console.log(response);
                if (response.status === 201) {
                    console.log('It worked!');
                    history.push('/suppliers/register');
                }
            } catch (error) {
                fetchError('an error');
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
                  value='basic'
                  id='plan'
                  htmlFor='plan'
                  planType='Basic'
                  selectPlan={selectPlan}
                  selected={plan}
                >
                    <Free />
                </Plan>
                <Plan
                  value='starter'
                  id='plan0'
                  htmlFor='plan0'
                  planType='Starter'
                  selectPlan={selectPlan}
                  selected={plan}
                >
                    <Starter price={PRICES.STARTER} />
                </Plan>
                <Plan
                  value='pro'
                  id='plan1'
                  htmlFor='plan1'
                  planType='Pro'
                  selectPlan={selectPlan}
                  selected={plan}
                >
                    <Pro price={PRICES.PRO} />
                </Plan>
                <Plan
                  value='premium'
                  id='plan2'
                  htmlFor='plan2'
                  planType='Premium'
                  selectPlan={selectPlan}
                  selected={plan}
                >
                    <Premium price={PRICES.PREMIUM} />
                </Plan>

                {!plan
                    ? <button type='button' disabled> Choose Package </button>
                    : plan === 'basic'
                    ? <button type='button' onClick={handlePayment}> Continue with Basic (Free) </button>
                    : plan === 'starter'
                    ? (
                        <PayFast
                          plan='starter'
                          buttonText={`Pay Now (R${PRICES.STARTER})`}
                          confirmationEmail='mphumier@outlook.com'
                          firstName='Mphumeleli Errol'
                          lastName='Ntetha'
                          email='mphumier@outlook.com'
                          itemName='Starter Supplier Profile'
                          amount={PRICES.STARTER}
                          cancelUrl='http://localhost:3000/suppliers/payments'
                        />
                        )
                    : plan === 'pro'
                    ? (
                        <PayFast
                          plan='pro'
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
                          plan='premium'
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
