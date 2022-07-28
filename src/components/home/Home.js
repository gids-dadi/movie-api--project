import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MovieListing from '../movieListing/MovieListing';
import movieApi from '../../common/api/movieApi';
import { APIKey } from '../../common/api/movieApiKey';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const movieText = 'Surrender';

    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log('Error :', err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className='banner-img'> </div>
      <MovieListing />
    </div>
  );
};

export default Home;
