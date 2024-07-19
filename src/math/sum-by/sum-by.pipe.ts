import { Injectable, Pipe, PipeTransform } from '@angular/core';

import { sumBy } from 'lodash';

/**
 * Pipe that calculates the sum of an array of objects
 * based on one of their numeric property.
 * 
 * The name is `sumBy`.
 */
@Pipe({
  standalone: true,
  pure: true,
  name: 'sumBy',
})
@Injectable()
export class SumByPipe implements PipeTransform {
  /**
   * Calculates the sum of an array of objects
   * based on one of their numeric property.
   * 
   * @param value - The array of objects to iterate over.
   * @param property - The numeric property to calculate the minimum on.
   * @template T - The type of the objects.
   * @template K - The name of the object property.
   * @returns The sum, or `null` if the array is `null`, `undefined` or empty.
   */
  public transform<T extends object, K extends keyof T>(
    value: T[] | null | undefined,
    property: K,
  ): number | null {
    if (!value?.length) return null;
    return sumBy(value, property);
  }
}
