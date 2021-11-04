import React, { useState } from 'react';
import { post } from 'axios';

export default function Modal() {
    const [ companyName, setCompanyName ] = useState('');
    // const [ interest, setInterest ] = useState('');
    // const [ amount, setAmout ] = useState('');
    // const [ description, setDescription ] = useState('');

    const companyNameHandler = (e) => {
        setCompanyName(e.target.value);
    };

    const onSubmit = () => {
        const url = 'http://localhost:5000/';

        const companyDetails = {
            companyName,
            // interest,
            // amount,
            // description,
        };

        post(url, companyDetails)
            .then(res => res.json)
            .catch(err => console.log(err))
    }

    return (
        <section className='modalContainer'>
            <section>
                <p> Please fill in the details below! </p>
                <form>
                    <input type="text" placeholder='Company Name...' onChange={companyNameHandler} />
                    <input type="text" placeholder='What are you interested in?' />
                    <input type="text" placeholder='How much do you need?' />
                    <textarea name="description" id="" cols="30" rows="10" placeholder='Describe your business'/>
                    <button type='submit' onClick={onSubmit}> Submit Proposal </button>
                </form>
            </section>
        </section>
    )
}
