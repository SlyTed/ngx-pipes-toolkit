import { MeanByPipe } from './mean-by.pipe';

describe('Mean by', () => {
  let pipe: MeanByPipe;

  beforeEach(() => {
    pipe = new MeanByPipe();
  });

  test('Should return null if nil value', () => {
    expect(pipe.transform(undefined)).toEqual(null);
    expect(pipe.transform(null)).toEqual(null);
  });

  test('Should return null if empty array', () => {
    expect(pipe.transform([])).toEqual(null);
  });

  test('Should return correct mean if non-nil value and non-empty array', () => {
    expect(pipe.transform([10])).toEqual(10);
    expect(pipe.transform([10, 10])).toEqual(10);
    expect(pipe.transform([1, 2, 3, 4, 5])).toEqual(3);
    expect(pipe.transform([-10, 0, 10])).toEqual(0);
  });
});
