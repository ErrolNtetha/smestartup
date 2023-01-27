/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-useless-fragment */

import React from 'react';
import { useFetchData } from 'hoc/useFetchData';
import { useLocation } from 'react-router-dom';
import { OnError } from 'components/onError';
import { Supplier } from './supplier';
import { SkeletonLoading } from './skeletonLoading';

export const Results = () => {
    const { search } = useLocation();
    const url = `/suppliers${search || ''}`;
    const { data, errorMessage, loading } = useFetchData(url);

    return (
        <>
            { errorMessage
                ? <OnError errorMessage={errorMessage} className='supplier' />
                : loading
                ? (
                    <section className='supplier__skeletonContainer'>
                        <SkeletonLoading cards={6} numCount={5} />
                    </section>
                )
                : (
                    <section className='supplier__supplierResults'>
                        { data?.suppliers?.map((item: any) => {
                            if (item.length <= 0) {
                                <section> No listed suppliers found. </section>;
                            }
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
