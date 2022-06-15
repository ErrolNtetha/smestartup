import { axiosInstance } from 'config/axiosInstance';

export const fetchProfile = (user) => {
    return {
        type: 'FETCH_PROFILE',
        payload: user
    };
};

export const fetchSuccess = () => {
    return {
        type: 'FETCH_SUCCESS'
    };
};

export const fetchError = () => {
    return {
        type: 'FETCH_ERROR'
    };
};

export const fetchLoader = (loading) => {
    return {
        type: 'FETCH_LOADER',
        payload: loading
    };
};

export const getProfile = () => async (dispatch, getState) => {
    console.log('middleware ran');
    console.log(getState());
    await axiosInstance.get('/profile')
        .then((res) => {
            console.log(res.data);
            dispatch({ type: 'FETCH_PROFILE', payload: res.data });
            dispatch(fetchLoader(false));
        })
        .then((err) => {
            console.log(err);
            dispatch(fetchError());
        });
};
