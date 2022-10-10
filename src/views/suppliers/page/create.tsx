// import { Avatar } from 'components/avatar';
// import { Tooltip } from 'components/tooltip';
import React from 'react';
// import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
// import { MapProfiles } from './mapProfiles';
import { useFetchData } from 'hoc/useFetchData';
import { Profiles } from './profiles';

export const Create = () => {
    const { data, loading } = useFetchData('/suppliers/my');
    console.log(data, loading);
    return (
        <section className='supplier__createContainer'>
            <span>
                <h5 style={{ textAlign: 'center', padding: '0', margin: '.6em 0' }}> Supplier Profiles </h5>
                <hr className='global' />
                <section className='supplier__supplierListContainer'>
                    {loading
                        ? <div> Loading </div>
                        : data.suppliers.map((item: any) => (
                            <Profiles
                              key={item._id}
                              id={item._id}
                              supplierName={item.name}
                              supplierPicture={item.avatar}
                              isActive={item.isRegistered}
                            />
                    ))}
                </section>
                <span className='supplier__supplierProfiles'>
                    <p>  </p>
                    <Link to='/suppliers/register' className='supplier__create'> register </Link>
                </span>
            </span>
        </section>
    );
};
