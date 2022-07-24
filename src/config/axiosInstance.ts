import axios from 'axios';
import { NODE_ENV } from './baseURL';

const timeout = 30000;

export const axiosPublic = axios.create({
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
