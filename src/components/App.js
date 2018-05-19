import React from "react";

function MovieItem(props) {
  console.log("props", props);
  return (
    <div className="card">
      <img className="card-img-top" src="" alt="" />
      <div className="card-body">
        <h6 className="card-title">{props.title}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">Rating: {props.rating}</p>
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <div>
      <MovieItem title="Main title" rating={1} like={true} />
    </div>
  );
}

export default App;
