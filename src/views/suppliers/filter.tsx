/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable  react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import { Select } from 'components/select';
import { Button } from 'components/button';
import { sectors } from './sectors';

export const Filter = () => {
    const [selected, setSelected] = useState('');
    // const element = useRef(null);

    return (
        <section className='supplier__filterContainer'>
            <section className='supplier__filterContainer__innerContainer'>
            <Select
              title={!selected ? 'Choose sector:' : selected}
              className='supplier__selected'
            >
                <section className='select__options'>
                    {sectors.map((sector) => {
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
                    <span>
                        <input className='supplier__locationInputs__location__city' placeholder='City' type='text' />
                    </span>
                    <input className='supplier__locationInputs__location__zip' placeholder='ZIP Code' type='text' />
                </span>
            </section>
            <section className='supplier__buttonContainer'>
                <Button className='supplier__search--button'> Search </Button>
            </section>
            </section>
        </section>
    );
};
