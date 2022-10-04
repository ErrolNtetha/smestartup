/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable  react/jsx-no-useless-fragment */
/* eslint-disable   jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Select } from 'components/select';
import { Button } from 'components/button';
import {
    FiHeart,
    FiList,
    FiPlusCircle,
    FiSliders,
    FiHome
} from 'react-icons/fi';
import { Modal } from 'components/modal';
import { Search } from 'components/search';
// import { Checkbox } from 'components/checkbox';
// import { Tooltip } from 'components/tooltip';
import { categories } from './categories';

export const Filter = () => {
    const [selected, setSelected] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState(false);
    const history = useHistory();
    // const element = useRef(null);
    //
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
            <section className='supplier__filterIconGroup'>
                <span>
                    <span>
                        <FiHome className='supplier__icon' />
                        <p> Home </p>
                    </span>
                    <span>
                        <FiList className='supplier__icon' onClick={() => setIsOpen(!isOpen)} />
                        <p> Sort </p>
                    </span>
                    <span>
                        <FiPlusCircle className='supplier__icon' onClick={() => history.push('/suppliers/register')} />
                        <p> Add </p>
                    </span>
                    <span>
                        <FiSliders className='supplier__icon' />
                        <p> Filter </p>
                    </span>
                    <span>
                        <FiHeart className='supplier__icon' />
                        <p> Saved </p>
                    </span>
                </span>
            </section>
            {isOpen
                && (
                <Modal className='supplier__modal'>
                    <p style={{ margin: '0', padding: '0' }}> Search Filter </p>
                    <section className='supplier__filterContainr'>
            <Select
              title={!selected ? 'Choose sector:' : selected}
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
                </span>
                <section>
                    <input type='checkbox' value='Within 500km' />
                </section>
            </section>
            <section className='supplier__buttonContainer'>
                <Button className='supplier__search--button' onClick={clearSearch}> Clear </Button>
                <Button className='supplier__search--button'> Search </Button>
            </section>
                    </section>
                </Modal>
                )}
        </section>
    );
};
