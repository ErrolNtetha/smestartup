import React from 'react';
import { FiSearch } from 'react-icons/fi';

export const Search = () => {
    return (
        <div className='header__search'>
            <section className='header__searchWrapper'>
                <input type='text' placeholder='Search' className='header__searchBar' />
                <FiSearch className='header__searchIcon' />
            </section>
        </div>
    );
};
