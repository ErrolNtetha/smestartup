import { useState, useEffect } from 'react';
import { axiosPrivate } from 'config/axiosInstance';

export const useFetchPosts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setErrorCode] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        axiosPrivate.get('/p/posts', {
        })
            .then((res) => {
                console.log(res?.data);
                console.log(res?.data?.posts);
                setPosts(res.data?.posts);
                setLoading(false);
            })
            .catch((err) => {
                setErrorCode(err?.code);
                setLoading(false);
            });

        return () => {
            controller.abort();
        };
    }, []);
    return { posts, error, loading };
};
