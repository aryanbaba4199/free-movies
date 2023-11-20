import mongoose from "mongoose";

const connectDB = async () => {
  const dburi = "mongodb://your-mongodb-uri"; // Replace this with your actual MongoDB URI
  try {
    const conn = await mongoose.connect(dburi, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Add other options if needed
    });

    console.log(`Connected to Database`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
  }
};

export default connectDB;
