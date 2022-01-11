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

        const postDetails = {
            post,
        }

        const url = 'http://localhost:5000/feed';

        axios.post(url, postDetails)
            .then(res => console.log('success ', res))
            .catch(err => console.log('An error occured: ', err))

            console.log(postDetails);
            dispatch(toggleField());
    }

    return (
        <form className='postFieldContainer' method='POST' onSubmit={handleSubmit}>
            <section className='innerPostField'>
                <textarea name="" onChange={(e) => setPost(e.target.value)} placeholder='What are you looking for?' id="" cols="30" rows="10"></textarea>
            </section>
            <section className='btnGroup'>
                <button onClick={() => dispatch(toggleField())}> Cancel </button>
                <button type='submit'> Post </button>
            </section>
        </form>
    )
}
