import React from "react";
import MovieTabs from "./MovieTabs";
import MovieList from "./MovieList";
import LoginForm from "./LoginForm";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      type: "now_playing",
      showList: true,
      user: null,
      session_id: null
    };
  }

  changeTab = tab => {
    this.setState({
      type: tab
    });
  };

  getSession = session_id => {
    console.log(session_id);
    this.setState({
      session_id: session_id
    });
  };

  render() {
    const { type, session_id } = this.state;
    return (
      <div>
        {session_id ? (
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
        ) : (
          <LoginForm getSession={this.getSession} />
        )}
      </div>
    );
  }
}

export default App;
