import React, { Component, Fragment } from "react";
//import PropTypes from "prop-types";
class Movie extends Component {
  render() {
    const { movie, onDelete } = this.props;
    console.log(movie);
    return (
      <Fragment>
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
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

//PropTypes
// Movie.propTypes = {
//   title: PropTypes.string,
//   genre: PropTypes.string,
//   stock: PropTypes.number,
//   rate: PropTypes.number,
// };

export default Movie;
