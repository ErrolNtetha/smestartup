import { Button } from 'components/button';
import React, { useState, useRef } from 'react';
import { FiImage, FiVideo } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import toggleFieldOff from 'store/actions/toggleField_OFF';

export const PostField = () => {
const dispatch = useDispatch();
const [post, setPost] = useState('');
const [image, setImage] = useState(null);
// const [video, setVideo] = useState(null);
const imageInput = useRef(null);

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

console.log(image);

  return (
    <section className='feed__postField'>
        <textarea name='post' className='feed__textarea' rows={6} placeholder='What is your mind today?' onChange={(e) => setPost(e.target.value)} />
        <section className='feed__btnGroup'>
          <section className='feed__left'>
            <FiImage className='feed__image' onClick={() => imageInput.current.click()} />
              <input ref={imageInput} hidden accept='image/*' onChange={(e) => setImage(e.target.files[0])} type='file' />

            <FiVideo className='feed__video' />
          </section>
          <section className='feed__right'>
            <Button onClick={() => dispatch(toggleFieldOff())} className='feed__btn--cancel'> Cancel </Button>
            <Button onClick={handleSubmit} className='feed__btn--post'> Post </Button>
          </section>
        </section>
    </section>
  );
};