import { combineReducers } from 'redux';
import isLogged from './reducers/loggedReducer';
import toggleField from './reducers/toggleFieldReducer';

const allReducers = combineReducers({
    isLogged,
    isToggleOn: toggleField,
});

export default allReducers;