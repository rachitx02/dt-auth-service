import app from "./app";
import { Config } from "./config";
import logger from "./config/logger";

const server = async () => {
  try {
    app.listen(Config.PORT, () => {
      logger.info(`Listening on ${Config.PORT}`);
    });
  } catch (error) {
    if (error instanceof Error) logger.error(error.message);
    setTimeout(() => {
      process.exit(1);
    }, 1000);
  }
};

server();
