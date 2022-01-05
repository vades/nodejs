/**
 * Album service
 */

import { LoggerService as Logger } from './logger.service';
import { UtilClass as Util } from '../lib/util.class';
import { album } from '../config/album';
export class AlbumService {
  constructor() {}

  public init() {
    const imageList = Util.recursiveImageList(album.dirPath, [], album.uri);
    return imageList;
  }
}
