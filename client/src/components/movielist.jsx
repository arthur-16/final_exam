import React, { Component, Fragment } from "react";
import Movie from "./movie";

class MovieList extends Component {
  render() {
    return (
      <Fragment>
        {this.props.movies.map(movie => {
          return (
            <Movie
              key={movie.id}
              title={movie.title}
              director={movie.director}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default MovieList;
