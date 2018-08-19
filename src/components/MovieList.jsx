import React from "react";
import MovieItem from "./MovieItem";

export default class MovieList extends React.Component {
  render() {
    return (
      <div className="row mt-4">
        {this.props.movies.map(movie => {
          return (
            <MovieItem
              key={movie.id}
              item={movie}
              addMovieToWillWatch={this.props.addMovieToWillWatch}
            />
          );
        })}
      </div>
    );
  }
}
