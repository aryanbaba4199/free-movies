import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';


const MovieSelected = () => {

  const router = useRouter();
  const [movie, setMovie] = useState(null);
  const { id } = router.query;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        if (id) {
          let message = 'movieData';
          const response = await axios.get(
            `/api/postMovies?id=${id}&&message=${message}`
          );
          setMovie(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  let sizes = movie?.sizes;
  console.log(sizes);

  if (!movie) {
    return <p>Loading...</p>; // You can customize the loading indicator
  }

  const qltBtn = (downloadUri) => {
    let name = encodeURIComponent(movie.name);
    let cat = encodeURIComponent(movie.category);
    const route = `/Home/movieDetails/movie?name=${name}&cat=${cat}&downloadUri=${downloadUri}`;
    router.push(route);
  };

  return (
    <div className="bg-slate-700 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{movie.name}</h1>
        <img src={movie.imageUrl} alt={movie.name} className="mb-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Release Date</h2>
            <p>{movie.releaseDate}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">IMDb Rating</h2>
            <p>{movie.imdbRating}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Quality</h2>
            <p>{movie.quality}</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movie?.scUrl?.map((url, index) => (
              <img key={index} src={url} alt={`Screenshot ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Select Picture Quality :</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(movie.sizes).map(([quality, { downloadUri }], i) => (
              <div key={i} className="flex items-center">
                <span className="mr-2 hover:cursor-pointer" onClick={() => qltBtn(downloadUri)}>
                  {quality}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSelected;
