import React from 'react';
import { FiSearch } from 'react-icons/fi';

interface Props {
    placeholder: string;
    children: React.ReactNode;
    searchKey: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export const Search = ({ placeholder, children, searchKey }: Props) => {
    return (
        <section className='header__search'>
            <section className='header__searchWrapper'>
                <FiSearch className='header__searchIcon' />
                <input type='text' placeholder={placeholder} onChange={searchKey} className='header__searchBar' />
            </section>
            {children}
        </section>
    );
};
