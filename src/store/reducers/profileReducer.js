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
                loading: false,
                userData: action.payload,
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                success: action.payload
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case 'FETCH_LOADER':
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
};
