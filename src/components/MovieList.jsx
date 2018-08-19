import React from "react";
import MovieItem from "./MovieItem";

export default class MovieList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="row mt-4">
        {this.props.movies.map(movie => {
          return <MovieItem key={movie.id} item={movie} />;
        })}
      </div>
    );
  }
}
