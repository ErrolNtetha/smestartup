import axios from 'axios';
import { NODE_ENV } from './baseURL';

const timeout = 60000;

export const axiosPublic = axios.create({
    baseURL: NODE_ENV(),
    timeout
});

export const axiosRegister = axios.create({
    baseURL: NODE_ENV(),
    timeout
});

axiosRegister.interceptors.request.use((config) => {
    const avatarObj = config.data.avatar;
    console.log(config.data);

    const reader = new FileReader();
    reader.readAsDataURL(avatarObj);
    reader.onload = () => {
        const dataOb = JSON.parse(config.data);
        dataOb.avatar = reader.result;
    };
    return config;
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
