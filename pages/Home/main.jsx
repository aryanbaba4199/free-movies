// Home/main.js
import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import MovieCard from '../Home/movieCard';
import { useMovies } from '../../contexts/MoviesContext';

const MainPart = () => {
  const { movies, dispatch } = useMovies();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/postMovies');
        dispatch({ type: 'SET_MOVIES', payload: response.data });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MainPart;
