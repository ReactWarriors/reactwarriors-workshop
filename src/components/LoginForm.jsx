import React from "react";
import classNames from "classnames";
import "./index.css";
export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      repeatPassword: "",
      errors: {},
      disabled: false
    };
  }
  componentDidMount() {
    this.refs.inputUsername.focus();
  }

  handleChange = event => {
    // let newState = {};
    // newState[event.target.name] = event.target.value;
    // const newState = {
    //   [event.target.name]: event.target.value
    // };
    this.setState({
      [event.target.name]: event.target.value,
      errors: {}
    });
  };
  submit = event => {
    event.preventDefault();
    const errors = {};
    ["username", "password", "repeatPassword"].forEach(key => {
      if (this.state[key] === "") {
        errors[key] = "Must not empty";
      }
    });
    this.setState({
      disabled: true
    });
    setTimeout(() => {
      this.setState({
        errors: errors,
        disabled: false
      });
    }, 2000);
  };

  render() {
    console.log(this.state);
    return (
      <div className="form-login-container" ref="container">
        <form className="form-login">
          <h1 className="h3 mb-3 font-weight-normal text-center">Sign in</h1>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className={classNames("form-control", {
                invalid: this.state.errors.username
              })}
              id="username"
              placeholder="Username"
              ref="inputUsername"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            {this.state.errors.username ? (
              <div className="invalid-feedback">
                {this.state.errors.username}
              </div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className={classNames("form-control", {
                invalid: this.state.errors.password
              })}
              id="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            {this.state.errors.password ? (
              <div className="invalid-feedback">
                {this.state.errors.password}
              </div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="password2">Repeat password</label>
            <input
              type="password"
              className="form-control"
              id="password2"
              name="repeatPassword"
              className={classNames("form-control", {
                invalid: this.state.errors.repeatPassword
              })}
              placeholder="Repeat password"
              value={this.state.repeatPassword}
              onChange={this.handleChange}
            />
            {this.state.errors.repeatPassword ? (
              <div className="invalid-feedback">
                {this.state.errors.repeatPassword}
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            className="btn btn-lg btn-primary btn-block"
            onClick={this.submit}
            disabled={this.state.disabled}
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
