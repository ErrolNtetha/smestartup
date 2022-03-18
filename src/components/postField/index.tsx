import { Button } from 'components/button';
import React, { useState, useRef } from 'react';
import { FiImage, FiVideo } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import toggleFieldOff from 'store/actions/toggleField_OFF';

export const PostField = () => {
const dispatch = useDispatch();
const [post, setPost] = useState('');
const [images, setImages] = useState<string[]>([]);
// const [videos, setVideos] = useState(null);
const [loading, setLoading] = useState(false);
const imageInput = useRef(null);

const formData = {
  post,
};

const handleSubmit = async () => {
  await axios.post('http://localhost:5000/feed', formData, {
    headers: {
      'x-access-token': localStorage.getItem('token')
    }
  })
  .then((res) => {
    if (!post) {
      console.log('Field is empty. Write something at least!');
      return;
    }

    setLoading(true);
    console.log(loading);
    console.log('fetching data');

    if (res.statusText === 'OK') {
      console.log('response arrived');
      setLoading(false);
    }

    console.log(res);
    console.log(images);
  })
  .catch((err) => console.error(err));
};

// console.log(images[2]);

  return (
    <section className='feed__postField'>
        <textarea name='post' className='feed__textarea' rows={6} placeholder='Share what is happening today...' onChange={(e) => setPost(e.target.value)} />

        <section className='feed__btnGroup'>
          <section className='feed__left'>
            <FiImage className='feed__image' onClick={() => imageInput.current.click()} />
            <input
              ref={imageInput}
              hidden
              accept='image/*'
              multiple
              onChange={(e) => setImages(e.target.files)}
              type='file'
            />
            <section>
              {images.map((image) => console.log(image.name))}
            </section>

            <FiVideo className='feed__video' />
          </section>
          <section className='feed__right'>
            <Button onClick={() => dispatch(toggleFieldOff())} className='feed__btn--cancel'> Cancel </Button>
            <Button onClick={handleSubmit} className='feed__btn--post'> {loading ? 'loading' : 'Post'} </Button>
          </section>
        </section>
    </section>
  );
};