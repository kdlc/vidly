import React, { Component } from 'react';
import Movie from '../movie';

// Input: liked: boolean
// Output: onClick


class Like extends Component {    
     
    // handleLike = (Movie) => {
    //     debugger
    //     console.log("liked movie id: " + this.props.Movie._id);
    //     console.log("liked movie info: " + this.props.Movie.title);        
    // }

    render() {
        const { Movie } = this.props;

        let classes = "fa fa-heart";
        if (!this.props.liked) classes += "-o";
        return (
            <i className={classes}
                aria-hidden="true"
                style={{ cursor: "pointer" }}
                //onClick={() => this.handleLike(Movie)} 
                onClick={this.props.onClick}
                />
        );
    }
    
    
}
 
export default Like;