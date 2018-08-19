import React, { Component } from "react";

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      willWatch: false
    };
  }

  // state = {
  //   willWatch: false,
  //   movie: this.props.item
  // };

  changeWillWatch = () => {
    this.setState({
      willWatch: !this.state.willWatch
    });
    this.props.addMovieToWillWatch(this.props.item);
  };

  render() {
    const { item } = this.props;
    const { willWatch } = this.state;
    return (
      <div className="col-6 mb-4">
        <div className="card" style={{ width: "100%" }}>
          <img
            className="card-img-top"
            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
              item.poster_path}`}
            alt=""
          />
          <div className="card-body">
            <h6 className="card-title">{item.title}</h6>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">Rating: {item.vote_average}</p>
              <button
                type="button"
                className={`btn ${willWatch ? "btn-success" : "btn-secondary"}`}
                onClick={this.changeWillWatch}
              >
                Will Watch
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
