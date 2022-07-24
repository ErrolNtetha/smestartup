import React from 'react';
import { axiosPrivate } from 'config/axiosInstance';

export const useFetchData = (url: string) => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        const fetchData = async () => {
           await axiosPrivate.get(url)
                .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log('Something went wrong: ', err);
                setLoading(false);
                setError(err);
            });
        };
            fetchData();
    }, []);

    return { data, error, loading };
};
