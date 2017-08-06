import { combineReducers } from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import auth from './auth';


const reducers = combineReducers({
    auth,
    firebase: firebaseStateReducer,
});

export default reducers;
