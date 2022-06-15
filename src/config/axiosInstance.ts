import axios from 'axios';
import { NODE_ENV } from './baseURL';

export const axiosPublic = axios.create({
    baseURL: NODE_ENV(),
});

export const axiosPrivate = axios.create({
    baseURL: NODE_ENV(),
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('accessToken')
    }
});
