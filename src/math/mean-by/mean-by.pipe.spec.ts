import { MeanByPipe } from './mean-by.pipe';

import { TEST_DATA } from 'test/test.data';
import type { TestModel } from 'test/test.model';

describe('Mean by', () => {
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

  test('Should return null if non-number property', () => {
    expect(pipe.transform(TEST_DATA, 'numberAndString')).toEqual(null);
    expect(pipe.transform(TEST_DATA, 'nestedObject')).toEqual(null);
    expect(pipe.transform(TEST_DATA, 'unknown')).toEqual(null);
  });

  test('Should return correct mean if non-empty array and number property', () => {
    expect(pipe.transform(TEST_DATA, 'numberOnly')).toEqual(2);
    expect(pipe.transform(TEST_DATA, 'optionalNumber')).toEqual(1 / 3);
    expect(pipe.transform(TEST_DATA, 'nullableNumber')).toEqual(1);
  });
});
