import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data';
import { addMovies } from '../actions';

class App extends React.Component {
    componentDidMount() {
        const { store } = this.props;
        store.subscribe(() => {
            console.log('Updated');
            this.forceUpdate();
        });
        // make api call to get all the movies

        // and then dispatch an action to add the movies to the store
        store.dispatch(addMovies(data));
    }

    render() {
        const movies = this.props.store.getState();
        return (
            <div className="App">
                <Navbar />
                <div className="main">
                    <div className="tabs">
                        <div className="tab">Movies</div>
                        <div className="tab">Favourites</div>
                    </div>

                    <div className="list">
                        {movies.map((movie, index) => {
                            return <MovieCard movie={movie} key={`movies-${index}`} />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;