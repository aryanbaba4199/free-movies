// Home/main.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../Home/movieCard';

// Define a type for the movie object
type Movie = {
  _id: string;
  // Add other properties based on your actual movie object
  // For example: name, image, imdbRating, releaseDate, etc.
  name: string;
  image: string;
  imdbRating: string;
  releaseDate: string;
};

const MainPart: React.FC = () => {
  const [movies, setMovies] = useState<Movie[] | undefined>(undefined);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("/api/postMovies");
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, []);

  if (!movies) {
    return <div>Loading</div>;
  }

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
