import React, { Component, Fragment } from 'react';
import Like from '././../components/LikeButton';
import Table from '././../components/common/table';
class MoviesTable extends Component {  
  columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label:'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    { key: 'like', content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} /> },
    { key: 'delete', content: movie => <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>}
  ];

  render() { 
     //object deconstruction
     const { movies, onSort, sortColumn } = this.props;
     return ( 
       <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort} />
      );
  }
}

export default MoviesTable;