import {
    FETCH_SUPPLIER_SUCCESS, FETCH_SUPPLIER_ERROR
} from '../constants/action-types';

const initialState = {
    data: [],
    loading: true,
    error: null
};

export const supplierReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUPPLIER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case FETCH_SUPPLIER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
