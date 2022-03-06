import axios from 'axios';

export const useFetchData = (url: string): string => {
    axios.get(url)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));

    return url;
};