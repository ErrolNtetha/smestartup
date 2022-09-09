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
