import React from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

interface Props {
    placeholder: string;
    children: React.ReactNode;
    searchKey: React.ChangeEventHandler<HTMLInputElement> | undefined;
    clearSearchKey: string;
    searchTerm: string;
}

export const Search = ({
    placeholder,
    children,
    searchKey,
    clearSearchKey,
    searchTerm
}: Props) => {
    const hasResult = children[2];

    return (
        <section className='header__search'>
            <section className='header__searchContainer'>
                <section className='header__searchWrapper'>
                    <FiSearch className='header__searchIcon' />
                    <input type='text' name='search' placeholder={placeholder} onChange={searchKey} className='header__searchBar' />
                    {searchTerm && <FiX onClick={clearSearchKey} className='header__clearSearchKey' />}
                </section>
                { (hasResult && hasResult.length >= 1) && (
                        <section className='header__searchResultContainer'>
                            {children}
                        </section>
                    )}
            </section>
        </section>
    );
};
