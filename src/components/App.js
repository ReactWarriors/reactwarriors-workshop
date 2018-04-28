import React from "react";
// import MovieItem from "./MovieItem";
import { API_KEY_3 } from "../utils";

class App extends React.Component {
  componentDidMount() {
    const link = `https://api.themoviedb.org/3/movie/299536?api_key=${API_KEY_3}&language=en-US&region=ru`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        // update this.state.movie, this.state.isFetched
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">{/*
            <MovieItem />
          */}</div>
      </div>
    );
  }
}

export default App;
