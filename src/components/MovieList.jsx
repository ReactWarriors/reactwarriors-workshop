import React from "react";
import MovieItem from "./MovieItem";
import { API_KEY_3 } from "../utils";

export default class MovieList extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      movies: []
    };
  }

  componentDidMount() {
    // const link =
    //   "https://api.themoviedb.org/3/movie/now_playing?api_key=" +
    //   API_KEY_3 +
    //   "&language=en-US&region=ru&page=1";
    const link = `https://api.themoviedb.org/3/movie/${
      this.props.type
    }?api_key=${API_KEY_3}&language=en-US&region=ru&page=1`;
    setTimeout(() => {
      fetch(link)
        .then(response => {
          return response.json();
        })
        .then(data => {
          // console.log("data", data.results);
          this.setState({
            movies: data.results,
            isLoading: false
          });
        });
    }, 1500);
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log("old props", this.props);
    console.log("new props", nextProps);

    if (nextProps.type !== this.props.type) {
      this.setState({
        isLoading: true
      });

      const link = `https://api.themoviedb.org/3/movie/${
        nextProps.type
      }?api_key=${API_KEY_3}&language=en-US&region=ru&page=1`;
      setTimeout(() => {
        fetch(link)
          .then(response => {
            return response.json();
          })
          .then(data => {
            // console.log("data", data.results);
            this.setState({
              movies: data.results,
              isLoading: false
            });
          });
      });
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate");
  //   console.log(this.props, nextProps);
  //   console.log(this.state, nextState);

  //   if (nextProps.type === this.props.type && nextState !== this.state) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  render() {
    const { movies, isLoading } = this.state;
    console.log("render", this.props.type);
    return (
      <div className="row">
        {isLoading ? (
          <p>...Загрузка</p>
        ) : (
          movies.map((movie, index) => {
            return (
              <div key={index} className="col-6 mb-4">
                <MovieItem
                  item={movie}
                  increaseLike={this.props.increaseLike}
                  decreaseLike={this.props.decreaseLike}
                />
              </div>
            );
          })
        )}
      </div>
    );
  }
}
