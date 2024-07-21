/**
 * Checks whether the value is a number or a string.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a number or a string, `false` otherwise.
 */
export function isNumberOrStringOrDate(
  value: unknown,
): value is number | string | Date {
  return typeof value === 'number'
    || typeof value === 'string'
    || value instanceof Date;
}
