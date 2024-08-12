import app from "./app";
import { Config } from "./config";

const server = async () => {
  try {
    app.listen(Config.PORT, () => {
      console.log(`Listening on ${Config.PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

server();
