import React from "react";

const MovieTabs = props => {
  const { sort_by, updateSortBy } = props;

  const handleSortBy = value => {
    return () => {
      updateSortBy(value);
    };
  };

  const getClassLink = value => {
    return `nav-link ${sort_by === value ? "active" : ""}`;
  };
  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={getClassLink("popularity.desc")}
          onClick={handleSortBy("popularity.desc")}
        >
          Popularity desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassLink("revenue.desc")}
          onClick={handleSortBy("revenue.desc")}
        >
          Revenue desk
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassLink("vote_average.desc")}
          onClick={handleSortBy("vote_average.desc")}
        >
          Vote average desk
        </div>
      </li>
    </ul>
  );
};

export default MovieTabs;
