//process.env.NODE_CONFIG_DIR = './config';
import path from 'path';
import config from 'config';
const appRoot = path.resolve(__dirname);

import { LoggerService as Logger } from './services/logger.service';
import { AlbumService as Album } from './services/album.service';

console.log(appRoot);

try {
  const album = new Album();
  const result = album.init();
  console.debug(result);
} catch (error) {
  Logger.catch(error);
  process.exit();
}
//Logger.info('Name 2', config.get('appName'));

console.log(appRoot);
