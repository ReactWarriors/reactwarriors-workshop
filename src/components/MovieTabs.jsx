import React from "react";
import classNames from "classnames";

export default class MovieTabs extends React.Component {
  getClassName = type =>
    this.props.type === type ? "nav-link active" : "nav-link";
  render() {
    return (
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div
            className={this.getClassName("now_playing")}
            onClick={event => {
              this.props.changeTab("now_playing");
            }}
            // data-type="now_playing"
          >
            Now playing
          </div>
        </li>
        <li className="nav-item">
          <div
            className={classNames("nav-link", {
              active: this.props.type === "upcoming"
            })}
            onClick={event => {
              this.props.changeTab("upcoming");
            }}
          >
            Upcoming
          </div>
        </li>
        <li className="nav-item">
          <div
            className={
              this.props.type === "popular" ? "nav-link active" : "nav-link"
            }
            onClick={event => {
              this.props.changeTab("popular");
            }}
          >
            Popular
          </div>
        </li>
      </ul>
    );
  }
}
