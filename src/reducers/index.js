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
    return state;
}

export default combineReducers({
    movies: movies,
    search: search
});