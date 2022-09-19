import { useState, useEffect } from 'react';
import { axiosPrivate } from 'config/axiosInstance';

export const useFetchUserId = () => {
    const [authorId, setAuthorId] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const abortController = new AbortController();

        axiosPrivate.get('/verify')
            .then((res) => {
                const { userId } = res.data;
                setAuthorId(userId);
            })
            .catch(({ response }) => {
                setError(`An error occurred. ${response?.status}`);
            });

        return () => {
            abortController.abort();
        };
    }, []);

    return { authorId, error };
};
