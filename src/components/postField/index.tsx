import { Button } from 'components/button';
import React, { useState } from 'react';
// import { RootState } from 'store';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import toggleFieldOff from 'store/actions/toggleField_OFF';

export const PostField = () => {
const dispatch = useDispatch();
const [post, setPost] = useState('');

const formData = {
  post,
};

const handleSubmit = () => {
  axios.post('http://localhost:5000/feed', formData, {
    headers: {
      'x-access-token': localStorage.getItem('token')
    }
  })
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
};

  return (
    <section className='feed__postField'>
        <textarea name='post' placeholder='What is your mind today?' onChange={(e) => setPost(e.target.value)} />
        <Button onClick={() => dispatch(toggleFieldOff())}> Cancel </Button>
        <Button onClick={handleSubmit}> Post </Button>
    </section>
  );
};