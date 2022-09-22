import { useState, useEffect } from 'react';
import { axiosRefresh } from 'config/axiosInstance';

export const useFetchUserId = () => {
    const [authorId, setAuthorId] = useState('');

    useEffect(() => {
        const abortController = new AbortController();

        axiosRefresh.get('/verify')
            .then((res) => {
                const { userId } = res.data;
                setAuthorId(userId);
            })
            .catch(({ response }) => {
                console.error('Fetch user id request: ', response);
            });

        return () => {
            abortController.abort();
        };
    }, []);

    return authorId;
};
