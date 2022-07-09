import React from 'react';
import { axiosPrivate } from 'config/axiosInstance';
import { useRefreshToken } from 'hoc/useRefreshToken';
// import { io } from 'socket.io-client';
// import { NODE_ENV } from 'config/baseURL';

export const useFetchData = (url: string) => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const refreshToken = useRefreshToken();
    // const [error, setError] = React.useState('');
    // const socket = io(`${NODE_ENV()}`);

    React.useEffect(() => {
        axiosPrivate.get(url)
        .then((res) => {
            setLoading(false);
            setData(res.data);
        })
        .catch(({ response }) => {
            const { status, config } = response;
            if (status === 403) {
                if (refreshToken) {
                    console.log(refreshToken);
                    localStorage.setItem('accessToken', `Bearer ${refreshToken}`);
                    axiosPrivate.request(config);
                }
                console.log(config);
            }
            setLoading(false);
        });
    }, []);
    return { data, loading };
};
