/**
 * Album service
 */
import fs from 'fs';
import { LoggerService as Logger } from './logger.service';
import { FileClass as File } from '../lib/file.class';
import { album } from '../config/album';
export class AlbumService {
  constructor() {}

  public init(): void {
    Logger.info('Reading images from', album.dirPath, 'AlbumService');
    const result = File.recursiveImageList(album.dirPath, [], album.uri);
    const data = JSON.stringify(result, null, 2);
    Logger.info('Writing JSON file to ', album.outputFile, 'AlbumService');
    const file = fs.writeFileSync(album.outputFile, data);
    return;
  }
}
