const initialState = {
    data: [],
    error: null,
    loading: true
};

export const usersListReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case 'FETCH_USERS_ERROR':
            return {
                data: [],
                error: action.payload,
                loading: false
            };
        case 'FETCH_USERS_LOADING':
            return state.loading = false;
        default:
            return state;
    }
};
