import React from 'react'


class MovieItem extends React.PureComponent {
    constructor() {
        super()

        this.state = {
            willWatch: false
        }
    
    }

    addWillWatch = movie => {
        this.setState({
            willWatch: true
        });
        this.props.addMovieToWillWatchList(movie)
    }

    removeWillWatch = movie => {
        this.setState({
            willWatch: false
        });
        this.props.removeMovieFromWillWatch(movie)
    }

    render() {
        const { movie, removeMovie, addMovieToWillWatchList, removeMovieFromWillWatch } = this.props
        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                        movie.poster_path}`}
                    alt=""
                />
                <div className="card-body">
                    <h6 className="card-title">{movie.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {movie.vote_average}</p>
                        {this.state.willWatch ?
                            <button type="button" className="btn btn-success" onClick={this.removeWillWatch.bind(this, movie)}>
                                Remove 'Will Watch'
                            </button> : <button type="button" className="btn btn-secondary" onClick={this.addWillWatch.bind(this, movie)}>
                                Add 'Will Watch'
                             </button>
                        }

                    </div>
                    <button type="button" onClick={removeMovie.bind(this, movie)}>Delete Movie</button>
                </div>
            </div>
        )
    }
}



export default MovieItem
