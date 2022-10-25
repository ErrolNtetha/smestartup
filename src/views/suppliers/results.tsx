/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-useless-fragment */

import React from 'react';
import { useFetchData } from 'hoc/useFetchData';
import { Button } from 'components/button';
import { Supplier } from './supplier';
import { SkeletonLoading } from './skeletonLoading';

export const Results = () => {
    const { data, errorMessage, loading } = useFetchData('/suppliers');
    return (
        <>
            { loading
                ? (
                    <section className='supplier__skeletonContainer'>
                        <SkeletonLoading cards={6} numCount={5} />
                    </section>
                )
                : errorMessage
                ? (
                    <section className='supplier__responseContainer'>
                        <p>There was a problem with our severs. Please try again later.</p>
                        <Button className='supplier__retryButton' onClick={() => window.location.reload()}> Retry </Button>
                    </section>
                )
                : (
                    <section className='supplier__supplierResults'>
                        { data?.suppliers?.map((item: any) => {
                            if (item.length <= 0) return <section> No listed suppliers found. </section>;
                                return (
                                    <Supplier
                                      name={item.name}
                                      companyType={item.type}
                                      about={item.about}
                                      id={item._id}
                                      avatar={item.avatar}
                                      key={item._id}
                                    />
                                );
                            })}
                    </section>
                    )}
        </>
    );
};
