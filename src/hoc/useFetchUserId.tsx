import { useState, useEffect } from 'react';
import { axiosPrivate } from 'config/axiosInstance';

export const useFetchUserId = () => {
    const [authorId, setAuthorId] = useState('');

    useEffect(() => {
        const abortController = new AbortController();

        axiosPrivate.get('/verify')
            .then((res) => {
                const { userId } = res.data;
                setAuthorId(userId);
            })
            .catch((err) => {
                console.error(err);
            });

        return () => {
            abortController.abort();
        };
    }, []);

    return authorId;
};
