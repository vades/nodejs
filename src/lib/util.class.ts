/**
 * Utility class
 */
import fs from 'fs';
import path from 'path';

export class UtilClass {
  /**
   * Recursively lists all the files in a directories
   * @param dirPath
   * @param arrayOfFiles
   */
  public static recursiveDirList(dirPath: string, arrayOfFiles: any) {
    let files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
      if (fs.statSync(dirPath + '/' + file).isDirectory()) {
        arrayOfFiles = UtilClass.recursiveDirList(
          dirPath + '/' + file,
          arrayOfFiles
        );
      } else {
        arrayOfFiles.push(path.join(__dirname, dirPath, '/', file));
      }
    });

    return arrayOfFiles;
  }

  /**
   * Recursively lists all the images in a directories
   * @param dirPath
   * @param arrayOfImages
   */
  public static recursiveImageList(
    dirPath: string,
    arrayOfImages: any,
    uri?: string
  ) {
    let files = fs.readdirSync(dirPath);

    arrayOfImages = arrayOfImages || [];
    uri = uri || '';

    files.forEach(function (file) {
      if (fs.statSync(dirPath + '/' + file).isDirectory()) {
        arrayOfImages = UtilClass.recursiveImageList(
          dirPath + '/' + file,
          arrayOfImages,
          uri
        );
      } else {
        let imageUrl = uri + path.join(dirPath, '/', file).replace(/\\/g, '/');
        arrayOfImages.push(imageUrl);
      }
    });

    return arrayOfImages;
  }
}
