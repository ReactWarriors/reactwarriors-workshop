import React, { Component } from "react";
import movie from "./movie";

function MovieItem(props) {
  const {
    item = {
      title: "React"
    }
  } = props;
  return (
    <div className="card" style={{ width: "300px" }}>
      <img className="card-img-top" src={item.backdrop_path} alt="" />
      <div className="card-body">
        <h6 className="card-title">{item.title}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">Rating: {item.vote_average}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <MovieItem item={movie} />
    </div>
  );
}

export default App;
