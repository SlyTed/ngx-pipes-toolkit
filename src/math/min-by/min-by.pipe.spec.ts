import { MinByPipe } from './min-by.pipe';

describe('Min by', () => {
  let pipe: MinByPipe;

  beforeEach(() => {
    pipe = new MinByPipe();
  });

  test('Should return null if nil value', () => {
    expect(pipe.transform(undefined)).toBeNull();
    expect(pipe.transform(null)).toBeNull();
  });

  test('Should return null if empty array', () => {
    expect(pipe.transform([])).toBeNull();
  });

  test('Should return smallest number if non-empty array', () => {
    expect(pipe.transform([10])).toEqual(10);
    expect(pipe.transform([10, 10])).toEqual(10);
    expect(pipe.transform([1, 2, 3, 4, 5])).toEqual(1);
    expect(pipe.transform([-10, 0, 10])).toEqual(-10);
  });
});
