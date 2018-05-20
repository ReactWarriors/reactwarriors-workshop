import React from "react";
// import PropTypes from "prop-types";
// import MovieList from "./MovieList";
// import MovieTabs from "./MovieTabs";
import LoginForm from "./LoginForm";

// const LikeCounts = props => {
//   return <p>Количество лайков: {props.counts}</p>;
// };

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counts: 0,
      type: "now_playing"
    };
  }

  addLike = () => {
    console.log("add like");
    this.setState({
      counts: this.state.counts + 1
    });
  };

  unLike = () => {
    console.log("un like");
    this.setState({
      counts: this.state.counts - 1
    });
  };

  changeTab = type => {
    // console.log(event.target.getAttribute("data-type"));
    this.setState({
      type: type
    });
    // this.setState({
    //   type
    // })
  };

  render() {
    return (
      <div>
        <LoginForm />
        {/*
        <div className="container">
          
        <LikeCounts counts={this.state.counts} />
        <MovieTabs type={this.state.type} changeTab={this.changeTab} />
        <MovieList
          addLike={this.addLike}
          unLike={this.unLike}
          type={this.state.type}
        />
        
        </div>
        */}
      </div>
    );
  }
}

export default App;
