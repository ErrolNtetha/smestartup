export const fetchUsers = (usersData) => {
    return {
        type: 'FETCH_USERS',
        payload: usersData
    };
};

export const fetchUsersError = (errorData) => {
    return {
        type: 'FETCH_USERS_ERROR',
        payload: errorData
    };
};

export const fetchUsersLoading = () => {
    return {
        type: 'FETCH_USERS_LOADING',
    };
};
