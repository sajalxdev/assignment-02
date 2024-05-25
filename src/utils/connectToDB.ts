import mongoose from "mongoose";
import config from "./config";

const connectToDB = async () => {
  mongoose
    .connect(config.DATABASE_URL as string)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.error("Error connecting to database: ", error.message);
    });
};

export default connectToDB;
