/**
 * Album service
 */
import fs from 'fs';
import { LoggerService as Logger } from './logger.service';
import { FileClass as File } from '../lib/file.class';
import { album as cfg } from '../config/album';
export class AlbumService {
  albumsOutput: any = [];
  //console.log(array);
  albums: any = [];
  constructor() { }




  public init(): void {
    const dirOutput = this.readAlbumDir();
    this.parseDirectoryData(dirOutput);
    //this.generateAlbumOutput(dirOutput);
    return;
  }
  public _init(): void {
    Logger.info('Reading images from ', cfg.dirPath, 'AlbumService');
    const files = File.recursiveImageList(cfg.dirPath, [], cfg.uri);
    this.build(files);
    console.log(this.albumsOutput);
    /*  const data = JSON.stringify(this.albumsOutput, null, 2);
    Logger.info('Writing JSON file to ', cfg.outputFile, 'AlbumService');
    const file = fs.writeFileSync(cfg.outputFile, data); */
    return;
  }

  private build(files: []): void {
    this.albumsOutput['albums'] = [];
    files.slice(0, 39).forEach((file: string) => {
      // Removing first slash from path
      let filePath = file.substr(file.indexOf('/') + 1);
      // Removing dirPath
      filePath = filePath.replace(cfg.dirPath + '/', '');
      this.buildAlbums(filePath);
    });
  }

  private buildAlbums(filePath: string): void {
    const array = filePath.split('/');
    const albumId = array[0];
    const album: any = {
      id: albumId,
      name: 'Album name',
      cover: cfg.uri + filePath,
      events: [],
    };
    const albumExists = this.albumsOutput['albums'].some(
      (item: any) => item['id'] === albumId
    );
    console.log(albumExists);
    if (!albumExists) {
      this.albumsOutput['albums'].push(album);
    }
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
