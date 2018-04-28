import React, { Component } from "react";
import LoginForm from "./Login";
import MoviesApp from "./Movies";

class App extends Component {
  state = {
    user: null
  };

  updateUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    const { user } = this.state;
    return (
      <div>
        {user ? (
          <MoviesApp user={user} />
        ) : (
          <LoginForm updateUser={this.updateUser} />
        )}
      </div>
    );
  }
}

export default App;
