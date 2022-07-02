import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NODE_ENV } from 'config/baseURL';
import axios from 'axios';
import { decodedToken } from 'helpers/decodeJwt';
import { format } from 'date-fns';

export const Post = () => {
    const [post, setPost] = useState('');
    const { id }: string = useParams();
    console.log(useParams());

    const formatDate = format(new Date(decodedToken().exp), 'dd MMM yyyy mm s');
    console.log(new Date(decodedToken().exp));
    console.log(new Date(decodedToken().iat));
    console.log(formatDate);
    console.log(decodedToken());
    console.log(new Date(format().exp));
    console.log(decodedToken().exp);

    useEffect(() => {
        axios.get(`${NODE_ENV()}/feed/p/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('accessToken')
            }
        })
            .then((res) => {
                setPost(res.data.posts.post);
                console.log(res.data.posts);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <section>
            <h3> My post </h3>
            {post}
        </section>
    );
};
