import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import storeFactory from './redux/store.js';
import App from './components/App.js';

import './index.css';

const store = storeFactory();
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
