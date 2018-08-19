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
    console.log(movie);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row mb-3">
              <div className="col-9">
                <MovieList
                  movies={movies}
                  addMovieToWillWatch={this.addMovieToWillWatch}
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
