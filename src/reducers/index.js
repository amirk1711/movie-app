import { ADD_MOVIES } from '../actions';

const intialMoviesState = {
    list: [],
    favourites: []
}
export default function movies(state = intialMoviesState, action) {
    if(action.type === ADD_MOVIES){
        return {
            ...state,
            list: action.movies
        }
    }
    // our current state will not be changed by reducer
    // reducer will return a new state(action.movies) and 
    // it will be merged with the current state
    return state;
}