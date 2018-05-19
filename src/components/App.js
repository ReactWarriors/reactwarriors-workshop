import React from "react";
import { movies } from "./movies";
// import PropTypes from "prop-types";
import MovieItem from "./MovieItem";

class MovieList extends React.Component {
  render() {
    console.log("MovieList props", this.props);
    return (
      <div className="row">
        {this.props.items.map(item => {
          return (
            <div className="col-6 mb-4">
              <MovieItem item={item} />
            </div>
          );
        })}
      </div>
    );
  }
}
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: movies
    };
  }
  render() {
    return (
      <div className="container">
        <MovieList items={this.state.movies} />
      </div>
    );
  }
}

export default App;
