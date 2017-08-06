import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { dispatchAsync } from './async-dispatcher';
import { checkAuthState } from './actions/auth';
import store from './services/store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

