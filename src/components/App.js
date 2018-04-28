import React from "react";
import MovieItem from "./MovieItem";
import { API_KEY_3 } from "../utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isFetched: false
    };
  }

  componentDidMount() {
    // let link = "https://api.themoviedb.org/3/movie/now_playing?api_key=";
    // link = link + API_KEY_3;
    // link = link + "&language=en-US&region=ru&page=1";
    // console.log(link);
    setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY_3}&language=en-US&region=ru&page=1`
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({
            movies: data.results,
            isFetched: true
          });
        });
    }, 5000);
  }

  render() {
    // console.log("state of App", this.state);
    return (
      <div className="container">
        <div className="row">
          {this.state.isFetched ? (
            this.state.movies.map(item => {
              return (
                <div className="col-6" key={item.id}>
                  <MovieItem item={item} />
                </div>
              );
            })
          ) : (
            <p>...Loading</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
