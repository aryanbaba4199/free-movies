// MovieCard.js
import React from 'react';
import {useRouter} from "next/router"
const MovieCard = ({movie} : any) => {
  const { name, image, imdbRating, releaseDate,} = movie;
  const id : any = movie._id;
  const router = useRouter();

  const movieLink = () => {
    router.push(`/movieSelected?id=${id}`);
  }
  
  return (
    <>
    <div className="mx-auto bg-white shadow-md overflow-hidden rounded-md w-72 h-80 hover:cursor-pointer" onClick={movieLink}>
      <img className="w-full h-48 object-cover" src={image} alt={image} />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">Download {name} full Movie</h2>
        <p className="text-gray-600 mb-4">Released on: {releaseDate}</p>
        <p className="text-gray-700">IMDb Rating: {imdbRating}</p>
      </div>
      
    </div>
    
    </>
  );
};

export default MovieCard;


