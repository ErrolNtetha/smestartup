import axios from 'axios';
import { NODE_ENV } from './baseURL';

const timeout = 60000; // 1 minute

export const axiosPublic = axios.create({
    baseURL: NODE_ENV(),
    timeout
});

export const axiosRegister = axios.create({
    baseURL: NODE_ENV(),
    timeout
});

export const axiosPrivate = axios.create({
    baseURL: NODE_ENV(),
    timeout,
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('accessToken')
    }
});

export const axiosRefresh = axios.create({
baseURL: NODE_ENV(),
    timeout,
    headers: {
        'Content-Type': 'application/json',
        'x-refresh-token': localStorage.getItem('refreshToken')
    }
});

axiosPrivate.interceptors.response.use(undefined, async (error) => {
    if (error?.response?.status === 401) {
        await axiosRefresh.get('/refresh')
            .then((response) => {
                const newAccessToken = response.data.accessToken;

                localStorage.setItem('accessToken', newAccessToken);
                error.response.config.headers['x-access-token'] = newAccessToken;
                axiosPrivate.request(error.response.config);
            })
            .catch((err) => console.log(err));
    }
});
