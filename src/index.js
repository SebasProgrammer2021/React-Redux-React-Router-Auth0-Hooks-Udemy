import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
// reducer1
// import RootReducer from './store/reducers/reducer1';

// combine reducers
import allReducers from './store/reducers';

import { createStore } from 'redux';

// let store = createStore(RootReducer);
let store = createStore(allReducers);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);