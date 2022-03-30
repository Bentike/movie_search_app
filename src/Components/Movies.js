import React from "react";
import '../Styles/Movies.css';


const Movies = (props) => {
   return(
       <React.Fragment>
            <div className="movie-div">
                <img src={props.url} alt="poster not available" className="movie-img"/>
                <p className="movie-text">{props.title}</p>
            </div>
       </React.Fragment>
   )
}

export default Movies;