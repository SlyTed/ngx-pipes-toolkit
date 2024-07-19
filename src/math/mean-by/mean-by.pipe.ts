import { Injectable, Pipe, PipeTransform } from '@angular/core';

import { meanBy } from 'lodash';

/**
 * Pipe that calculates the mean of an array of objects
 * based on one of their property.
 * 
 * The name is `meanBy`.
 */
@Pipe({
  standalone: true,
  pure: true,
  name: 'meanBy',
})
@Injectable()
export class MeanByPipe implements PipeTransform {
  /**
   * Calculates the mean of an array of objects based on one of their property.
   * 
   * @param value - The array of objects to iterate over.
   * @param property - The property to calculate the mean on.
   * @template T - The type of the objects.
   * @template K - The name of the object property.
   * @returns The mean, or `null` if the array is `null`, `undefined` or empty.
   */
  public transform<T extends object, K extends keyof T>(
    value: number[] | null | undefined,
    property: K,
  ): number | null {
    if (!value?.length) return null;
    return meanBy(value, property);
  }
}
