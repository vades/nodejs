/**
 * Logger class
 */
export class LoggerService {
  /**
   * Get timestamp
   */
  private static getTimeStamp(): string {
    return new Date().toISOString();
  }
  /**
   * Generates log message
   * @param type
   * @param message
   * @param namespace
   */
  private static getMessage(
    type: string,
    message: string,
    namespace?: string
  ): string {
    namespace = namespace ? ` ${namespace} |` : '';
    const output = `${this.getTimeStamp()} | ${type} |${namespace} ${message}`;
    return output;
  }
  /**
   * Logs info
   * @param message
   * @param data
   * @param namespace
   */
  public static info(message: string, data?: any, namespace?: string): void {
    data = data || '';
    console.info(
      '\x1b[36m%s\x1b[0m',
      this.getMessage('INFO', message, namespace),
      data
    );
  }
  /**
   * Logs warning
   * @param message
   * @param data
   * @param namespace
   */
  public static warn(message: string, data?: any, namespace?: string): void {
    data = data || '';
    console.warn(
      '\x1b[33m%s\x1b[0m',
      this.getMessage('WARN', message, namespace),
      data
    );
  }
  /**
   * Logs error
   * @param message
   * @param data
   * @param namespace
   */
  public static error(message: string, data?: any, namespace?: string): void {
    data = data || '';
    console.error(
      '\x1b[31m%s\x1b[0m',
      this.getMessage('ERROR', message, namespace),
      data
    );
  }
  /**
   * Logs debug message
   * @param message
   * @param data
   * @param namespace
   */
  public static debug(message: string, data?: any, namespace?: string): void {
    data = data || '';
    console.debug(
      '\x1b[34m%s\x1b[0m',
      this.getMessage('DEBUG', message, namespace),
      data
    );
  }
  /**
   * Catch an exception
   * @param error
   * @param trace
   */
  public static catch(error: any, trace = false): void {
    let message = 'Unknown exception';
    if (error instanceof Error) {
      message = error.message;
    }
    console.error('\x1b[31m%s\x1b[0m', this.getMessage('EXCEPTION', message));
    if (trace) {
      console.error('\x1b[31m%s\x1b[0m', error);
    }
  }
}
