import React from "react";
import movies from "./movies";
import MovieList from "./MovieList";
import MovieTabs from "./MovieTabs";

function LikeCounts({ likeCounts }) {
  return <p>Количество лайков: {likeCounts} </p>;
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      likeCounts: 0,
      type: "now_playing"
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

  changeTab = tab => {
    this.setState({
      type: tab
    });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate");
  //   console.log("old state", this.state);
  //   console.log("new state", nextState);
  //   return true;
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log("componentWillUpdate");
  //   console.log("old state", this.state);
  //   console.log("new state", nextState);
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("componentDidUpdate");
  //   console.log("old state", prevState);
  //   console.log("new state", this.state);
  // }

  render() {
    const { likeCounts } = this.state;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <LikeCounts likeCounts={likeCounts} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-4">
              <MovieTabs type={this.state.type} changeTab={this.changeTab} />
            </div>
          </div>
          <MovieList
            type={this.state.type}
            increaseLike={this.increaseLike}
            decreaseLike={this.decreaseLike}
          />
        </div>
      </div>
    );
  }
}

export default App;
