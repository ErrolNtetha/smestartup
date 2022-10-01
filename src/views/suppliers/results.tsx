/* eslint-disable no-nested-ternary */

import React from 'react';
import { useFetchData } from 'hoc/useFetchData';
import { Button } from 'components/button';
import { Supplier } from './supplier';
import { SkeletonLoading } from './skeletonLoading';

export const Results = () => {
    const { data, error, loading } = useFetchData('/suppliers');
    return (
        <>
            { loading
                ? <SkeletonLoading cards={6} numCount={5} />
                : error
                ? (
                    <section className='supplier__responseContainer'>
                        <p>There was a problem with our severs. Please try again later.</p>
                        <Button className='supplier__retryButton'> Retry </Button>
                    </section>
                )
                : (
                    <section className='supplier__supplierResults'>
                        { data?.suppliers?.map(({
                            name,
                            about,
                            _id,
                            avatar
                        }) => (
                        <Supplier
                          name={name}
                          description='Manufacturers'
                          about={about}
                          id={_id}
                          avatar={avatar}
                        />
                    ))}
                    </section>
                    )}
        {/* <Supplier
          name='Grill Centric Co.'
          description='Durban, South Africa'
          about='We deliver the best and new equipments to the most business. Our products are tested and trusted by millions of business around the country.'
          id='fdljk3243jk'
        /> */}
        </>
    );
};
