import React, { Component } from "react";
import { API_KEY_3 } from "../../utils";
import MovieItem from "./Item";

class MoviesList extends Component {
  state = {
    movies: [],
    isLoading: false
  };
  componentDidMount() {
    this.getMoviesByType(this.props.type);
  }

  getMoviesByType = type => {
    this.setState({
      isLoading: true
    });
    fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY_3}&language=en-US&region=ru&page=1`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results,
          isLoading: false
        });
      });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.type !== this.props.type) {
      this.getMoviesByType(nextProps.type);
    }
  }

  render() {
    const { showMovie } = this.props;
    const { movies, isLoading } = this.state;
    if (isLoading) {
      return <p>Загрузка...</p>;
    }
    return (
      <div className="row">
        {movies.length > 0 ? (
          movies.map(movie => {
            return (
              <div key={movie.id} className="col-4 mb-4">
                <MovieItem item={movie} showMovie={showMovie} />
              </div>
            );
          })
        ) : (
          <p>Not films</p>
        )}
      </div>
    );
  }
}

export default MoviesList;
