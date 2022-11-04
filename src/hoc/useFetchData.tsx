/* eslint-disable brace-style */

import { useState, useEffect } from 'react';
import { axiosPrivate } from 'config/axiosInstance';
// import { useHistory } from 'react-router-dom';

export const useFetchData = (url: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setError] = useState<string | null>(null);
    // const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
           await axiosPrivate.get(url)
                .then((res) => {
                    setData(res?.data);
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);
                    if (error.response) {
                        setError('Your session has expired. Please login again.');
                    }
                        else if (error.request) setError('Something went wrong. Please try again later.');
                    else {
                        setError('Ops. Something just went wrong. Please try again later.');
                    }
            });
        };
        fetchData();
    }, []);

    return { data, errorMessage, loading };
};
