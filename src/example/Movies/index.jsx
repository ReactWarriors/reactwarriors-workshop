import React, { Component } from "react";
import { API_KEY_3 } from "../../utils";
import MoviesList from "./MoviesList";
import MoviesTabs from "./MoviesTabs";
import MovieModal from "./MovieModal";
import Navigation from "./Navigation";
import $ from "jquery";

class MoviesApp extends Component {
  state = {
    type: "now_playing",
    favourites: [],
    showMovieId: null
  };

  changeTab = tab => () => {
    this.setState({
      type: tab
    });
  };

  showMovie = id => () => {
    this.setState({
      showMovieId: id
    });
    $("#movieModal").modal("show");
  };

  render() {
    const { type, favourites, showMovieId } = this.state;
    const { user } = this.props;
    return (
      <div>
        <Navigation user={user} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row mb-3">
                <div className="col-12">
                  <MoviesTabs type={type} changeTab={this.changeTab} />
                </div>
              </div>
              <MoviesList type={type} showMovie={this.showMovie} />
            </div>
          </div>
        </div>
        <MovieModal movieId={showMovieId} />
      </div>
    );
  }
}

export default MoviesApp;
