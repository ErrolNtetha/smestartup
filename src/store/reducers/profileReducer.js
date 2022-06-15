const initialState = {
    userData: [],
    loading: true,
    error: null,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PROFILE':
            return {
                ...state,
                userData: action.payload,
            };
        case 'FETCH_SUCCESS':
            return state.success = action.payload;
        case 'FETCH_ERROR':
            return state.error = action.payload;
        case 'FETCH_LOADER':
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
};
