import axios from 'axios';
import { BASE_URL } from './baseURL';

export const axiosPublic = axios.create({
    baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('accessToken')
    }
});
