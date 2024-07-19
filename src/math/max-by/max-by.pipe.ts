import { Injectable, Pipe, PipeTransform } from '@angular/core';

import { maxBy } from 'lodash';

/**
 * Pipe that returns the item with the largest value of an array of objects
 * based on one of their numeric property.
 * 
 * The name is `maxBy`.
 */
@Pipe({
  standalone: true,
  pure: true,
  name: 'maxBy',
})
@Injectable()
export class MaxByPipe implements PipeTransform {
  /**
   * Returns the item with the largest value of an array of objects
   * based on one of their numeric property.
   * 
   * @param value - The array of objects to iterate over.
   * @param property - The numeric property to calculate the maximum on.
   * @template T - The type of the objects.
   * @template K - The name of the object property.
   * @returns
   *   The item with the largest value, or `null`
   *   if the array is `null`, `undefined` or empty.
   */
  public transform<T extends object, K extends keyof T & string>(
    value: T[] | null | undefined,
    property: K,
  ): T | null {
    if (!value?.length) return null;
    return maxBy(value, property);
  }
}
