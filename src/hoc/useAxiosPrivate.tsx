import { useEffect } from 'react';
import { useRefreshToken } from '../hoc/useRefreshToken';
import { axiosPrivate } from '../config/axiosInstance';

export const useAxiosPrivate = () => {
    const newToken = useRefreshToken();

    useEffect(() => {
        const requestInterceptor = axiosPrivate.interceptors.request.use((config) => {
            console.log(config.headers['x-access-token']);
        });

        const responseInterception = axiosPrivate.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error?.config;
                console.log('Previous request: ', prevRequest);
                console.log(error?.response?.status);

                const statusCode = error?.response?.status;
                if (statusCode === 403) {
                    prevRequest.sent = true;
                    // this is where we gonna be changing the access token
                    // and put in a new one
                    console.log(newToken);
                    prevRequest.headers['x-access-token'] = `Bearer ${newToken}`;
                    console.log(prevRequest);
                    // axiosPrivate.request(prevRequest);
                    return;
                }
                throw new Error(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.response.eject((responseInterception));
            axiosPrivate.interceptors.response.eject((requestInterceptor));
        };
    }, []);

    return axiosPrivate;
};
