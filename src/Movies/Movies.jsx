import React from 'react';
import Movie from '../Movie/Movie.jsx';
import movie from './movie.js';

class Movies extends React.Component{
    state =movie;
    getMovie = (movie) => {                   //method
       return <Movie name={movie.name} likes={movie.likes} banner={movie.banner}/>
    }
    render(){
        return(
            <div className="moviebox">
            {Object.keys(this.state).map(x => {              //this.getMovie(this.state.movie);
                return this.getMovie(this.state[x]);
            })}
            
     </div>
    
        )
    }
}
export default Movies;
