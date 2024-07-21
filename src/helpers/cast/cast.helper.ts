import { toNumber } from 'lodash';
import { isNumberOrStringOrDate } from '../type-guards/type-guards.helper';

// NOTE: these functions were implemented
// because Lodash does not fully support dates for comparisons

/**
 * Filters out invalid values and casts the provided property to numbers for an array of objects.
 *
 * It filters out objects that have as value for the provided property:
 * - `NaN` numbers
 * - invalid strings (neither a valid number nor a parsable date)
 * - invalid dates
 *
 * @param array - The array of objects to iterate over.
 * @template T - The type of the objects in the array.
 * @template K - The name of the object property.
 * @returns The array of number with the property casted to numbers.
 */
export function castArrayProperty<T extends object, K extends keyof T & string>(
  array: T[],
  property: K,
): number[] {
  return array.reduce((acc: number[], item: T) => {
    const current = item[property];
    // 1. Cast to number | string | Date
    if (!isNumberOrStringOrDate(current)) return acc;
    // 2. Cast to number
    const cast = castToNumber(current);
    // 3. Check if the number is not NaN (cast can return NaN)
    if (Number.isNaN(cast)) return acc;
    acc.push(cast);
    return acc;
  }, []);
}

/**
 * Casts the value to a number.
 *
 * @param value - The value to cast.
 * @returns
 *   The casted value, or `NaN` if the value is:
 *   - a number already `NaN`
 *   - an invalid string (neither a valid number nor a parsable date)
 *   - an invalid date.
 */
export function castToNumber(value: number | string | Date): number {
  switch (typeof value) {
    case 'string': {
      // Number
      const castedToNumber = toNumber(value);
      if (!Number.isNaN(castedToNumber)) return castedToNumber;
      // Date
      const castedToDate = new Date(value);
      if (!Number.isNaN(castedToDate.getTime())) return castedToDate.getTime();

      return Number.NaN;
    }
    case 'object': {
      return value.getTime();
    }
  }
  return value;
}
