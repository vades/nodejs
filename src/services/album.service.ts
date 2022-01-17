/**
 * Album service
 */
import fs from 'fs';
import { LoggerService as Logger } from './logger.service';
import { FileClass as File } from '../lib/file.class';
import { album as cfg } from '../config/album';
export class AlbumService {
  albumsOutput: any = [];
  constructor() {}

  public init(): void {
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
      this.buildeAlbums(filePath);
    });
  }

  private buildeAlbums(filePath: string): void {
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

    //console.log(array);
  }
}
