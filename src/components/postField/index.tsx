/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect, useState, useRef } from 'react';
import { FiImage, FiPlus, FiVideo } from 'react-icons/fi';
import { axiosPrivate } from 'config/axiosInstance';
import { Button } from 'components/button';
import { SyncLoader } from 'react-spinners';
import { Toast } from 'components/toast';

interface Props {
    toggleField: Function;
}

export const PostField = ({ toggleField }: Props) => {
const [post, setPost] = useState('');
const [images, setImages] = useState<Blob | null>(null);
const [fileURL, setFileURL] = useState(null);
const [loading, setLoading] = useState<boolean | null>(null);
const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
const [isPosted, setIsPosted] = useState<boolean | null>(null);
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
        setIsSuccess(response.data.success);
        if (response.data.success) {
            setIsPosted(true);
            setLoading(false);
            // dispatch(toggleFieldOff());
        } else setLoading(false);
    })
    .catch((error) => {
        setLoading(false);
        setIsPosted(true);
        setIsSuccess(false);
        if (error) {
            console.log(error);
            // setErrorMessage('Something went wrong. Please try again later.');
        }
    });
};

    useEffect(() => {
        setTimeout(() => {
            setIsPosted(false);
        }, 5000);
    }, [isPosted]);

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
        {isPosted && <Toast message={`${isSuccess ? 'Successfully posted.' : 'Failed to post.'}`} success={isSuccess} />}
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
                <Button onClick={() => toggleField()} className='feed__btn--cancel'> Cancel </Button>
                <Button onClick={handleSubmit} className='feed__btn--post'> {loading ? <SyncLoader color='#fff' size={6} /> : 'Post'} </Button>
            </section>
        </section>
        </section>
    </section>
  );
};
