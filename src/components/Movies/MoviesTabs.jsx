import React, { Component } from "react";
import classNames from "classnames";

class MoviesTabs extends Component {
  checkActive = tab => {
    return classNames("nav-link", { active: tab === this.props.type });
  };

  render() {
    const { type, changeTab } = this.props;
    return (
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div
            className={this.checkActive("now_playing")}
            onClick={changeTab("now_playing")}
          >
            Now playing
          </div>
        </li>
        <li className="nav-item">
          <div
            className={this.checkActive("upcoming")}
            onClick={changeTab("upcoming")}
          >
            Upcoming
          </div>
        </li>
        <li className="nav-item">
          <div
            className={this.checkActive("popular")}
            onClick={changeTab("popular")}
          >
            Popular
          </div>
        </li>
      </ul>
    );
  }
}

export default MoviesTabs;
