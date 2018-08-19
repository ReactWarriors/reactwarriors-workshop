import React from "react";
import { movies } from "./moviesData";
import MovieList from "./MovieList";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row mb-3">
              <div className="col-12">
                <MovieList movies={movies} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
