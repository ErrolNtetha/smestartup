import React from 'react';
import { axiosPrivate } from 'config/axiosInstance';

export const useFetchData = (url: string) => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        axiosPrivate.get(url)
        .then((res) => {
            setData(res.data);
            setLoading(false);
            console.log(res.data);
        })
        .catch((err) => console.log('Something went wrong: ', err));
    }, []);

    return { data, loading };
};
