import { combineReducers } from 'redux';
import isLogged from './reducers/loggedReducer';
import toggleField from './reducers/toggleFieldReducer';

export const allReducers = combineReducers({
    isLogged,
    isToggleOn: toggleField,
});

export type RootState = ReturnType<typeof allReducers>