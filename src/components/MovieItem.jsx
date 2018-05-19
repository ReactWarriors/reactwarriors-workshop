import React from "react";

// const MovieItem = new React.Component()
export default class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false
    };
  }

  // static propTypes = {
  //   item: PropTypes.isRequired
  // };

  showOverview() {
    this.setState({
      show: true
    });
  }
  //best practice"
  hideOverview = () => {
    this.setState({
      show: false
    });
  };
  render() {
    // const item = props.item
    const { item } = this.props;
    // console.log("component this", this);
    // console.log("state", this.state);
    // console.log("MovieItem props", this.props);
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {item.vote_average}</p>
          </div>
          <button
            className="btn btn-primary"
            onClick={this.showOverview.bind(this)}
          >
            Show overview
          </button>
          <button className="btn btn-warning" onClick={this.hideOverview}>
            Hide overview
          </button>
          {this.state.show ? <p>{item.overview}</p> : null}
          <div>
            <button
              className="btn btn-primary"
              onClick={event => {
                console.log("event", event.target);
                this.props.addLike();
              }}
            >
              Like
            </button>
          </div>
        </div>
      </div>
    );
  }
}
