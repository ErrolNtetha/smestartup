import { combineReducers } from 'redux';
import isLogged from './reducers/loggedReducer';
import toggleField from './reducers/toggleFieldReducer';
import { profileReducer } from './reducers/profileReducer';
import { usersListReducers } from './reducers/usersList';
import toggleMenu from './reducers/toggleMenu';
import { supplierReducer } from './reducers/supplierReducer';

export const allReducers = combineReducers({
    isLogged,
    isToggleOn: toggleField,
    userProfile: profileReducer,
    data: usersListReducers,
    navbar: toggleMenu,
    supplier: supplierReducer
});

export type RootState = ReturnType<typeof allReducers>
