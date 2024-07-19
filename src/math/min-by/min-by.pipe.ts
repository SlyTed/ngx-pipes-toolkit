import { Injectable, Pipe, type PipeTransform } from '@angular/core';

import { minBy } from 'lodash';

/**
 * Pipe that returns the item with the smallest value of an array of objects
 * based on one of their numeric property.
 *
 * The name is `minBy`.
 */
@Pipe({
  standalone: true,
  pure: true,
  name: 'minBy',
})
@Injectable()
export class MinByPipe implements PipeTransform {
  /**
   * Returns the item with the smallest value of an array of objects
   * based on one of their numeric property.
   *
   * @param value - The array of objects to iterate over.
   * @param property - The numeric property to calculate the minimum on.
   * @template T - The type of the objects.
   * @template K - The name of the object property.
   * @returns
   *   The item with the smallest value, or `null`
   *   if the array is `null`, `undefined` or empty.
   */
  public transform<T extends object, K extends keyof T & string>(
    value: T[] | null | undefined,
    property: K,
  ): T | null {
    if (!value?.length) return null;
    return minBy(value, property) ?? null;
  }
}
