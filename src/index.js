// package imports
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

// file imports
import './index.css';
import App from './components/App';
import combineReducers from './reducers';

// curried form of function(obj, next, action){}
// this obj contains 2 properties {dispatch, getState}
// same functions as in store
// internal working => logger(obj)(next)(action)

// const logger = function({ dispatch, getState }) {
//     return function(next){
//         return function(action){
//             // middleware code
//             console.log('ACTION_TYPE', action.type);
//             // to call next middleware
//             next(action);
//         }
//     }
// }

const logger = ({ dispatch, getState }) => (next) => (action) => {
    // middleware code
    console.log('ACTION_TYPE', action.type);
    // to call next middleware
    next(action);
}

// create a Redux store using 'movies'
// as a root reducer function
const store = createStore(combineReducers, applyMiddleware(logger));

ReactDOM.render(
	<React.StrictMode>
		<App store={store} />
	</React.StrictMode>,
	document.getElementById('root')
);