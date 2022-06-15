import { useState, useEffect } from 'react';
import { axiosPrivate } from 'config/axiosInstance';

export const useFetchPosts = () => {
    const [posts, setPosts] = useState([]);

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
                console.log(err.code);
                console.log(err.message);
            });

        return () => {
            controller.abort();
        };
    }, []);
    return posts;
};
