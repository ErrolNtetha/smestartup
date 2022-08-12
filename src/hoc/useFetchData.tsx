import React from 'react';
import axios from 'axios';
import { axiosPrivate } from 'config/axiosInstance';
import { useRefresh } from 'hoc/useRefreshToken';

export const useFetchData = (url: string) => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');
    const newAccessToken = useRefresh();

    React.useEffect(() => {
        const fetchData = async () => {
           await axiosPrivate.get(url)
                .then((res) => {
                    setData(res.data);
                    setLoading(false);
                    console.log('first request');
                })
                .catch(({ response }) => {
                if (response?.status === 403) {
                    console.log(response.config.headers['x-access-token']);
                    response.config.headers['x-access-token'] = `Bearer ${newAccessToken}`;
                    console.log(response.config.headers['x-access-token']);
                    axios.request(response.config)
                        .then((res) => console.log('second request ', res))
                        .catch((err) => console.log('second request...error though', err.response.status));
                }
                console.log('There was an error...');
                setLoading(false);
                setError(response.statusText);
            });
        };
            fetchData();
    }, []);

    return { data, error, loading };
};
