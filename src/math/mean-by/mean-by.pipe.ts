import { Injectable, Pipe, type PipeTransform } from '@angular/core';

import { mean } from 'lodash';
import { castArrayProperty } from 'src/helpers';

/**
 * Pipe that calculates the mean of an array of objects
 * based on one of their numeric property.
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
   * Calculates the mean of an array of objects
   * based on one of their numeric property.
   *
   * @param value - The array of objects to iterate over.
   * @param property - The numeric property to calculate the mean on.
   * @template T - The type of the objects.
   * @template K - The name of the object property.
   * @returns
   *   The mean, or `null` if the array is `null`, `undefined`, empty
   *   or all property values are not of `number` type.
   *
   * **WARNING** - The property values are ignored
   * if they are not of `number` type.
   * @example
   * ```html
   * <p>{{ [{ age: 10 }, { age: null }, { age: 30 }}] | meanBy:'age' }}</p>
   * <!-- Output: "20" (10 + 30 / 2) -->
   * ```
   */
  transform<T extends object, K extends keyof T & string>(
    value: T[] | null | undefined,
    property: K,
  ): number | null {
    if (!value?.length) return null;
    const numbers = castArrayProperty(value, property);
    if (!numbers.length) return null;
    return mean(numbers);
  }
}
