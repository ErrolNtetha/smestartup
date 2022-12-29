/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import { useFetchData } from 'hoc/useFetchData';
import { Profiles } from './profiles';

export const Create = () => {
    const { data, errorMessage, loading } = useFetchData('/suppliers/my');
    return (
        <section className='supplier__createContainer'>
            <span style={{ width: '100%' }}>
                <h5 style={{ textAlign: 'center', padding: '0', margin: '.6em 0' }}> Supplier Profiles </h5>
                <hr className='global' />
                <section className='supplier__supplierListContainer'>
                    {loading
                        ? <div> Loading... </div>
                        : errorMessage
                        ? 'There was an error.'
                        : data?.suppliers?.map((item: any) => {
                            if (item.length === 0) {
                                return (
                                    <section style={{ textAlign: 'center' }}>
                                        You have no profiles. Click &apos;REGISTER&apos; below to create it.
                                    </section>
                                );
                            }
                            return (
                                <Profiles
                                  key={item._id}
                                  id={item._id}
                                  supplierName={item.name}
                                  supplierPicture={item.avatar}
                                  isActive={item.approved}
                                />
                            );
                        })}
                </section>
                <span className='supplier__supplierProfiles'>
                    <Link to='/suppliers/payments' className='supplier__create'> register </Link>
                </span>
            </span>
        </section>
    );
};
