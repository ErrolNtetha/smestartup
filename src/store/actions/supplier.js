import { FETCH_SUPPLIER_SUCCESS } from '../constants/action-types';

export const fetchSupplier = (data) => {
    return {
        type: FETCH_SUPPLIER_SUCCESS,
        payload: data
    };
};
