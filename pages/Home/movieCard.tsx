

import {useRouter} from "next/router"
import React from 'react'

const movieCard = ({movie} : any) => {
  const router = useRouter();

  let id : any = "";
  let name : any = "";
  let image : any = "";
  let imdbRating : any ="";
  let releaseDate : any ="";

  if(movie){
    console.log(movie);
    name = movie.name
    image = movie.imageUrl
    imdbRating = movie.imdbRating
    releaseDate = movie.releaseDate
    id = movie._id
  }
  

  const movieLink = () => {
    router.push(`/movieSelected?id=${id}`);
  }
  
  return (
        <>
    <div className="mx-auto bg-white shadow-md items-center rounded-md w-72 h-[350px] hover:cursor-pointer" onClick={movieLink}>
    <img className="w-[280px] h-64 object-cover mx-auto" src={image} alt={name} />
      <div className="p-1">
        <h2 className="text-xl font-semibold text-gray-800">Download Full Movie {name}</h2>
        <p className="text-gray-600 mb-4">Released on: {releaseDate}</p>
        
      </div>
      
    </div>
    
    </>
  )
}

export default movieCard

