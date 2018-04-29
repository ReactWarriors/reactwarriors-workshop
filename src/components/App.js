import React from "react";
import MovieList from "./MovieList";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      type: "now_playing"
    };
  }

  render() {
    const { type } = this.state;
    return (
      <div className="container">
        <MovieList type={type} />
      </div>
    );
  }
}

export default App;
