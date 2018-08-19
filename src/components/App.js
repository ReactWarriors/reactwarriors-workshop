import React from "react";
import MovieItem from "./MovieItem";

const movie = {
  backdrop_path: "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
  id: 299536,
  overview:
    "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos.",
  poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  title: "Avengers: Infinity War",
  vote_average: 8.5
};

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row mb-3">
              <div className="col-12">
                <div className="row mt-4">
                  <MovieItem item={movie} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
