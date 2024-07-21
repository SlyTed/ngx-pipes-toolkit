import { isNumberOrStringOrDate } from './type-guards.helper';

describe('HELPERS - Type guards', () => {
  describe('isNumberOrStringOrDate()', () => {
    test('Should return false if nil', () => {
      expect(isNumberOrStringOrDate(undefined)).toEqual(false);
      expect(isNumberOrStringOrDate(null)).toEqual(false);
    });

    test('Should return false if object', () => {
      expect(isNumberOrStringOrDate({})).toEqual(false);
    });

    test('Should return false if array', () => {
      expect(isNumberOrStringOrDate([])).toEqual(false);
    });

    test('Should return false if array', () => {
      expect(isNumberOrStringOrDate([])).toEqual(false);
    });

    test('Should return true if number', () => {
      expect(isNumberOrStringOrDate(0)).toEqual(true);
      expect(isNumberOrStringOrDate(0)).toEqual(true);
      expect(isNumberOrStringOrDate(-1.5e10)).toEqual(true);
    });

    test('Should return true if string', () => {
      expect(isNumberOrStringOrDate('1')).toEqual(true);
      expect(isNumberOrStringOrDate('2000/01/01')).toEqual(true);
      expect(isNumberOrStringOrDate('any')).toEqual(true);
    });

    test('Should return true if date', () => {
      expect(isNumberOrStringOrDate(new Date('2000/01/01'))).toEqual(true);
      expect(isNumberOrStringOrDate(new Date('invalid'))).toEqual(true);
    });
  });
});
