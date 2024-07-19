import { MaxByPipe } from './max-by.pipe';

describe('Max by', () => {
  let pipe: MaxByPipe = new MaxByPipe();

  beforeEach(() => {
    pipe = new MaxByPipe();
  });

  test('Should return null if nil value', () => {
    expect(pipe.transform(undefined)).toBeNull();
    expect(pipe.transform(null)).toBeNull();
  });

  test('Should return null if empty array', () => {
    expect(pipe.transform([])).toBeNull();
  });

  test('Should return greatest number if non-empty array', () => {
    expect(pipe.transform([10])).toEqual(10);
    expect(pipe.transform([10, 10])).toEqual(10);
    expect(pipe.transform([1, 2, 3, 4, 5])).toEqual(5);
    expect(pipe.transform([-10, 0, 10])).toEqual(10);
  });
});
