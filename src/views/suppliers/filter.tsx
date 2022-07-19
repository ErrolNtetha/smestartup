/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Select } from 'components/select';
import { sectors } from './sectors';

export const Filter = () => {
    const [selected, setSelected] = useState('');
    // const element = useRef(null);

    console.log(selected);
    return (
        <section className='supplier__filterContainer'>
            <Select
              title={!selected ? sectors[0].name : selected}
            >
            <section style={{ width: '100%' }}>
                <section className='select__options'>
                    {sectors.map((sector) => {
                        return (
                            <>
                                <hr className='select__options__optionsDivider' />
                                <p onClick={() => setSelected(sector.name)} key={sector.id}> {sector.name} </p>
                            </>
                        );
                    })}
                </section>
            </section>
            </Select>
        </section>
    );
};
