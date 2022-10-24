import { Button } from 'components/button';
import React from 'react';
import { Header } from 'views/header';

export const AddSupplier = () => {
    return (
        <section className='supplier__addSupplierContainer'>
            <Header>
                <Button>Back</Button>
            </Header>
            Choose Account
            <form action='https://www.payfast.co.za/eng/process' method='post'>
                <input type='hidden' name='merchant_id' value={process.env.REACT_APP_MERCHANT_ID} />
                <input type='hidden' name='merchant_key' value={process.env.REACT_APP_MERCHANT_KEY} />
                <input type='hidden' name='cancel_url' value='http://localhost:3000/suppliers/register' />
                <input type='hidden' name='amount' value='49.99' />
                <input type='hidden' name='item_description' value='A product for testing purposes.' />
                <input type='hidden' name='name_first' value='Mphumeleli Errol' />
                <input type='hidden' name='name_last' value='Ntetha' />
                <input type='hidden' name='email_address' value='mphumier@outlook.com' />
                <input type='hidden' name='item_name' value='Supplier Once-off Payment' />
                <input type='hidden' name='email_confirmation' value='1' />
                <input type='hidden' name='confirmation_email' value='mphumier@outlook.com' />
                <input type='hidden' name='payment_method' value='cc' />
                <Button type='submit' className='supplier__payNow'> Pay Now </Button>
            </form>
        </section>
    );
};
