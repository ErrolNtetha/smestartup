import { BusinessAvatar } from 'components/avatar/business';
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface Props {
    id: string;
    supplierName: string;
    supplierPicture: string;
    isActive: boolean;
}

export const Profiles = ({
    id,
    supplierName,
    supplierPicture,
    isActive
}: Props) => {
    return (
        <Link to={`/suppliers/${id}/update`} className='supplier__supplierPreContainer'>
            <section>
                <BusinessAvatar avatar={supplierPicture} className='supplier__supplierPicture' />
                <span>
                    <p>{supplierName}</p>
                    <p style={{ color: isActive ? 'green' : 'red' }}>
                        {isActive ? 'Active' : 'Inactive'}
                    </p>
                </span>
            </section>
            <FiChevronRight />
        </Link>
    );
};
