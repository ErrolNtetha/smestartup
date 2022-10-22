import { useState, useEffect } from 'react';
// import axios from 'axios';
import { axiosPrivate } from 'config/axiosInstance';
// import { useRefresh } from 'hoc/useRefreshToken';

export const useFetchData = (url: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setError] = useState<string | null>(null);
    // const newAccessToken = useRefresh();

    useEffect(() => {
        const fetchData = async () => {
           await axiosPrivate.get(url)
                .then((res) => {
                    setData(res?.data);
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);
                    if (error.message === 'Network Error') {
                        setError('There was a network error.');
                        return;
                    }
                    if (error?.response.status === 403) {
                        setError(error?.response.status);
                    }
            });
        };
        fetchData();
    }, []);

    return { data, errorMessage, loading };
};
