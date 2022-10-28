import { useState, useEffect } from 'react';
import { axiosPrivate } from 'config/axiosInstance';

export const useFetchData = (url: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setError] = useState<string | null>(null);

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
                    } else if (error?.response?.status === 403) {
                        setError(error?.response?.status);
                    } else if (error?.response?.status > 500 && 599) {
                        setError('Problem with our servers.');
                    }
            });
        };
        fetchData();
    }, []);

    return { data, errorMessage, loading };
};
