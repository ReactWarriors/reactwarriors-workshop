import React, { useState } from "react";
import { movieTypes } from "../types/movie_types";

const MovieItem = ({
  data,
  deleteMovie,
  addMovieToWillWatch,
  deleteMovieFromWillWatch
}) => {
  const [willWatch, setWillWatch] = useState(false);
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w500${data.backdrop_path ||
          data.poster_path}`}
        alt=""
      />
      <div className="card-body">
        <h6 className="card-title">{data.title}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">Rating: {data.vote_average}</p>
          {willWatch ? (
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                setWillWatch(false);
                deleteMovieFromWillWatch(data);
              }}
            >
              Will Watch
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setWillWatch(true);
                addMovieToWillWatch(data);
              }}
            >
              Will Watch
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={() => {
            deleteMovie(data);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  data: movieTypes
};

export default MovieItem;
