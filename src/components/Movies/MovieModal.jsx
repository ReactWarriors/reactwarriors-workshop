import React, { Component } from "react";
import { API_KEY_3 } from "../../utils";
import moment from "moment";

class MovieModal extends Component {
  state = {
    movie: null,
    isLoading: false
  };
  componentDidMount() {
    this.props.movieId && this.getMovie(this.props.movieId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.movieId !== this.props.movieId) {
      this.getMovie(nextProps.movieId);
    }
  }

  getMovie = movieId => {
    this.setState({
      isLoading: true
    });
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY_3}&language=en-Us`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          movie: data,
          isLoading: false
        });
      });
  };

  render() {
    const { movie, isLoading } = this.state;
    return (
      <div
        className="modal fade"
        tabIndex="-1"
        role="dialog"
        id="movieModal"
        aria-labelledby="movieModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog  modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            {!isLoading && movie ? (
              <div className="container">
                <div className="row">
                  <div className="col-5">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${
                        movie.poster_path
                      }`}
                      width="100%"
                      alt=""
                    />
                  </div>
                  <div className="col-7">
                    <h3>
                      {movie.title} ({moment(
                        movie.release_date,
                        "YYYY-MM-DD"
                      ).format("YYYY")})
                    </h3>
                    <h6>Overview</h6>
                    <p>{movie.overview}</p>
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieModal;
