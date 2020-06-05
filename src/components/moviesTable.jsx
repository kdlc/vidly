import React, { Component, Fragment } from 'react';
import Like from '././../components/LikeButton';
import TableHeader from '../components/common/tableHeader';


class MoviesTable extends Component {  
  columns = [
    { path: 'title', label: 'Title' },
    { path: 'genre.name', label:'Genre' },
    { path: 'numberInStock', label: 'Stock' },
    { path: 'dailyRentalRate', label: 'Rate' },
    { key: 'like' },
    { key: 'delete' }
  ];

  render() { 
     //object deconstruction
     const { movies, onDelete, onLike, onSort, sortColumn } = this.props;
     return ( 
         <Fragment>
           <h5>Showing {movies.length} movies in the database</h5>
           <br />
           <table className="table">
           <TableHeader
             columns={this.columns}
             sortColumn={sortColumn}
             onSort={onSort}
             />
             <tbody>
               {movies.map((movie) => (
                   <tr key={movie._id}>
                       <td>{movie.title}</td>  
                       <td>{movie.genre.name}</td>
                       <td>{movie.numberInStock}</td>
                       <td>{movie.dailyRentalRate}</td>
                       <td>
                           <Like movieID={movie._id} liked={movie.liked} onClick={() => onLike(movie)} />
                       </td>
                       <td>
                           <button onClick={() => onDelete(movie._id)} className="btn btn-danger btn-sm">Delete</button>
                       </td>
                   </tr>
               ))}
             </tbody>
             </table>
             </Fragment>
      );
  }
}

export default MoviesTable;