import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

import _ from 'lodash';
//import Movie from "./movie";

import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';

import ListGroup from './common/listGroup';
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    movies: [],
    currentPage: 1,
    pageSize: 999,
    genres: [],
    sortColumn: { path: 'title', order: 'asc' }
  };

  handlePageChange = page => {
    console.log({ page });
    this.setState({ currentPage: page });
  }
  
  handleLike = movie => {
    //here we are going to call our backend to persist the data
    //at the moment we are just updating the UI
    console.log("handle like!");
    debugger
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

  handleSort = sortColumn => {             
    this.setState({sortColumn});
  }

  componentDidMount() {
    const genres = [ {_id: "", name: 'All'}, ...getGenres()]
    this.setState({ movies: getMovies(), genres:  genres });

  }

  handleGenreSelect = genre => {
    console.log("genre selected!");    
    this.setState({ selectedGenre: genre, currentPage: 1 });
  }

  getPagedData = () => {
    const {
      pageSize,
      currentPage, 
      sortColumn,
      selectedGenre,
      movies: allMovies
    } = this.state;
     //1. filter, 2.sort, 3. paginate
     const filtered = this.state.selectedGenre && selectedGenre._id
     ? allMovies.filter(m => m.genre._id === selectedGenre._id)
     : allMovies;
       
     const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
       
     const movies = paginate(sorted, currentPage, pageSize);

     return  {totalCount: filtered.length, data: movies };

  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize,
            currentPage,
            sortColumn            
          } = this.state;

    // if (this.state.movies.length === 0)
    if(count === 0)
      return <p>There are no movies in the database.</p>;
    
    const {totalCount, data: movies }  = this.getPagedData();

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
          
          <MoviesTable movies={movies} sortColumn={sortColumn} onLike={this.handleLike} onDelete={this.handleDelete} onSort={this.handleSort} />
                      
          <Pagination
            itemsCount={totalCount}
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
