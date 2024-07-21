import { Injectable, Pipe, type PipeTransform } from '@angular/core';

import { sum } from 'lodash';
import { castArrayProperty } from 'src/helpers/cast.helper';

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
   * @returns
   *   The sum, or `null` if the array is `null`, `undefined`, empty.
   *   or all property values are not of `number` type.
   *
   * **WARNING** - The property values are ignored
   * if they are not of `number` type.
   * @example
   * ```html
   * <p>{{ [{ price: 10 }, { price: null }, { price: 30 }}] | sumBy:'age' }}</p>
   * <!-- Output: "40" -->
   * ```
   */
  transform<T extends object, K extends keyof T & string>(
    value: T[] | null | undefined,
    property: K,
  ): number | null {
    if (!value?.length) return null;
    const numbers = castArrayProperty(value, property);
    if (!numbers.length) return null;
    return sum(numbers);
  }
}
