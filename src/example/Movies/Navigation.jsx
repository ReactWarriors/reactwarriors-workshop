import React, { Component } from "react";

class Navigation extends Component {
  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary navigation">
        <a className="navbar-brand">MovieApp</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Search</a>
            </li>
          </ul>
          <div className="my-2 my-lg-0">
            <div className="d-flex align-items-center">
              <img
                width="40px"
                className="rounded-circle mr-2"
                src={`https://secure.gravatar.com/avatar/${
                  user.avatar.gravatar.hash
                }.jpg?s=64"`}
                alt=""
              />
              <h6 className="mb-0">{user.username}</h6>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
