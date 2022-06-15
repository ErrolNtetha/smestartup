import React from 'react';
import axios from 'axios';

export const useFetchData = (url: string) => {
    const [data, setData] = React.useState([]);

    React.useEffect(async () => {
        await axios.get(url, {
              headers: {
                'x-access-token': localStorage.getItem('token')
              }
         })
        .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
        .catch((err) => console.log('Something went wrong: ', err));
    }, []);

    return data;
};
