/* eslint-disable */
import { array } from 'yargs';

export default function appendToEachArrayValue(array, appendString) {
  const arraycito = [];
  for (const value of array) {
    arraycito.push(appendString + value);
  }

  return arraycito;
}
