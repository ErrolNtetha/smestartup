import { Avatar } from 'components/avatar';
// import { Tooltip } from 'components/tooltip';
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface Props {
    id: string;
}

export const Create = ({ id }: Props) => {
    return (
        <section className='supplier__createContainer'>
            <span>
                <h5 style={{ textAlign: 'center', padding: '0', margin: '.6em 0' }}> Supplier Profiles </h5>
                <hr className='global' />
                <section className='supplier__supplierListContainer'>
                    <Link to={`/suppliers/${id}/update`} className='supplier__supplierPreContainer'>
                        <section>
                            <Avatar avatar='' className='supplier__supplierPicture' />
                            <span>Coffee Breweries</span>
                        </section>
                        <FiChevronRight />
                    </Link>
                </section>
                <span className='supplier__supplierProfiles'>
                    <p> If you want to register another supplier profile, you will have to become a premium member to create another supplier profile. </p>
                    <Link to='/suppliers/register' className='supplier__create'> register </Link>
                </span>
            </span>
        </section>
    );
};
