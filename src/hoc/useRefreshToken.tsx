import React from 'react';
import { axiosRefresh } from 'config/axiosInstance';

export const useRefresh = () => {
    const [newAccessToken, setNewAccessToken] = React.useState(null);
    axiosRefresh.get('/refresh')
        .then((res) => {
            setNewAccessToken(res.data.accessToken);
            localStorage.setItem('accessToken', `Bearer ${res?.data?.accessToken}`);
        })
        .catch(({ response }) => {
            console.log(response);
        });
        return newAccessToken;
    };
