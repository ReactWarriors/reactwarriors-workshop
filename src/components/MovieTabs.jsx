import React from "react";

export default class MovieTabs extends React.Component {
  render() {
    const { type } = this.props;
    return (
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div
            className={type === "now_playing" ? "nav-link active" : "nav-link"}
            onClick={() => {
              this.props.changeTab("now_playing");
            }}
          >
            Now playing
          </div>
        </li>
        <li className="nav-item">
          <div
            className={type === "upcoming" ? "nav-link active" : "nav-link"}
            onClick={this.props.changeTab.bind(this, "upcoming")}
          >
            Upcoming
          </div>
        </li>
        <li className="nav-item">
          <div
            className={type === "popular" ? "nav-link active" : "nav-link"}
            onClick={this.props.changeTab.bind(this, "popular")}
          >
            Popular
          </div>
        </li>
      </ul>
    );
  }
}
