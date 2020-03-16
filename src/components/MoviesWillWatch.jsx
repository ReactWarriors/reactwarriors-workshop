import React from "react";
import PropTypes from "prop-types";
import { movieTypes } from "../types/movie_types";

export default class MoviesWillWatch extends React.Component {
  static propTypes = {
    moviesWillWatch: PropTypes.arrayOf(movieTypes)
  };
  render() {
    const { moviesWillWatch } = this.props;
    return (
      <ul className="list-group">
        {moviesWillWatch.map(movie => (
          <li key={movie.id} className="list-group-item">
            <div className="d-flex justify-content-between">
              <p>{movie.title}</p>
              <p>{movie.vote_average}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
