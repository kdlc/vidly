import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Movie from "./movie";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie_id) => {
    alert("Delete: " + movie_id);
    // const _movies = this.state.movies.filter((m) => m.id !== movie.id);
    // this.setState({ movies: _movies });    
    const _movies = this.state.movies.filter((m) => m._id !== movie_id);
    this.setState({ movies: _movies });
  };

  render() {
    return (
      <div className="container">
        <br />
        <h5>Showing {this.state.movies.length} movies in the database</h5>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((m) => (
              <Movie movie={m} onDelete={this.handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
