import React from "react";

export default class MoviesWillWatch extends React.Component {
  render() {
    const { moviesWillWatch } = this.props;
    return (
      <div>
        <h4>Will Watch: {moviesWillWatch.length} movies</h4>
        <ul className="list-group">
          {moviesWillWatch.map((movie, index) => {
            return (
              <li className="list-group-item" key={index}>
                <div className="d-flex justify-content-between">
                  <div>title</div>
                  <div>vote_average</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
