import React from "react";

const MovieTabs = props => {
  const { sort_by, updateSortBy } = props;
  // const handleClick = value => () => {
  //     updateSortBy(value);
  //   };
  // };
  const handleClick = value => {
    return event => {
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
          // className={`nav-link ${
          //   sort_by === "popularity.desc" ? "active" : ""
          // }`}
          className={getClassLink("popularity.desc")}
          onClick={handleClick("popularity.desc")}
        >
          Popularity desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassLink("revenue.desc")}
          onClick={handleClick("revenue.desc")}
        >
          Revenue desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassLink("vote_average.desc")}
          onClick={handleClick("vote_average.desc")}
          // onClick={event => {
          //   updateSortBy("vote_average.desc");
          // }}
        >
          Vote avetage desc
        </div>
      </li>
    </ul>
  );
};

export default MovieTabs;
