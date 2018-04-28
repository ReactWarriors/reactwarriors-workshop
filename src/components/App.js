import React from "react";
import movies from "./movies";

class MovieItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowOverview: false
    };
  }

  render() {
    const { item } = this.props;
    // console.log("state of MovieItem", this.state);
    // console.log("props", this.props);
    console.log("render");
    return (
      <div className="card" style={{ width: "300px" }}>
        <img className="card-img-top" src={item.backdrop_path} alt="" />
        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>
          <p className="mb-0">Rating: {item.vote_average}</p>
          <button
            onClick={() => {
              this.setState({
                isShowOverview: true
              });
            }}
          >
            Show overview
          </button>
          <button
            onClick={() => {
              this.setState({
                isShowOverview: false
              });
            }}
          >
            Hide overview
          </button>
          {this.state.isShowOverview ? <p>{item.overview}</p> : null}
          <button onClick={this.props.addLike}>Like</button>
          {this.props.isLike ? <p>Это кино мне нравится</p> : null}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: movies,
      isLike: false
    };
  }

  addLike = () => {
    this.setState({
      isLike: true
    });
  };

  render() {
    console.log("state of App", this.state);
    return (
      <div
        style={{
          display: "flex",
          widht: "100%",
          justifyContent: "space-between"
        }}
      >
        <MovieItem
          item={this.state.items[0]}
          addLike={this.addLike}
          isLike={this.state.isLike}
        />
        <MovieItem
          item={this.state.items[1]}
          addLike={this.addLike}
          isLike={this.state.isLike}
        />
      </div>
    );
  }
}

export default App;
