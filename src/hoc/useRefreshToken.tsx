import { axiosPrivate } from 'config/axiosInstance';

export const useRefresh = () => {
    const refresh = async () => {
        axiosPrivate.get('/refresh')
            .then((res) => {
                console.log('Token: ', res.data);
            });
    };

    return refresh;
};
