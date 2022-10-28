import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../../components/button';

export const Updated = () => {
    const history = useHistory();
    return (
        <section className='supplier__updateContainer'>
            <h4> Update </h4>
            <hr className='global' />
            <section className='supplier__updateMessage'>
                Your supplier profile have been successfully updated.
            </section>
            <section className='supplier__updatedBtnContainer'>
                <Button onClick={() => history.goBack()} className='supplier__btnOkay'> Okay </Button>
            </section>
        </section>
    );
};
