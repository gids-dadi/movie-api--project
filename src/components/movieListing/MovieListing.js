import React from 'react';
import { getAllMovies } from '../../features/movies/movieSlice';
import { useSelector } from 'react-redux';
import MovieCard from '../movieCard/MovieCard';
import './MovieListing.scss';
const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  let renderMovies = '';

  renderMovies =
    movies.Response === 'True'
      ? movies.Search.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))
      : 'errppr';
  // <div className='movie-error'>
  //   <h3>{movies.error}</h3>
  // </div>

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
