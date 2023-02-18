import React,{useState,useEffect, useCallback} from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const[movies,setMovies] = useState([]);
  const[isLoading,setIsLoading] = useState(false);
  const[error,setError] = useState(null);
  const fetchMovieHandler =  useCallback(async() => {
    setIsLoading(true);
    setError(null);
    try{

      const respone = await fetch('https://swapi.dev/api/films/');
      if(!respone.ok)
      {
        
        throw new Error("Something went wrong ......");
      }
      const res = await respone.json();
      const transformedMovies = res.results.map(result => {
            return {
              id:result.episode_id,
              title:result.title,
              openingText:result.opening_crawl,
              releaseDate:result.release_date

            }
          })
        setMovies(transformedMovies);
        setIsLoading(false);
          
          
      }
      catch(e)
      {
        setIsLoading(false);
        setError(e.message);
      }
    },[])
  useEffect(()=>{
    fetchMovieHandler();
  },[fetchMovieHandler]);
  
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading........</p>}

      </section>
    </React.Fragment>
  );
}

export default App;
