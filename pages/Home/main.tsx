// Home/main.js
import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import MovieCard from '../Home/movieCard';


const MainPart = () => {
  const [movies, setMovie] = useState(null);

  useEffect(() => {
      const fetchmovie = async () => {
        const res = await axios.get("/api/postMovies");
        setMovie(res.data);
      }
    fetchmovie()
  },[]);
  if(!movies){
    return "Loading"
  }


  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie: any) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MainPart;
