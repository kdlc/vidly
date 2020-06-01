import React, { Component } from 'react';


class LikeButton extends Component {
    state = { like: false }
    
    getCorazonClass() {
        let class_name = "fa ";
        class_name += this.state.like === false ? "fa-heart-o" : "fa-heart"
        return class_name;
    }

    handleLike(movie_id) {        
        console.log("Here we go: " + movie_id);
        let newLikeValue = this.state.like ? false : true;
        this.setState({ like: newLikeValue });
    }

    render() { 
        const { movieID } = this.props;
        return ( 


            <i className={this.getCorazonClass()}
                aria-hidden="true"                
                onClick={() => this.handleLike(movieID)}
            ></i>
         );
    }
}
 
export default LikeButton;