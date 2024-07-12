import mongoose from "mongoose";
import { promises as dnsPromises } from "dns";

const dns = dnsPromises;
dns.setServers(['8.8.8.8', '8.8.4.4']);

mongoose.set("strictQuery", false);

const connectionToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

export default connectionToDb;
