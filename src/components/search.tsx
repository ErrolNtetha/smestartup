import React from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

interface Props {
    placeholder: string;
    children: React.ReactNode;
    searchKey: React.ChangeEventHandler<HTMLInputElement> | undefined;
    clearSearchKey: React.MouseEventHandler<SVGElement> | undefined;
    searchTerm: string;
    className: string;
}

export const Search = ({
    placeholder,
    children,
    searchKey,
    clearSearchKey,
    searchTerm,
    className
}: Props) => {
    // const hasResult = children[2];
    return (
        <section className={className}>
            <section className='header__searchContainer'>
                <section className='header__searchWrapper'>
                    <FiSearch className='header__searchIcon' />
                    <input type='text' name='search' value={searchTerm} placeholder={placeholder} onChange={searchKey} className='header__searchBar' />
                    {searchTerm && <FiX onClick={clearSearchKey} className='header__clearSearchKey' />}
                </section>
                {children}
            </section>
        </section>
    );
};
