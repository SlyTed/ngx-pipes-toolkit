import { isValid, toDate } from 'date-fns';
import { toNumber } from 'lodash';

// NOTE: 'castArrayProperty' function was implemented
// because Lodash does not fully support dates for comparisons

/**
 * Filters out invalid values and casts the provided property to numbers for an array of objects.
 *
 * It filters out objects that have as value for the provided property:
 * - `NaN` numbers
 * - Non-castable strings (neither a valid number nor a parsable date)
 * - Invalid dates
 *
 * @param array - The array of objects to iterate over.
 * @template T - The type of the objects in the array.
 * @template K - The name of the object property.
 * @returns A new array with the property casted to numbers.
 */
export function castArrayProperty<T extends object, K extends keyof T & string>(
  array: T[],
  property: K,
): (Omit<T, K> & Record<K, number>)[] {
  return array.reduce((acc: (Omit<T, K> & Record<K, number>)[], current: T) => {
    const value = current[property];
    switch (typeof value) {
      case 'number': {
        if (!Number.isNaN(value)) {
          return [...acc, { ...current, [property]: value }];
        }
        break;
      }
      case 'string': {
        // Number
        const castedNumber = toNumber(value);
        if (!Number.isNaN(castedNumber)) {
          return [...acc, { ...current, [property]: castedNumber }];
        }
        // Date
        const castedDate = toDate(value);
        if (isValid(castedDate)) {
          return [...acc, { ...current, [property]: castedDate.getTime() }];
        }
        break;
      }
      case 'object': {
        if (!(value instanceof Date)) break;
        if (!isValid(value)) break;
        return [...acc, { ...current, [property]: value.getTime() }];
      }
    }
    return acc;
  }, []);
}
