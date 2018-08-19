import React from "react";
import MovieItem from "./MovieItem";
import { API_KEY_3 } from "../utils";

export default class MovieList extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isFetched: false
    };
  }

  componentDidMount() {
    const link = `https://api.themoviedb.org/3/movie/${
      this.props.type
    }?api_key=${API_KEY_3}&language=en-US&region=ru&page=1`;
    fetch(link)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results,
          isFetched: true
        });
      });
  }

  componentWillReceiveProps(nextProps) {
    console.log("old props", this.props);
    console.log("componentWillReceiveProps nextProps", nextProps);
    if (nextProps.type !== this.props.type) {
      this.setState({
        isFetched: false
      });
      const link = `https://api.themoviedb.org/3/movie/${
        nextProps.type
      }?api_key=${API_KEY_3}&language=en-US&region=ru&page=1`;
      fetch(link)
        .then(response => response.json())
        .then(data => {
          this.setState({
            movies: data.results,
            isFetched: true
          });
        });
    }
  }

  render() {
    // console.log("props", this.props);
    return (
      <div className="row mt-4">
        {this.state.isFetched ? (
          this.state.movies.map(movie => {
            return (
              <MovieItem
                key={movie.id}
                item={movie}
                addMovieToWillWatch={this.props.addMovieToWillWatch}
                removeMovieFromWillWatch={this.props.removeMovieFromWillWatch}
              />
            );
          })
        ) : (
          <p>...Loading</p>
        )}
      </div>
    );
  }
}
