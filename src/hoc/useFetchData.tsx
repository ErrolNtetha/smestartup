/* eslint-disable brace-style */

import { useState, useEffect } from 'react';
import { axiosPrivate } from 'config/axiosInstance';

export const useFetchData = (url: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!response) {
                    setError('There was an error fetching data.');
                    return;
                }

                const response = await axiosPrivate.get(url);
                setData(response?.data);
            } catch (error) {
                console.log(error);
                // @ts-ignore
                if (error.code === 'ECONNABORTED') {
                    setError('Request timed out.');
                } else {
                    setError('There was an error fetching data. Try again.');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, errorMessage, loading };
};
