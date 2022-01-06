import React, { useState } from 'react';
import toggleField from '../store/actions/toggleField_OFF';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export default function PostField() {
    const [ post, setPost ] = useState('');
    const dispatch = useDispatch();
    const toggle = useSelector(state => state.isToggleOn);

  

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = 'http://localhost:5000/feed';

        axios.post(url, post, { 
            headers: { "Content-type": "application/json" },
         })
            .then(res => console.log('success ', res))
            .catch(err => console.log('An error occured: ', err))
    }

    return (
        <form className='postFieldContainer' onSubmit={handleSubmit}>
            <section className='innerPostField'>
                {/* <input className='inputField field' type="text" placeholder='Name of Your Company' />
                <section className='amountContainer'>
                    <input className='inputAmount' type="number" placeholder='Minimum Amount' />
                    <input className='inputAmount' type="number" placeholder='Maximum Amount' />
                </section>
                <input type="number" className='field' placeholder='Year the business was established.' /> */}

                <textarea name="" onChange={(e) => setPost(e.target.value)} placeholder='What are you looking for?' id="" cols="30" rows="10"></textarea>
                {/* <select className='field' name="companyType" id="">
                    <option value=""> Type of Company </option>
                    <option value=""> Sole Proprietiship </option>
                    <option value=""> Private Company </option>
                    <option value=""> Public Company </option>
                    <option value=""> Close Coperation </option>
                    <option value=""> Other </option>
                </select>
                <input className='fileField field' type="file" placeholder='Enter Subject' />
                <p> Supported files: PDF, DOCX, DOC, JPG, JPEG, PNG. </p> */}
            </section>
            <section className='btnGroup'>
                <button onClick={() => dispatch(toggleField())}> Cancel </button>
                <button type='submit'> Post </button>
            </section>
        </form>
    )
}
