import React from "react";
import { movies } from "./movies";
// import PropTypes from "prop-types";
import MovieItem from "./MovieItem";

class MovieList extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: movies
    };
  }
  render() {
    // console.log("MovieList state", this.state);
    // console.log("MovieList props", this.props);
    return (
      <div className="row">
        {this.state.movies.map(item => {
          return (
            <div className="col-6 mb-4">
              <MovieItem item={item} addLike={this.props.addLike} />
            </div>
          );
        })}
      </div>
    );
  }
}

const LikeCounts = props => {
  console.log("LikeCounts props", props);
  return <p>Количество лайков: {props.counts}</p>;
};
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counts: 0
    };
  }

  addLike = () => {
    console.log("add like");
    this.setState({
      counts: this.state.counts + 1
    });
  };
  render() {
    return (
      <div className="container">
        <LikeCounts counts={this.state.counts} />
        <MovieList addLike={this.addLike} />
      </div>
    );
  }
}

export default App;
