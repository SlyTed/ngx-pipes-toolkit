import { MeanByPipe } from './mean-by.pipe';

import { TEST_DATA } from 'test/test.data';
import type { TestModel } from 'test/test.model';

describe('MATH - Mean by', () => {
  let pipe: MeanByPipe;

  beforeEach(() => {
    pipe = new MeanByPipe();
  });

  test('Should return null if nil value', () => {
    expect(
      pipe.transform(undefined as TestModel[] | undefined, 'numberOnly'),
    ).toEqual(null);
    expect(pipe.transform(null as TestModel[] | null, 'numberOnly')).toEqual(
      null,
    );
  });

  test('Should return null if empty array', () => {
    expect(pipe.transform([] as TestModel[], 'numberOnly')).toEqual(null);
  });

  test('Should return null if non-empty array and non-number property', () => {
    expect(pipe.transform(TEST_DATA, 'nil')).toEqual(null);
    expect(pipe.transform(TEST_DATA, 'nestedObject')).toEqual(null);
  });

  test('Should return correct mean if non-empty array and number property', () => {
    expect(pipe.transform(TEST_DATA, 'numberOnly')).toEqual(3);
    expect(pipe.transform(TEST_DATA, 'optionalNumber')).toEqual(1);
    expect(pipe.transform(TEST_DATA, 'nullableNumber')).toEqual(1.5);
    expect(pipe.transform(TEST_DATA, 'numberAndString')).toEqual(1.5);
    expect(pipe.transform(TEST_DATA, 'numberAndStringAndDate')).toEqual(
      (new Date('2000-01-01T00:00:00.000+01:00').getTime() + 
      new Date('2010-01-01').getTime() +
      new Date('2020-01-01').getTime()) /
      3
    );
    expect(pipe.transform(TEST_DATA, 'unknown')).toEqual(1);
  });
});
