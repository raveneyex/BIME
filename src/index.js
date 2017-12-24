import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import storeFactory from './redux/store.js';
import { AppContainer } from './components/containers.js';

const store = storeFactory();
render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
