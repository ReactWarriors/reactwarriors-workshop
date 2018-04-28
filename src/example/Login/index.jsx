import React, { Component } from "react";
import { API_KEY_3 } from "../../utils";
import classNames from "classnames";

class LoginForm extends Component {
  state = {
    isLoading: false,
    username: "",
    password: "",
    password2: "",
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      errors: {}
    });
  };

  validateFields = () => {
    const errors = {};

    if (this.state.username === "") {
      errors.username = "Not empty";
    }

    if (this.state.password === "") {
      errors.password = "Not empty";
    }

    if (this.state.password !== this.state.password2) {
      errors.password2 = "Passwords must be equal";
    }

    this.setState(
      {
        errors: errors
      },
      () => {
        if (Object.keys(this.state.errors).length === 0) {
          this.setState({
            isLoading: true
          });
          fetch(
            `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY_3}`
          )
            .then(response => response.json())
            .then(data => {
              const { request_token } = data;
              fetch(
                `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_KEY_3}&username=${
                  this.state.username
                }&password=${this.state.password}
              &request_token=${request_token}`
              )
                .then(response => {
                  if (response.status < 400) {
                    return response.json();
                  } else {
                    throw "Invalid username and/or password";
                  }
                })
                .then(data => {
                  fetch(
                    `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY_3}&request_token=${request_token}`
                  )
                    .then(response => response.json())
                    .then(data => {
                      this.getUser(data.session_id);
                    });
                })
                .catch(error => {
                  this.setState({
                    errors: {
                      base: error
                    },
                    isLoading: false
                  });
                });
            });
        }
      }
    );
  };

  onLogin = e => {
    e.preventDefault();
    this.validateFields();
  };

  getUser = session_id => {
    fetch(
      `https://api.themoviedb.org/3/account?api_key=${API_KEY_3}&session_id=${session_id}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false
        });
        this.props.updateUser(data);
      });
  };

  render() {
    const { username, password, password2, isLoading, errors } = this.state;
    return (
      <div className="form-login-container">
        <form className="form-login">
          <h1 className="h3 mb-3 font-weight-normal text-center">Sign in</h1>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className={classNames("form-control", {
                invalid: errors.base || errors.username
              })}
              id="username"
              placeholder="Username"
              name="username"
              value={username}
              onChange={this.onChange}
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className={classNames("form-control", {
                invalid: errors.base || errors.password
              })}
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.onChange}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password2">Repeat password</label>
            <input
              type="password"
              className={classNames("form-control", {
                invalid: errors.base || errors.password2
              })}
              id="password2"
              placeholder="Repeat password"
              name="password2"
              value={password2}
              onChange={this.onChange}
            />
            {errors.password2 && (
              <div className="invalid-feedback">{errors.password2}</div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-lg btn-primary btn-block"
            onClick={this.onLogin}
            disabled={isLoading}
          >
            Sign in
          </button>
          {errors.base && <div className="invalid-feedback">{errors.base}</div>}
        </form>
      </div>
    );
  }
}

export default LoginForm;
