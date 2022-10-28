/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect, useState, useRef } from 'react';
import { FiImage, FiPlus, FiVideo } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { axiosPrivate } from 'config/axiosInstance';
import toggleFieldOff from 'store/actions/toggleField_OFF';
import { Button } from 'components/button';
import { SyncLoader } from 'react-spinners';

export const PostField = () => {
const dispatch = useDispatch();
const [post, setPost] = useState('');
const [images, setImages] = useState<Blob | null>(null);
const [fileURL, setFileURL] = useState(null);
const [loading, setLoading] = useState<boolean | null>(null);
// const [errorMessage, setErrorMessage] = useState<string | null>(null);

const imageInput = useRef(null);

const formData = { post, fileURL };

const onPostSubmit = (e: React.ChangeEvent<HTMLInputElement>) => setPost(e.target.value);

const handleSubmit = async () => {
    if (!post) {
        return;
    }
    setLoading(true);
    await axiosPrivate.post('/feed', formData)
    .then((response) => {
        if (response.data.success) {
            setLoading(false);
            dispatch(toggleFieldOff());
        } else setLoading(false);
    })
    .catch((error) => {
        setLoading(false);
        if (error) {
            console.log(error);
            // setErrorMessage('Something went wrong. Please try again later.');
        }
    });
};

useEffect(() => {
    const reader = new FileReader();

    if (images) {
        reader.onload = (e) => {
        const { result } = e.target;
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
          placeholder='What is happening?'
          onChange={onPostSubmit}
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
                  onChange={(e) => setImages(e.target.files[0])}
                  type='file'
                />
                <FiVideo className='feed__video' />
            </section>
            <section className='feed__right'>
                <Button onClick={() => dispatch(toggleFieldOff())} className='feed__btn--cancel'> Cancel </Button>
                <Button onClick={handleSubmit} className='feed__btn--post'> {loading ? <SyncLoader color='#fff' size={6} /> : 'Post'} </Button>
            </section>
        </section>
        </section>
    </section>
  );
};
