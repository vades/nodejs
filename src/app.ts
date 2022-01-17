//process.env.NODE_CONFIG_DIR = './config';
import path from "path";
const appRoot = path.resolve(__dirname);
import fs from "fs";

import { LoggerService as Logger } from "./services/logger.service";
import { AlbumService as Album } from "./services/album.service";

console.log(appRoot);

try {
  const album = new Album();
  const result = album.init();
  // process.exit(1);
} catch (error) {
  Logger.catch(error, false);
  //process.exit();
}

//console.log(appRoot);
