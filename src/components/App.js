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
    this.props.store.dispatch(setShowFavourites(val));
  };

  render() {
    const { movies, search } = this.props; // { movies: {}, search: [] }
    const { list, favourites = [], showFavourites = [] } = movies;

    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? '' : 'active-tabs'}`}
              onClick={() => this.changeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? 'active-tabs' : ''}`}
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
                  isFavourite={this.isMovieInFavourites(movie)}
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

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

function callback(state) {
  return {
    movies: state.movies,
    search: state.movies,
  };
}
const connectedComponent = connect(callback)(App);
export default connectedComponent;
