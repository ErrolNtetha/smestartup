import { combineReducers } from 'redux';
import counterReducer from './reducers/reducer';

const allReducers = combineReducers({
    counter: counterReducer,
});

export default allReducers;