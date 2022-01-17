/**
 * Album service
 */
import fs from 'fs';
import { LoggerService as Logger } from './logger.service';
import { FileClass as File } from '../lib/file.class';
import { album as cfg } from '../config/album';
export class AlbumService {
  albums: any = [];
  constructor() {}

  public init(): void {
    const dirOutput = this.readAlbumDir();
    this.parseDirectoryData(dirOutput);
    //this.generateAlbumOutput(dirOutput);
    return;
  }

  private readAlbumDir(): [] {
    const data = fs.readFileSync('src/data/albums.json', 'utf8');
    const result = JSON.parse(data);
    Logger.info('Reading images from', cfg.dirPath, 'AlbumService');
    //const result = File.recursiveImageList(album.dirPath, [],cfg.uri);

    return result;
    /* const data = JSON.stringify(result, null, 2);
    const file = fs.writeFileSync(album.outputFile, data); */
  }

  private parseDirectoryData(data: []) {
    data.forEach((value) => {
      console.log(value);
    });
  }

  private generateAlbumOutput(data: []) {
    Logger.info(`Writing data to  JSON file ${cfg.outputFile}`, data, 'AlbumService');
    const result = JSON.stringify(data, null, 2);
  }
}
