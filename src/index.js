// package imports
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// file imports
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

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
    console.log('ACTION', action);
    // to call next middleware
    next(action);
  };

// const thunk = store => next => action => {
//     if(typeof action === 'function'){
//         return action(store.dispatch);
//     }

//     next(action);
// };

// create a Redux store
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log('state', store.getState());

// export const StoreContext = createContext();
// console.log('StoreContext', StoreContext);

// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

// update store by dispatching actions
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: moviesList
// });
// console.log('state', store.getState());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);