import React from "react";
// import { moviesData } from "../moviesData";
import MoviesPage from "./MoviesPage";
import LoginForm from "./LoginForm";
// UI = fn(state, props)

// App = new React.Component()

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isAuth: false
    };
  }

  render() {
    return this.state.isAuth ? <MoviesPage /> : <LoginForm />;
  }
}

export default App;
