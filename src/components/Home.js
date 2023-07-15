import React from 'react';
import { Link } from 'react-router-dom';
import movieData from './moviesData';
import './styles.css';

function Home() {
  return (
    <div className='movie-card'>
      {movieData.map((movie) => (
        <div key={movie.id} className="movie-card-item">
          <img style={{ width: 'auto', height: '400px' }} src={movie.posterUrl} alt={movie.title} />
          <div className="movie-details">
            <h2>{movie.title}</h2>
            {/* <p>{movie.description}</p> */}
            <Link to={`/movies/${movie.id}`} className="linkStyle">See more</Link>
          </div>
        </div>
      ))}
    </div>
  );
  }  

export default Home;
