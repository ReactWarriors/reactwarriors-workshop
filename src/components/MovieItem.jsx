import React from "react";
import _ from "lodash";
// const MovieItem = new React.Component()
export default class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false
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

  shouldComponentUpdate(nextProps, nextState) {
    // console.log("MovieItem", this.state, nextState);ss
    return true;
    // if (_.isEqual(nextProps, this.props) && _.isEqual(nextState, this.state)) {
    //   return false;
    // }
    // return true;
  }
  render() {
    // const item = props.item
    const { item } = this.props;
    // console.log("component this", this);
    // console.log("state", this.state);
    // console.log("MovieItem props", this.props);
    // console.log("render");
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
            item.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>
          <p>Rating: {item.vote_average}</p>
          <div className="d-flex justify-content-between align-items-center">
            {this.state.show ? (
              <button className="btn btn-warning" onClick={this.hideOverview}>
                Hide overview
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={this.showOverview.bind(this)}
              >
                Show overview
              </button>
            )}
            {this.state.like ? (
              <button
                className="btn btn-warning"
                onClick={event => {
                  console.log("event", event.target);
                  this.setState({
                    like: false
                  });
                  this.props.unLike();
                }}
              >
                UnLike
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={event => {
                  console.log("event", event.target);
                  this.setState({
                    like: true
                  });
                  this.props.addLike();
                }}
              >
                Like
              </button>
            )}
          </div>

          {this.state.show ? <p>{item.overview}</p> : null}
        </div>
      </div>
    );
  }
}
