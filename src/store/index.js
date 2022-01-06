import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import counterReducer from './reducers/incrementReducer';
import isLogged from './reducers/loggedReducer';
import toggleField from './reducers/toggleFieldReducer';

const allReducers = combineReducers({
    counter: counterReducer,
    form: formReducer,
    isLogged,
    isToggleOn: toggleField,
});

export default allReducers;