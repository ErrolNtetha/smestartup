/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable  react/jsx-no-useless-fragment */
/* eslint-disable   jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Select } from 'components/select';
import { Button } from 'components/button';
import { useHistory } from 'react-router-dom';
import { Container } from 'components/container';
import { sectors } from './sectors';
import { categories } from './categories';

export const Filter = () => {
    const [selected, setSelected] = useState('');
    const [city, setCity] = useState('');
    const [sector, setSector] = useState('');
    const history = useHistory();

    const handleQueries = () => {
        if (selected || city) {
            history.replace(`?${selected !== 'All' && `supplierType=${selected}`}${(selected && city) && `&city=${city}`}`);
        } else history.replace('/suppliers');
    };

    return (
        <Container header='Filter' className='supplier__filterWrapper'>
            <section className='supplier__elementContainer'>
                <label htmlFor='selected'> Type: </label>
                <Select
                  title={!selected ? '- Choose type -' : selected}
                  className='supplier__selected'
                >
                    <section className='supplier__selected__options'>
                        {categories.map((item) => {
                            return (
                                <section key={item.id}>
                                    <p onClick={() => setSelected(item.name)}> {item.name} </p>
                                    <hr className='supplier__selected__options__optionsDivider' />
                                </section>
                            );
                        })}
                    </section>
                </Select>
            </section>
            <section className='supplier__elementContainer'>
                <label htmlFor='sector'> Sector: </label>
                <Select
                  title={!sector ? '- Choose sector -' : sector}
                  className='supplier__selected'
                >
                    <section className='supplier__selected__options'>
                        {sectors.map((item) => {
                            return (
                                <section key={item.id}>
                                    <p onClick={() => setSector(item.name)}> {item.name} </p>
                                    <hr className='supplier__selected__options__optionsDivider' />
                                </section>
                            );
                        })}
                    </section>
                </Select>
            </section>
            <section className='supplier__locationInputs'>
                <label htmlFor='city'> City: </label>
                <span className='supplier__locationInputs__location'>
                    <input name='city' onChange={(e) => setCity(e.target.value)} className='supplier__locationInputs__location__city' placeholder='City' type='text' />
                </span>
            </section>
            <section className='supplier__buttonContainer'>
                <Button onClick={handleQueries} className='supplier__search--button'> Search </Button>
            </section>
        </Container>
    );
};
