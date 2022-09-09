import { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosPrivate } from 'config/axiosInstance';
import { useRefresh } from 'hoc/useRefreshToken';

export const useFetchData = (url: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>('');
    const newAccessToken = useRefresh();

    useEffect(() => {
        const fetchData = async () => {
           await axiosPrivate.get(url)
                .then((res) => {
                    // receive the data and save on the state
                    setData(res?.data);
                    setLoading(false);
                    setError(null);
                })
                .catch(({ response }) => {
                    if (response?.status === 403) {
                        response.config.headers['x-access-token'] = `Bearer ${newAccessToken}`;

                        // then retry the request with new token
                        axios.request(response.config);
                    }
                    setLoading(false);
                    setError('there was an error...');
            });
        };
        fetchData();
    }, []);

    return { data, error, loading };
};
