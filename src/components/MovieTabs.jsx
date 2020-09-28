import React from "react";

const MovieTabs = (props) => {
  const { sort_by, updateSortBy } = props;
  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div 
          className={`nav-link ${sort_by === "popularity.desc" ? "active":""}`} 
          onClick = {() => {
            updateSortBy("popularity.desc")
          }}>
          Popularity desc
        </div>
      </li>
      <li className="nav-item">
      <div 
        className={`nav-link ${sort_by === "revenue.desc" ? "active":""}`}
        onClick = {() => {
        updateSortBy("revenue.desc")
      }}>
        Revenue desc
      </div>
      </li>
      <li className="nav-item">
      <div 
        className={`nav-link ${sort_by === "vote_average.desc" ? "active":""}`}
        onClick = {() => {
          updateSortBy("vote_average.desc")
        }}>
        Vote average desc
      </div>
      </li>
    </ul>
  );
};

export default MovieTabs;
