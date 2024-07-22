import { Injectable, Pipe, type PipeTransform } from '@angular/core';

import { castArrayProperty, castToNumber } from '../../helpers';

/**
 * Pipe that returns the item with the smallest value of an array of objects
 * based on one of their `number`, parsable `string` or `Date` property.
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
   * based on one of their `number`, parsable `string` or `Date` property.
   *
   * @param value - The array of objects to iterate over.
   * @param property - The property to calculate the minimum on.
   * @template T - The type of the objects.
   * @template K - The name of the object property.
   * @returns
   *   The item with the smallest value, or `null`
   *   if the array is `null`, `undefined`, empty
   *   or all property values are not of a valid type.
   *
   * **WARNING** - If there are multiple items with the same property values,
   * the first item is returned.
   * @example
   * ```html
   * <p>{{ [{ id: '1', age: 10 }, { id: '2', age: 10 }}] | minBy:'age' }}</p>
   * <!-- Output: "{ id: '1', age: 10 }" -->
   * ```
   *
   * **WARNING** - The property values are ignored
   * if they are not of a valid type.
   * @example
   * ```html
   * <p>{{ [{ age: 10 }, { age: null }, { age: 30 }}] | minBy:'age' }}</p>
   * <!-- Output: "{ age: 10 }" -->
   * ```
   */
  transform<T extends object, K extends keyof T & string>(
    value: T[] | null | undefined,
    property: K,
  ): T | null {
    if (!value?.length) return null;
    const numbers = castArrayProperty(value, property);
    if (!numbers.length) return null;
    const result = Math.min(...numbers);
    return (
      value.find((item) => {
        return (
          castToNumber(item[property] as number | string | Date) === result
        );
      }) ?? null
    );
  }
}
