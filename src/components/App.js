import React from "react";
import { movie } from "./movies";

// const MovieItem = new React.Component()
class MovieItem extends React.Component {
  render() {
    // const item = props.item
    const { item } = this.props;
    console.log("component this", this);
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {item.vote_average}</p>
          </div>
        </div>
      </div>
    );
  }
}
function App() {
  return (
    <div>
      <MovieItem item={movie} />
    </div>
  );
}

export default App;
