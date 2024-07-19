import { Injectable, Pipe, PipeTransform } from '@angular/core';

import { mean } from 'lodash';


/**
 * Pipe that calculates the mean of an array of numbers.
 * 
 * The name is `mean`.
 */
@Pipe({
  standalone: true,
  pure: true,
  name: 'mean',
})
@Injectable()
export class MeanPipe implements PipeTransform {
  /**
   * Calculates the mean of an array of numbers.
   * 
   * @param value - The array of numbers to iterate over.
   * @returns The mean, or `null` if the array is `null`, `undefined` or empty.
   */
  public transform(value: number[] | null | undefined): number | null {
    if (!value?.length) return null;
    return mean(value);
  }
}
