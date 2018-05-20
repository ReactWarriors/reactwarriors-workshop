import React from "react";
// import PropTypes from "prop-types";
import MovieItem from "./MovieItem";
import { API_KEY_3 } from "../utils";

export default class MovieList extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isFetched: false
    };
  }

  getMovies = type => {
    const link = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY_3}&language=en-US&region=ru&page=1`;

    setTimeout(() => {
      fetch(link)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({
            movies: data.results,
            isFetched: true
          });
        });
    }, 1500);
  };
  componentDidMount() {
    this.getMovies(this.props.type);
  }

  componentWillReceiveProps(nextProps, nextState) {
    // console.log("componentWillReceiveProps");
    // console.log("props", this.props);
    // console.log("new props", nextProps);

    if (nextProps.type !== this.props.type) {
      // fetch
      this.setState({
        isFetched: false
      });
      this.getMovies(nextProps.type);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
  }

  render() {
    // console.log("MovieList state", this.state);
    console.log("render props", this.props);
    return (
      <div className="row">
        {this.state.isFetched ? (
          this.state.movies.map(item => {
            return (
              <div className="col-6 mb-4" key={item.id}>
                <MovieItem
                  item={item}
                  addLike={this.props.addLike}
                  unLike={this.props.unLike}
                />
              </div>
            );
          })
        ) : (
          <p>...Loading</p>
        )}
      </div>
    );
  }
}
