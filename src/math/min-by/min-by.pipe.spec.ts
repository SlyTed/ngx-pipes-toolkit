import { MinByPipe } from './min-by.pipe';

import { TEST_DATA } from 'test/test.data';
import type { TestModel } from 'test/test.model';

describe('MATH - Min by', () => {
  let pipe: MinByPipe;

  beforeEach(() => {
    pipe = new MinByPipe();
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

  test('Should return correct item with smallest property value if non-empty array and number property', () => {
    expect(pipe.transform(TEST_DATA, 'sameNumber')).toEqual(TEST_DATA.at(0));
    expect(pipe.transform(TEST_DATA, 'numberOnly')).toEqual(TEST_DATA.at(0));
    expect(pipe.transform(TEST_DATA, 'optionalNumber')).toEqual(
      TEST_DATA.at(0),
    );
    expect(pipe.transform(TEST_DATA, 'nullableNumber')).toEqual(
      TEST_DATA.at(0),
    );
    expect(pipe.transform(TEST_DATA, 'numberAndString')).toEqual(
      TEST_DATA.at(0),
    );
    expect(pipe.transform(TEST_DATA, 'numberAndStringAndDate')).toEqual(
      TEST_DATA.at(0),
    );
    expect(pipe.transform(TEST_DATA, 'unknown')).toEqual(TEST_DATA.at(0));
  });
});
