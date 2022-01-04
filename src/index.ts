import config from 'config';
import { Logger } from './services/logger.service';
Logger.info('Name 2', config.get('appName'));

function sumMe(numOne: number, numTwo: number) {
  return numOne + numTwo;
}
console.log(sumMe(3, 180));
