import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectionToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

export default connectionToDb;
