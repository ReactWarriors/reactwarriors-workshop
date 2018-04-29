import React from "react";
import MovieTabs from "./MovieTabs";
import MovieList from "./MovieList";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      type: "now_playing",
      showList: true,
      user: null
    };
  }

  changeTab = tab => {
    this.setState({
      type: tab
    });
  };

  render() {
    const { type } = this.state;
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <button
            onClick={() => {
              this.forceUpdate();
            }}
          >
            Update
          </button>
          <button
            onClick={() => {
              this.setState({
                showList: false
              });
            }}
          >
            Hide list
          </button>
          <MovieTabs type={type} changeTab={this.changeTab} />
          {this.state.showList ? <MovieList type={type} /> : null}
        </div>
      </div>
    );
  }
}

export default App;
