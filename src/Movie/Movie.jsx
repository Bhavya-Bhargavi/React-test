
import React from 'react';
import './style.css';

class Movie extends React.Component{
    render(){
        return(
            <div className="movietag">
                <img src={this.props.banner}></img>
                <label>{this.props.name}{this.props.likes}</label>
    
            </div>
            );
    }
}







export default Movie;