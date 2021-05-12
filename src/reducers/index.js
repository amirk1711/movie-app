import { ADD_MOVIES } from '../actions';

export default function movies(state = [], action) {
    if(action.type === ADD_MOVIES){
        return action.movies;
    }
    // our current state will not be changed by reducer
    // reducer will return a new state(action.movies) and 
    // it will be merged with the current state
    return state;
}