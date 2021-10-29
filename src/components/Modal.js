import React from 'react';
import { Link } from 'react-router-dom';

export default function Modal() {

    return (
        <section className='modalContainer'>
            <section>
                <p> Please fill in the details below! </p>
                <form>
                    <input type="text" placeholder='Company Name...' />
                    <input type="text" placeholder='What are you interested in?' />
                    <input type="text" placeholder='How much do you need?' />
                    <textarea name="description" id="" cols="30" rows="10" placeholder='Describe your business'/>
                    <Link> Submit Proposal </Link>
                </form>
            </section>
        </section>
    )
}
