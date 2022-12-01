import React, {useContext} from 'react'
import { AppContext } from './Context'
import {NavLink} from 'react-router-dom'

const Movie = () => {

  const { movie, isLoading } = useContext(AppContext);

  if(isLoading){
    return(
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    )
  }
  return (
    <>
    <section className='movie-page'>
      <div className="grid-4-column container">
        {movie.map((curMovie) => {
          const { imdbID, Title, Poster } = curMovie;
          const movieName = Title.substring(0,15);
          return (
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className="card">
                <div className="card-info">
                  <h2>
                    {movieName.length>14?`${movieName}...`:movieName}
                  </h2>
                  <img src={Poster} alt="img" />
                </div>
              </div>
            </NavLink>
          )
        })}
      </div>
    </section>
    </>
  )
}

export default Movie