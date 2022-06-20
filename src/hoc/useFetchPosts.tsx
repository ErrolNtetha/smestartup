import { useState, useEffect } from 'react';
import { axiosPrivate } from 'config/axiosInstance';

export const useFetchPosts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setErrorCode] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        axiosPrivate.get('/p/posts', {
        })
            .then((res) => {
                console.log(res.data);
                console.log(res.data?.posts);
                setPosts(res.data?.posts);
            })
            .catch((err) => {
                setErrorCode(err.code);
                console.log(err.message);
            });

        return () => {
            controller.abort();
        };
    }, []);
    return { posts, error };
};
