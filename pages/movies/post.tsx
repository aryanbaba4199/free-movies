import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [movieData, setMovieData] = useState({
    name: '',
    imageUrl: '',
    imdbRating: '',
    releaseDate: '',
    downloadUri: '',
    scUrl: [],
    category: '',
    quality: '',
    sizes: {
      '480P': { downloadUri: '' },
      '720P': { downloadUri: '' },
      '1080P': { downloadUri: '' },
      '4K': { downloadUri: '' },
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleScreenshotChange = (e) => {
    const { name, value } = e.target;

    if (name === 'downloadUri') {
      setMovieData((prevData) => ({ ...prevData, downloadUri: value }));
    } else if (name === 'screenshotUrls') {
      const screenshotUrl = value;
      setMovieData((prevData) => ({
        ...prevData,
        scUrl: [...prevData.scUrl, screenshotUrl],
      }));
    }
  };

  const handleSizeChange = (size, field, value) => {
    setMovieData((prevData) => ({
      ...prevData,
      sizes: {
        ...prevData.sizes,
        [size]: {
          ...prevData.sizes[size],
          [field]: value,
        },
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/postMovies', movieData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 201) {
        setMovieData({
          name: '',
          imageUrl: '',
          imdbRating: '',
          releaseDate: '',
          downloadUri: '',
          scUrl: [],
          category: '',
          quality: '',
          sizes: {
            '480P': { downloadUri: '' },
            '720P': { downloadUri: '' },
            '1080P': { downloadUri: '' },
            '4K': { downloadUri: '' },
          },
        });
        console.log('Movie Saved Successfully');
        toast('Movie Saved Successfully');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Movie Name
            </label>
            <input
              type="text"
              name="name"
              value={movieData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-lime-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              value={movieData.imageUrl}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              IMDb Rating
            </label>
            <input
              type="text"
              name="imdbRating"
              value={movieData.imdbRating}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Released Date
            </label>
            <input
              type="text"
              name="releaseDate"
              value={movieData.releaseDate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Screenshot URLs (separated by commas)
            </label>
            <input
              type="text"
              name="screenshotUrls"
              value={movieData?.scUrl?.join(',')}
              onChange={handleScreenshotChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Download URI
            </label>
            <input
              type="text"
              name="downloadUri"
              value={movieData.downloadUri}
              onChange={handleScreenshotChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Category
            </label>
            <select
              name="category"
              value={movieData.category}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Category</option>
              <option value="movie">Movie</option>
              <option value="webSeries">Web Series</option>
              <option value="18+WebSeries">18+ Web Series</option>
              <option value="18+Movie">18+ Movie</option>
              <option value="shortMovie">Short Movie</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Type
            </label>
            <select
              name="type"
              value={movieData.type}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Type</option>
              <option value="Bollywood">Bollywood</option>
              <option value="HollyWood">Hollywood</option>
              <option value="South">South</option>
              <option value="Bhojpuri">Bhojpuri</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Quality
            </label>
            <select
              name="quality"
              value={movieData.quality}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Quality</option>
              <option value="HallDubbbed">Hall Dubbbed</option>
              <option value="Original">Original</option>
            </select>
          </div>

          {movieData.quality && (
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2">
                Sizes
              </label>
              {Object.keys(movieData.sizes).map((size) => (
                <div key={size} className="mb-2">
                  <span className="text-white">{size}</span>
                  <div className="ml-4">
                    <label className="block text-white text-sm font-bold mb-2">
                      Download URI
                    </label>
                    <input
                      type="text"
                      value={movieData.sizes[size].downloadUri}
                      onChange={(e) =>
                        handleSizeChange(size, 'downloadUri', e.target.value)
                      }
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>

      </div>
      <ToastContainer />
    </>


  );
}
