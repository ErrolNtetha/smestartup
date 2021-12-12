import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import counterReducer from './reducers/incrementReducer';
import isLogged from './reducers/loggedReducer';

const allReducers = combineReducers({
    counter: counterReducer,
    form: formReducer,
    isLogged,
});

export default allReducers;