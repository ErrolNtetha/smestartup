/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect, useState, useRef } from 'react';
import { FiImage, FiPlus, FiVideo } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { axiosPrivate } from 'config/axiosInstance';
import toggleFieldOff from 'store/actions/toggleField_OFF';
import { Button } from 'components/button';
import { io } from 'socket.io-client';
import { NODE_ENV } from 'config/baseURL';

export const PostField = () => {
const dispatch = useDispatch();
const [post, setPost] = useState('');
const [images, setImages] = useState('');
const [fileURL, setFileURL] = useState('');
// const [videos, setVideos] = useState(null);
const [loading, setLoading] = useState(false);
const imageInput = useRef(null);
const socket = io(`${NODE_ENV()}`, { transports: ['polling'] });

const formData = {
    post,
    fileURL,
};

const handleSubmit = async () => {
    await axiosPrivate.post('/feed', formData)
    .then((res) => {
        console.log(formData);
        socket.emit('sendPost', post);

        if (!post) {
            console.log('Field is empty. Write something at least!');
            return;
        }

        if (res.statusText !== 'OK') {
            setLoading(true);
        }

        if (res.statusText === 'OK') {
            dispatch(toggleFieldOff());
            setLoading(false);
        }
  })
  .catch((err) => console.error(err));
};

React.useEffect(() => {
    socket.on('receivePost', (data) => {
        console.log(data);
    });
}, [socket]);

useEffect(() => {
    const reader = new FileReader();

    if (images) {
        reader.onload = (e) => {
        const { result } = e.target;
        console.log(result);
        if (result) {
            setFileURL(result);
        }
    };
        reader.readAsDataURL(images);
    }

    return () => {
            if (reader && reader.readyState === 1) {
                reader.abort();
            }
    };
}, [images]);

  return (
    <section className='feed__postField'>
        <section>
        <textarea
          name='post'
          className='feed__textarea'
          rows={6}
          placeholder='Share what is happening...'
          onChange={(e) => setPost(e.target.value)}
        />
        <section>
            { fileURL
             && (
                    <section className='feed__imageContainer'>
                        <img src={fileURL} alt='screenshot' className='feed__imagePreview' style={{ width: '80px' }} />
                        <span className='feed__addImage' onClick={() => imageInput.current.click()}>
                            <FiPlus className='feed__plus' />
                        </span>
                    </section>
                )}
        </section>
        <section className='feed__btnGroup'>
          <section className='feed__left'>
              <FiImage className='feed__image' onClick={() => imageInput.current.click()} />
            <input
              ref={imageInput}
              hidden
              accept='image/*'
              multiple
              onChange={(e) => setImages(e.target.files[0])}
              type='file'
            />

            <FiVideo className='feed__video' />
          </section>
          <section className='feed__right'>
            <Button onClick={() => dispatch(toggleFieldOff())} className='feed__btn--cancel'> Cancel </Button>
            <Button onClick={handleSubmit} className='feed__btn--post'> {loading ? 'loading' : 'Post'} </Button>
          </section>
        </section>
        </section>
    </section>
  );
};
