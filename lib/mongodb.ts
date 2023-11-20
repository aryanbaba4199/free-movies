import mongoose from "mongoose";

const connectDB = async () => {
  const dburi = "mongodb://your-mongodb-uri"; // Replace this with your actual MongoDB URI
  try {
    const conn = await mongoose.connect("mongodb+srv://aryanbaba4199:Aryan7277@cluster0.j3sovlh.mongodb.net/?retryWrites=true&w=majority")

    console.log(`Connected to Database`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
  }
};

export default connectDB;
