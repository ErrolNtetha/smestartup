import { Button } from 'components/button';
import { useHistory } from 'react-router-dom';
import React from 'react';

export const Feedback = () => {
    const history = useHistory();
    return (
        <section className='supplier__feedback'>
            <section>
                <h4> Feedback </h4>
                <hr className='global' />
                <p> Thank you. Your profile has been successfully submitted and this process can take up to 3 days. Our team will be going through it to check if it meets our standards. </p>
                <p> Once we have approved your profile, you will receive an email. You can also check on here. </p>
            </section>
            <section>
                <Button className='supplier__feedbackConfirm' onClick={() => history.push('/suppliers')}> Okay </Button>
            </section>
        </section>
    );
};
