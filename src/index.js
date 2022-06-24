// import '@csstools/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import App from './App.tsx';
import { allReducers } from './store';

const persistConfig = {
    key: 'persist-key',
    storage
};

const persistAllReducer = persistReducer(persistConfig, allReducers);

// create a store
const store = createStore(persistAllReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <HelmetProvider>
        <App />
    </HelmetProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
