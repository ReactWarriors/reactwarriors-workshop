import React from "react";
import movies from "./movies";
import MovieItem from "./MovieItem";

function LikeCounts({ likeCounts }) {
  return <p>Количество лайков: {likeCounts} </p>;
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: movies,
      likeCounts: 0
    };
  }

  increaseLike = () => {
    console.log("increase like");
    this.setState({
      likeCounts: this.state.likeCounts + 1
    });
  };

  decreaseLike = () => {
    console.log("decrease like");
    this.setState({
      likeCounts: this.state.likeCounts - 1
    });
  };

  render() {
    const { movies, likeCounts } = this.state;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <LikeCounts likeCounts={likeCounts} />
            </div>
          </div>
          <div className="row">
            {movies.map((movie, index) => {
              return (
                <div key={index} className="col-6 mb-4">
                  <MovieItem
                    item={movie}
                    increaseLike={this.increaseLike}
                    decreaseLike={this.decreaseLike}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
