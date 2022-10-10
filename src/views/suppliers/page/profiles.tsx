import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Avatar } from '../../../components/avatar';

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
                <Avatar avatar={supplierPicture} className='supplier__supplierPicture' />
                <span>
                    <p>{supplierName}</p>
                    <p>{isActive}</p>
                    <p>Active</p>
                </span>
            </section>
            <FiChevronRight />
        </Link>
    );
};
