/* eslint-disable brace-style */

import { useState, useEffect } from 'react';
import { axiosPrivate } from 'config/axiosInstance';

export const useFetchData = (url: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
           await axiosPrivate.get(url)
                .then((res) => setData(res?.data))
                .catch((error) => error.response && setError('Something went wrong. Please try again later.'))
                .finally(() => setLoading(false));
        };
        fetchData();
    }, [url]);

    return { data, errorMessage, loading };
};
