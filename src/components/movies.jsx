import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

import Movie from "./movie";
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';

import ListGroup from './common/listGroup';

import shortid from 'shortid'

class Movies extends Component {
  state = {
    movies: [],
    currentPage: 1,
    pageSize: 3,
    genres: []        
  };

  handlePageChange = page => {
    console.log({ page });
    this.setState({ currentPage: page });
  }
  
  handleLike = movie => {
    //here we are going to call our backend to persist the data
    //at the moment we are just updating the UI
    console.log("handle like!");
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies: movies });
  }

  handleDelete = (movie_id) => {    
    // const _movies = this.state.movies.filter((m) => m.id !== movie.id);
    // this.setState({ movies: _movies });    
    const _movies = this.state.movies.filter((m) => m._id !== movie_id);
    this.setState({ movies: _movies });
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
    console.log("Movies", this.state.movies);
    console.log("Genres", this.state.genres);
  }

  handleGenreSelect = genre => {
    console.log("genre selected!");
    console.log("genre", genre);
    this.setState({ selectedGenre: genre });
  }

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, selectedGenre, movies: allMovies } = this.state;

    // if (this.state.movies.length === 0)
    if(count === 0)
      return <p>There are no movies in the database.</p>;
    
    const filtered = selectedGenre
      ? allMovies.filter(m => m.genre._id === selectedGenre._id)
      : allMovies;
    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            textProperty="name"
            valueProperty="_id"
            onItemSelect={this.handleGenreSelect} />
        </div>

        <div className="col">
          <br />
          <h5>Showing {filtered.length} movies in the database</h5>
          <br />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((m) => (
                <Movie
                  key={shortid.generate()}
                  movie={m}
                  onDelete={this.handleDelete}
                  onLike={this.handleLike}
                />
              ))}
            </tbody>
          </table>
          {/* which inputs and events we need to give to the component */}
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
