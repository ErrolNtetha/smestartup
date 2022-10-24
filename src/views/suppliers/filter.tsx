/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable  react/jsx-no-useless-fragment */
/* eslint-disable   jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Select } from 'components/select';
import { Button } from 'components/button';
import { Search } from 'components/search';
// import { Checkbox } from 'components/checkbox';
// import { Tooltip } from 'components/tooltip';
import { categories } from './categories';

export const Filter = () => {
    const [selected, setSelected] = useState('');
    const [search, setSearch] = useState(false);
    // const element = useRef(null);
    const clearSearch = () => {
        console.log('button clicked');
    };

    return (
        <section className='supplier__filterContainer supplier__filterModal'>
            <section className='supplier__filterContainer'>
            <Select
              title={!selected ? '- Choose sector -' : selected}
              className='supplier__selected'
            >
                <section className='select__options'>
                    {categories.map((sector) => {
                        return (
                            <section key={sector.id}>
                                <hr className='select__options__optionsDivider' />
                                <p onClick={() => setSelected(sector.name)}> {sector.name} </p>
                            </section>
                        );
                    })}
                </section>
            </Select>
            <section className='supplier__locationInputs'>
                <span className='supplier__locationInputs__location'>
                    <input className='supplier__locationInputs__location__city' placeholder='City' type='text' />
                    <input className='supplier__locationInputs__location__zip' placeholder='ZIP Code' type='text' />
                    <input className='supplier__locationInputs__location__zip' placeholder='Tags' type='text' />
                </span>
            </section>
            <section className='supplier__buttonContainer'>
                <Button className='supplier__search--button'> Search </Button>
            </section>
            </section>
            {search
                && (
                <section className='supplier__filterSearchContainer' onClick={() => setSearch(!search)}>
                    <Search placeholder='Search suppliers...' searchTerm='sf' searchKey={(e) => e.target.value} className='supplier__searchFilter' clearSearchKey={() => clearSearch}>
                        hey
                    </Search>
                </section>
            )}
        </section>
    );
};
