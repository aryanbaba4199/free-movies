// pages/api/movies.js
import connectDb from '../../lib/mongodb';
import Movies from '../../lib/Schema/movieSchema';

export default async function handler(req, res) {
  await connectDb();
  const id = req?.query?.id?.trim();
  console.log(id);
  const message = req?.query?.message;
  if (message) {
    try {
      const data = await Movies.find({ _id: id }); 
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  else if (!message) {
    try {
      const data = await Movies.find();
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  
  if (req.method === 'POST') {
    console.log("Create Movie called");
    try {
      const {
        name,
        imageUrl,
        imdbRating,
        releaseDate,
        downloadUri,
        scUrl,
        category,
        quality,
        sizes,
        type,
      } = req.body;
      console.log(category, type);

      const movie = new Movies({
        name: name,
        imageUrl: imageUrl,
        imdbRating: imdbRating,
        releaseDate: releaseDate,
        downloadUri: downloadUri,
        scUrl: scUrl,
        category: category,
        quality: quality,
        sizes: sizes,
        type: type,
      });

      console.log(movie);
      const savedMovie = await movie.save();
      console.log("Movie saved successfully", savedMovie);
      res.status(201).json({ message: 'Movie saved successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  
}
