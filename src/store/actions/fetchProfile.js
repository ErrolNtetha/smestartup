import { axiosPrivate } from 'config/axiosInstance';

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

export const fetchError = (error) => {
    return {
        type: 'FETCH_ERROR',
        paylaod: error
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
    await axiosPrivate.get('/profile')
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
