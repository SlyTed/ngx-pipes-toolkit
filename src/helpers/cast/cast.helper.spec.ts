import { castArrayProperty, castToNumber } from './cast.helper';

suite('HELPERS - Cast', () => {
  suite('castArrayProperty()', () => {
    test('Should return empty array if empty array provided', () => {
      const data: TestModel<number>[] = [];
      expect(castArrayProperty(data, 'property')).toEqual([]);
    });

    test('Should return empty array if NaN numbers', () => {
      const data: TestModel<number>[] = [{ property: Number.NaN }];
      expect(castArrayProperty(data, 'property')).toEqual([]);
    });

    test('Should return empty array if strings neither numbers nor dates', () => {
      const data: TestModel<number | string>[] = [{ property: 'invalid' }];
      expect(castArrayProperty(data, 'property')).toEqual([]);
    });

    test('Should return empty array if invalid dates', () => {
      const data: TestModel<number | Date>[] = [
        { property: new Date('invalid') },
      ];
      expect(castArrayProperty(data, 'property')).toEqual([]);
    });

    test('Should return numbers if numbers provided', () => {
      const data: TestModel<number>[] = [{ property: 1 }, { property: 2 }];
      expect(castArrayProperty(data, 'property')).toEqual([1, 2]);
    });

    test('Should return numbers if strings contain numbers', () => {
      const data: TestModel<string>[] = [
        { property: '1' },
        { property: '10e2' },
      ];
      expect(castArrayProperty(data, 'property')).toEqual([1, 10e2]);
    });

    test('Should return array with casted strings if strings contain dates', () => {
      const data: TestModel<string>[] = [
        { property: '2000/01/01 00:00:00 GMT+0100' },
        { property: '2000-01-01T00:00:00.000+01:00' },
      ];
      expect(castArrayProperty(data, 'property')).toEqual([
        946_681_200_000, 946_681_200_000,
      ]);
    });
  });

  suite('castToNumber()', () => {
    test('Should return NaN if NaN provided', () => {
      expect(castToNumber(Number.NaN)).toEqual(Number.NaN);
    });

    test('Should return NaN if invalid string', () => {
      expect(castToNumber('invalid')).toEqual(Number.NaN);
    });

    test('Should return NaN if invalid date', () => {
      expect(castToNumber(new Date('invalid'))).toEqual(Number.NaN);
    });

    test('Should return number if number provided', () => {
      expect(castToNumber(0)).toEqual(0);
      expect(castToNumber(1)).toEqual(1);
      expect(castToNumber(-1.5e10)).toEqual(-1.5e10);
    });

    test('Should return number if string contains date', () => {
      expect(castToNumber('2000/01/01 00:00:00 GMT+0100')).toEqual(
        946_681_200_000,
      );
      expect(castToNumber('2000-01-01T00:00:00.000+01:00')).toEqual(
        946_681_200_000,
      );
    });
  });
});

type TestModel<T extends number | string | Date> = {
  property: T;
};
