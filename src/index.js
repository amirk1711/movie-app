// package imports
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// file imports
import './index.css';
import App from './components/App';
import movies from './reducers';

// create a Redux store using 'movies'
// as a root reducer function
const store = createStore(movies);

ReactDOM.render(
	<React.StrictMode>
		<App store={store} />
	</React.StrictMode>,
	document.getElementById('root')
);