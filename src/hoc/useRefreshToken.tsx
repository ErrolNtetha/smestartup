import { useState, useEffect } from 'react';
import { axiosRefresh } from 'config/axiosInstance';

export const useRefreshToken = () => {
    const [newAccessToken, setNewAccessToken] = useState('');

    useEffect(() => {
        async function fetchToken() {
            const token = await axiosRefresh.get('/refresh');
            try {
                setNewAccessToken(token.data.accessToken);
            } catch ({ response }) {
                console.log(response);
            }
        }
        fetchToken();
    }, []);

    return newAccessToken;
};
