import React, { PureComponent } from "react";

class MovieItem extends PureComponent {
  render() {
    const { item, showMovie } = this.props;
    return (
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
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#movieModal"
              onClick={showMovie(item.id)}
            >
              More
            </button>
            {/*
            <img src="/images/unfav.svg" alt="" />
            */}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
