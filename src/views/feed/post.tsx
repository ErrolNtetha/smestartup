import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NODE_ENV } from 'config/baseURL';
import axios from 'axios';
import { decodeToken } from 'helpers/decodeJwt';

export const Post = () => {
    const [post, setPost] = useState('');
    const { id }: string = useParams();
    console.log(useParams());

    console.log(decodeToken().email);

    useEffect(() => {
        axios.get(`${NODE_ENV()}/feed/p/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            }
        })
            .then((res) => {
                setPost(res.data.posts.post);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <section>
            {post}
        </section>
    );
};
