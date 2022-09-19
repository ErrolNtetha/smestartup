import React from 'react';
import { Preview } from 'views/suppliers/preview';

interface Props {
    name: string;
    about: string;
}

export const Details = ({ name, about }: Props) => {
    return (
        <section>
            <p> Supplier Name: {name} </p>
            <p> Supplier About: {about} </p>
            <section style={{ width: '30%' }}>
                <Preview about={about} established={2021} email='info@blendot.com' website='https://blendot.com' />
            </section>
        </section>
    );
};
