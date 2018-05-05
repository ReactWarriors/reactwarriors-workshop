import React from "react";
import movie from "./movie";

// const MovieItem = new React.Component()
class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      showOverview: true,
      count: 5
    };
  }

  render() {
    console.log("MovieItem", this);

    const templateOverview = () => {
      if (this.state.showOverview) {
        return (
          <React.Fragment>
            <p>{this.state.count}</p>
            <p>{this.props.item.overview}</p>
          </React.Fragment>
        );
      } else {
        return <p>{this.state.count}</p>;
      }
    };
    return (
      <div className="card" style={{ width: "250px" }}>
        <img
          className="card-img-top"
          src={this.props.item.backdrop_path || this.props.item.poster_path}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{this.props.item.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {this.props.item.vote_average}</p>
          </div>
          <button
            onClick={() => {
              this.setState({
                showOverview: false
              });
            }}
          >
            Hide overview
          </button>
          <button
            onClick={() => {
              this.setState({
                showOverview: true
              });
            }}
          >
            Show overview
          </button>
          {templateOverview()}
        </div>
      </div>
    );
  }
}

function App() {
  // MovieItem({
  //   item: movie,
  //   number: 1,
  //    text: "text",
  //    like: true
  // })
  return (
    <div>
      <MovieItem item={movie} number={1} text="text" like={true} />
    </div>
  );
}

export default App;
