import { combineReducers } from 'redux';
import { 
    ADD_MOVIES, 
    ADD_TO_FAVOURITES, 
    REMOVE_FROM_FAVOURITES, 
    SET_SHOW_FAVOURITES 
} from '../actions';

const intialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export function movies(state = intialMoviesState, action) {
    console.log('MOVIES REDUCER');

    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // // our current state will not be changed by reducer
    // // reducer will return a new state(action.movies) and 
    // // it will be merged with the current state
    // return state;


    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                // add the movie to the favourites list
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(movie => movie.Title !== action.movie.Title);
            return {
                ...state,
                favourites: filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        default:
            return state;
    }
}

const intialSearchState = {
    result: {}
};

export function search (state = intialSearchState, action) {
    console.log('SEARCH REDUCER');
    return state;
}

// const initialRootState = {
//     movies: intialMoviesState,
//     search: intialSearchState
// }

// export default function rootReducer (state = initialRootState, action) {
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

export default combineReducers({
    movies: movies,
    search: search
});