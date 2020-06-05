import React, { Component, Fragment } from "react";
//import LikeButton from './LikeButton'
import Like from './common/like';


//import PropTypes from "prop-types";
class Movie extends Component {

  render() {
    const { movie, onDelete, onLike} = this.props;
    //console.log(movie);
    return (
      <Fragment>
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>            
            {/* <LikeButton movieID={movie._id}/>             */}
            <Like liked={movie.liked} onClick={() => onLike(movie)}/>
          </td>
          <td>
            <button
              onClick={() => onDelete(movie._id)}
              type="button"
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      </Fragment>
    );
  }
}


//usage
// {movies.map((m) => (
//   <Movie
//     key={shortid.generate()}
//     movie={m}
//     onDelete={this.handleDelete}
//     onLike={this.handleLike}
//   />
// ))}

//PropTypes
// Movie.propTypes = {
//   title: PropTypes.string,
//   genre: PropTypes.string,
//   stock: PropTypes.number,
//   rate: PropTypes.number,
// };

export default Movie;
