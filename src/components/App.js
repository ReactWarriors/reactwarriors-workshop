import React from "react";
import { movies } from "./moviesData";
import MovieList from "./MovieList";
import MoviesWillWatch from "./MoviesWillWatch";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesWillWatch: []
    };
  }

  addMovieToWillWatch = movie => {
    const newMoviesWillWatch = [...this.state.moviesWillWatch];
    newMoviesWillWatch.push(movie);

    // const newMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: newMoviesWillWatch
    });
  };

  removeMovieFromWillWatch = movie => {
    const newMovieWillWatch = this.state.moviesWillWatch.filter(
      item => item.id !== movie.id
    );
    this.setState({
      moviesWillWatch: newMovieWillWatch
    });
  };

  render() {
    // console.log("App state", this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row mb-3">
              <div className="col-9">
                <MovieList
                  movies={movies}
                  addMovieToWillWatch={this.addMovieToWillWatch}
                  removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                />
              </div>
              <div className="col-3">
                <MoviesWillWatch moviesWillWatch={this.state.moviesWillWatch} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
