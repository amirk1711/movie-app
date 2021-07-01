// package imports
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// file imports
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log('ACTION', action);
    next(action);
  };

// create a Redux store
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

// Provider wraps up our React application and
// makes it aware of the entire Redux's store.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// The <Provider> component makes the
// Redux store available to any nested
// components that need to access the Redux store.
