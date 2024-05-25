import app from "./app";
import config from "./utils/config";
import connectToDB from "./utils/connectToDB";

const main = async () => {
  await connectToDB();

  app.listen(config.PORT, () => {
    console.log(`Server started on http://localhost:${config.PORT}`);
  });
};

main();
