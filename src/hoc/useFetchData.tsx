import React from 'react';
import { axiosPrivate } from 'config/axiosInstance';
// import { io } from 'socket.io-client';
// import { NODE_ENV } from 'config/baseURL';

export const useFetchData = async (url: string) => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    // const [error, setError] = React.useState('');
    // const socket = io(`${NODE_ENV()}`);

    React.useEffect(() => {
        axiosPrivate.get(url)
        .then((res) => {
            setLoading(false);
            console.log(res.data);
            setData(res.data);
        })
        .catch((error) => {
            setLoading(false);
            console.log(error);
        });
    }, []);
    return { data, loading };
};
