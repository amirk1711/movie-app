import {
    ADD_MOVIES,
    ADD_TO_FAVOURITES,
    REMOVE_FROM_FAVOURITES,
    SET_SHOW_FAVOURITES,
    ADD_MOVIE_TO_LIST,
    ADD_SEARCH_RESULT,
} from '../actions';
import { combineReducers } from 'redux';

const intialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false,
};
export function movies(state = intialMoviesState, action) {
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies,
            };
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                // add the movie to the favourites list
                favourites: [action.movie, ...state.favourites],
            };
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
                (movie) => movie.Title !== action.movie.Title
            );
            return {
                ...state,
                favourites: filteredArray,
            };
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val,
            };
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list: [action.movie, ...state.list],
            };

        default:
            return state;
    }
}

const intialSearchState = {
    result: {},
    showSearchResults: false,
};
export function search(state = intialSearchState, action) {
    switch (action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                results: action.movie,
                showSearchResults: true,
            };
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResults: false,
            };
        default:
            return state;
    }
}

export default combineReducers({
    movies: movies,
    search: search,
});
