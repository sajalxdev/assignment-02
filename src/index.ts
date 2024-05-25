import mongoose from "mongoose";
import app from "./app";
import config from "./utils/config";

const main = async () => {
  mongoose
    .connect(config.DATABASE_URL as string)
    .then(() => {
      console.log("Connected to database");

      // Start the server
      app.listen(config.PORT, () => {
        console.log(`Server started on http://localhost:${config.PORT}`);
      });
    })
    .catch((error) => {
      console.error("Error connecting to database: ", error.message);
    });
};

main();
