import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data as moviesList } from '../data';
import { addMovies, setShowFavourites } from '../actions';

class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(addMovies(moviesList));
    }

    isMovieInFavourites = (movie) => {
        const { movies } = this.props;
        const index = movies.favourites.indexOf(movie);
        if (index !== -1) {
            // found the movie
            return true;
        }
        return false;
    };

    changeTab = (val) => {
        this.props.dispatch(setShowFavourites(val));
    };

    render() {
        const { movies, search } = this.props;
        const { list, favourites, showFavourites } = movies;

        const displayMovies = showFavourites ? favourites : list;
        return (
            <div className="App">
                <Navbar search={search} />
                <div className="main">
                    <div className="tabs">
                        <div
                            className={`tab ${
                                showFavourites ? '' : 'active-tabs'
                            }`}
                            onClick={() => this.changeTab(false)}
                        >
                            Movies
                        </div>
                        <div
                            className={`tab ${
                                showFavourites ? 'active-tabs' : ''
                            }`}
                            onClick={() => this.changeTab(true)}
                        >
                            Favourites
                        </div>
                    </div>

                    <div id="list">
                        {displayMovies.map((movie) => {
                            return (
                                <MovieCard
                                    movie={movie}
                                    key={movie.imdbID}
                                    dispatch={this.props.dispatch}
                                    isFavourite={this.isMovieInFavourites(
                                        movie
                                    )}
                                />
                            );
                        })}

                        {displayMovies.length === 0 ? (
                            <div className="no-movies">No movies to show</div>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

// by mapping state to props, movies and search properties
// will be available into the App component as props
function mapStateToProps(state) {
    return {
        movies: state.movies,
        search: state.search,
    };
}
const connectedComponent = connect(mapStateToProps)(App);
export default connectedComponent;
