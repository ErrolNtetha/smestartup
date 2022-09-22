import React from 'react';
import { Create } from 'views/suppliers/page/create';
import { Filter } from './filter';
import { Results } from './results';
// import { Preview } from './preview';

export const SupplierContainer = () => {
    return (
        <section className='supplier__container'>
            <section className='supplier__leftColumn'>
                <Filter />
                <Create id='b4fhn453bjb6k6J6w' />
            </section>
            <Results />
            <section className='supplier__rightColumn' />
        </section>
    );
};
