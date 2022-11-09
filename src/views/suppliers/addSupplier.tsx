import React from 'react';

interface Payfast {
    cancelUrl: string;
    amount: number;
    firstName: string;
    lastName: string;
    email: string;
    itemName: string;
    confirmationEmail: string;
}

export const PayFast = ({
    cancelUrl,
    amount,
    firstName,
    lastName,
    email,
    itemName,
    confirmationEmail
}: Payfast) => {
    return (
        <form action='https://www.payfast.co.za/eng/process' method='post'>
            <input type='hidden' name='merchant_id' value={process.env.REACT_APP_MERCHANT_ID} />
            <input type='hidden' name='merchant_key' value={process.env.REACT_APP_MERCHANT_KEY} />
            <input type='hidden' name='cancel_url' value={cancelUrl} />
            <input type='hidden' name='amount' value={amount} />
            <input type='hidden' name='name_first' value={firstName} />
            <input type='hidden' name='name_last' value={lastName} />
            <input type='hidden' name='email_address' value={email} />
            <input type='hidden' name='item_name' value={itemName} />
            <input type='hidden' name='email_confirmation' value='1' />
            <input type='hidden' name='confirmation_email' value={confirmationEmail} />
            <input type='hidden' name='payment_method' value='cc' />
            <button type='submit'> pay now </button>
        </form>
    );
};
