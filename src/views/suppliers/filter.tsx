/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable  react/jsx-no-useless-fragment */
/* eslint-disable   jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Select } from 'components/select';
import { Button } from 'components/button';
// import { Checkbox } from 'components/checkbox';
import { useHistory, useLocation } from 'react-router-dom';
// import { axiosPrivate } from 'config/axiosInstance';
import { categories } from './categories';

export const Filter = () => {
    const [selected, setSelected] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    const { search } = useLocation();
    const history = useHistory();
    console.log(history, search);

    return (
        <section className='supplier__filterContainer supplier__filterModal'>
            <section className='supplier__filterContainer'>
            <Select
              title={!selected ? '- Choose sector -' : selected}
              className='supplier__selected'
            >
                <section className='supplier__selected__options'>
                    {categories.map((sector) => {
                        return (
                            <section key={sector.id}>
                                <p onClick={() => setSelected(sector.name)}> {sector.name} </p>
                                <hr className='supplier__selected__options__optionsDivider' />
                            </section>
                        );
                    })}
                </section>
            </Select>
            <section className='supplier__locationInputs'>
                <span className='supplier__locationInputs__location'>
                    <input name='city' onChange={(e) => setCity(e.target.value)} className='supplier__locationInputs__location__city' placeholder='City' type='text' />
                    <input name='zipCode' onChange={(e) => setZip(e.target.value)} className='supplier__locationInputs__location__zip' placeholder='ZIP Code' type='text' />
                    <input name='tags' className='supplier__locationInputs__location__zip' placeholder='Tags' type='text' />
                </span>
            </section>
            <section className='supplier__buttonContainer'>
                <Button onClick={() => history.replace(`?supplierType=${selected}&city=${city}&postalCode=${zip}`)} className='supplier__search--button'> Search </Button>
            </section>
            </section>
        </section>
    );
};
