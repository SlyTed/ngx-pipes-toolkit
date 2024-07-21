import { castArrayProperty } from './cast-array-property.helper';

describe('HELPER - Cast array property', () => {
  test('Should return empty array if empty array', () => {
    expect(castArrayProperty([], 'property')).toEqual([]);
  });

  test('Should return same array if no filtering and no casting', () => {
    const data: TestModel<number>[] = [{ property: 1 }, { property: 2 }];
    expect(castArrayProperty(data, 'property')).toEqual([
      { property: 1 },
      { property: 2 },
    ]);
  });

  test('Should return filtered array if NaN number', () => {
    const data: TestModel<number>[] = [
      { property: 1 },
      { property: Number.NaN },
    ];
    expect(castArrayProperty(data, 'property')).toEqual([{ property: 1 }]);
  });

  test('Should return filtered array if string neither number or date', () => {
    const data: TestModel<number | string>[] = [
      { property: 1 },
      { property: 'invalid' },
    ];
    expect(castArrayProperty(data, 'property')).toEqual([{ property: 1 }]);
  });

  test('Should return filtered array if invalid date', () => {
    const data: TestModel<number | Date>[] = [
      { property: 1 },
      { property: new Date('invalid') },
    ];
    expect(castArrayProperty(data, 'property')).toEqual([{ property: 1 }]);
  });

  test('Should return array with casted strings if strings contain numbers', () => {
    const data: TestModel<number | string>[] = [
      { property: 1 },
      { property: '2' },
      { property: '10e2' },
    ];
    expect(castArrayProperty(data, 'property')).toEqual([
      { property: 1 },
      { property: 2 },
      { property: 10e2 },
    ]);
  });

  test('Should return array with casted strings if strings contain dates', () => {
    const data: TestModel<number | string>[] = [
      { property: 1 },
      { property: '2000/01/01' },
      { property: '2000-01-01T00:00:00.000+01:00' },
    ];
    expect(castArrayProperty(data, 'property')).toEqual([
      { property: 1 },
      { property: 946_681_200_000 },
      { property: 946_681_200_000 },
    ]);
  });
});

type TestModel<T extends number | string | Date> = {
  property: T;
};
