import React from "react";

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      repeatPassword: ""
    };
  }
  componentDidMount() {
    console.log(this.refs);
    this.refs.inputUsername.focus();
  }

  handleChange = event => {
    // let newState = {};
    // newState[event.target.name] = event.target.value;
    // const newState = {
    //   [event.target.name]: event.target.value
    // };
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  submit = event => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="form-login-container" ref="container">
        <form className="form-login">
          <h1 className="h3 mb-3 font-weight-normal text-center">Sign in</h1>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              ref="inputUsername"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Repeat password</label>
            <input
              type="password"
              className="form-control"
              id="password2"
              name="repeatPassword"
              placeholder="Repeat password"
              value={this.state.repeatPassword}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-lg btn-primary btn-block"
            onClick={this.submit}
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
