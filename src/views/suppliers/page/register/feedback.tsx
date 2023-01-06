import React from 'react';
import { Button } from 'components/button';
import { useHistory } from 'react-router-dom';

interface PropsMessage {
    message: string;
}

export const Feedback = ({ message }: PropsMessage) => {
    const history = useHistory();
    return (
        <section className='supplier__feedback'>
            <section>
                <h4> Feedback </h4>
                <hr className='global' />
                <p>
                    {message}
                </p>
            </section>
            <section>
                <Button className='supplier__feedbackConfirm' onClick={() => history.push('/suppliers')}> Okay </Button>
            </section>
        </section>
    );
};
