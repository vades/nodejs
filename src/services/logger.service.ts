/**
 * Logger class
 */
export class LoggerService {
  private static getTimeStamp(): string {
    return new Date().toISOString();
  }

  public static info(namespace: string, message: string, object?: any) {
    if (object) {
      console.info(
        `[${this.getTimeStamp()}] [INFO] [${namespace}] ${message}`,
        object
      );
    } else {
      console.info(`[${this.getTimeStamp()}] [INFO] [${namespace}] ${message}`);
    }
  }

  public static warn(namespace: string, message: string, object?: any) {
    if (object) {
      console.warn(
        `[${this.getTimeStamp()}] [WARN] [${namespace}] ${message}`,
        object
      );
    } else {
      console.warn(`[${this.getTimeStamp()}] [WARN] [${namespace}] ${message}`);
    }
  }

  public static error(namespace: string, message: string, object?: any) {
    if (object) {
      console.error(
        `[${this.getTimeStamp()}] [ERROR] [${namespace}] ${message}`,
        object
      );
    } else {
      console.error(
        `[${this.getTimeStamp()}] [ERROR] [${namespace}] ${message}`
      );
    }
  }

  public static debug(namespace: string, message: string, object?: any) {
    if (object) {
      console.debug(
        `[${this.getTimeStamp()}] [DEBUG] [${namespace}] ${message}`,
        object
      );
    } else {
      console.debug(
        `[${this.getTimeStamp()}] [DEBUG] [${namespace}] ${message}`
      );
    }
  }

  public static catch(error: any) {
    let errorMessage = 'Unknown exception';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error('\x1b[31m%s\x1b[0m', errorMessage);
  }
}
