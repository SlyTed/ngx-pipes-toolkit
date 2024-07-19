import { SumByPipe } from './sum-by.pipe';

describe('Sum by', () => {
  let pipe: SumByPipe;

  beforeEach(() => {
    pipe = new SumByPipe();
  });

  test('Should return null if nil value', () => {
    expect(pipe.transform(undefined)).toBeNull();
    expect(pipe.transform(null)).toBeNull();
  });

  test('Should return null if empty array', () => {
    expect(pipe.transform([])).toBeNull();
  });

  test('Should return correct sum if non-empty array', () => {
    expect(pipe.transform([10])).toEqual(10);
    expect(pipe.transform([10, 10])).toEqual(20);
    expect(pipe.transform([1, 2, 3, 4, 5])).toEqual(15);
    expect(pipe.transform([-10, 0, 10])).toEqual(0);
  });
});
