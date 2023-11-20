import mongoose from "mongoose";

const connectDB = async () => {
  const dburi = process.env.DB;
  try {
    const conn = await mongoose.connect(
        dburi, 
        {
      
    });

    console.log(`Connected to Database : `);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
  }
};

export default connectDB;