import { compose, createStore } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';

import reducers from '../reducers';

const config = {
    apiKey: "AIzaSyDpHCViwJJB1d1DYAIZSPeEir4yJG98j2o",
    authDomain: "devcform.firebaseapp.com",
    databaseURL: "https://devcform.firebaseio.com",
    projectId: "devcform",
    storageBucket: "devcform.appspot.com",
    messagingSenderId: "273352750225"
};

const createStoreWithFirebase = compose(
    reactReduxFirebase(config, { userProfile: 'users' }),
)(createStore);

export default createStoreWithFirebase(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

