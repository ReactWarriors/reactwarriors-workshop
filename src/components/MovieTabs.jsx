import React from "react";

export default class MovieTabs extends React.Component {
  // handleClick = event => {
  //   console.log(event.target.getAttribute("data-tab"));
  //   // this.props.changeTab(tab);
  // };

  handleClick = tab => {
    this.props.changeTab(tab);
  };

  render() {
    return (
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div
            className="nav-link active"
            onClick={this.handleClick.bind(this, "now_playing")}
          >
            Now playing
          </div>
        </li>
        <li className="nav-item">
          <div
            className="nav-link"
            data-tab="upcoming"
            onClick={this.handleClick.bind(this, "upcoming")}
          >
            Upcoming
          </div>
        </li>
        <li className="nav-item">
          <div
            className="nav-link"
            onClick={this.handleClick.bind(this, "popular")}
          >
            Popular
          </div>
        </li>
      </ul>
    );
  }
}
