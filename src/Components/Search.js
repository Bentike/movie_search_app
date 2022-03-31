import React, {useState, useEffect} from 'react';
import Movies from './Movies';
import '../Styles/Search.css';

const Search = () => {
    const [searchText, setSearchText] = useState('');

    const [movies, setMovies] = useState([{title:"HarryPotter", year:2020}]);

    const handleChange = (event) =>{
        setSearchText(event.target.value);
    }

    const handleKeyDown = (event) =>{
        if(event.which === 13){
            fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=b47cf908`)
            .then(response => response.json())
            .then(data => {
                if(data.Response === 'False'){
                    setMovies([]);
                }else{
                    setMovies([]);
                    setMovies(data.Search);
                }
            })
            .catch(err => {
                console.log("An Error Occur: " + err);
            });    
        }
    }

    //Default data that appears on page load
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=merlin&apikey=b47cf908`)
        .then(response => response.json())
        .then(data => setMovies(data.Search))
        .catch(err => {
            console.log("An Error Occur: " + err);
        })
    }, [])

    return(
      <React.Fragment>
          <div className="search">
              <p className="search-text">Search</p>
              <input
                  type="text"
                  name="search"
                  className="search-field"
                  value = {searchText}
                  onChange = {handleChange}
                  onKeyDown = {handleKeyDown}
              />
          </div>
          <div className='movie-container'>
            { movies.length  ? movies.map(movie => {
                   if(movie.Title && movie.Poster !== "N/A"){
                      return  <Movies key={movie.imdbID} url={movie.Poster} title={movie.Title}/>
                   }else{
                       return null;
                   }                   
               })
               : <h1>Movie Not Found</h1>
            }
          </div>
      </React.Fragment>
    )
}

export default Search;