import { EnumeratePipe } from './enumerate.pipe';

describe('Enumerate', () => {
  let pipe: EnumeratePipe;

  beforeEach(() => {
    pipe = new EnumeratePipe();
  });

  test('Should return empty array if nil value', () => {
    expect(pipe.transform(undefined)).toEqual([]);
    expect(pipe.transform(null)).toEqual([]);
  });

  test('Should return empty array if negative value', () => {
    expect(pipe.transform(-1)).toEqual([]);
    expect(pipe.transform(-0.1)).toEqual([]);
    expect(pipe.transform(-5.1)).toEqual([]);
  });

  test('Should return empty array if zero value', () => {
    expect(pipe.transform(-0)).toEqual([]);
    expect(pipe.transform(0)).toEqual([]);
  });

  test('Should return array with correct content if positive value', () => {
    expect(pipe.transform(1)).toEqual([0]);
    expect(pipe.transform(3.1)).toEqual([0, 1, 2, 3]);
    expect(pipe.transform(3.9)).toEqual([0, 1, 2, 3]);
    expect(pipe.transform(5)).toEqual([0, 1, 2, 3, 4]);
  });
});
