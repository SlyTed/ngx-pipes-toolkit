import { ConvertPipe } from './convert.pipe';

describe('Convert', () => {
  let pipe: ConvertPipe;

  beforeEach(() => {
    pipe = new ConvertPipe();
  });

  test('Should return null if nil value', () => {
    expect(pipe.transform(undefined, 'A', 'A')).toBeNull();
    expect(pipe.transform(null, 'A', 'A')).toBeNull();
  });

  test('Should return zero if zero value', () => {
    expect(pipe.transform(0, 'deg', 'deg')).toEqual(0);
  });

  test('Should return correct angle if valid values', () => {
    expect(pipe.transform(10, 'deg', 'deg')).toEqual(10);
    expect(pipe.transform(10, 'deg', 'rad')).toBeCloseTo(0.174533);
  });

  test('Should return correct apparent power if valid values', () => {
    expect(pipe.transform(10, 'kVA', 'kVA')).toEqual(10);
    expect(pipe.transform(10, 'kVA', 'VA')).toBeCloseTo(10_000);
  });

  test('Should return correct apparent power if valid values', () => {
    expect(pipe.transform(10, 'km2', 'km2')).toEqual(10);
    expect(pipe.transform(10, 'km2', 'm2')).toBeCloseTo(1e7);
  });

  test('Should return correct current if valid values', () => {
    expect(pipe.transform(10, 'A', 'A')).toEqual(10);
    expect(pipe.transform(10, 'kA', 'A')).toBeCloseTo(10_000);
  });

  test('Should return correct distance if valid values', () => {
    expect(pipe.transform(10, 'km', 'km')).toEqual(10);
    expect(pipe.transform(10, 'km', 'mi')).toBeCloseTo(6.21371);
  });

  test('Should return correct ditgital if valid values', () => {
    expect(pipe.transform(10, 'b', 'b')).toEqual(10);
    expect(pipe.transform(10, 'b', 'B')).toBeCloseTo(1.25);
  });

  test('Should return correct energy if valid values', () => {
    expect(pipe.transform(10, 'Wh', 'Wh')).toEqual(10);
    expect(pipe.transform(10, 'Wh', 'J')).toBeCloseTo(36_000);
  });

  test('Should return correct frequency if valid values', () => {
    expect(pipe.transform(10, 'kHz', 'kHz')).toEqual(10);
    expect(pipe.transform(10, 'kHz', 'Hz')).toBeCloseTo(10_000);
  });

  test('Should return correct illuminance if valid values', () => {
    expect(pipe.transform(10, 'ft-cd', 'ft-cd')).toEqual(10);
    expect(pipe.transform(10, 'ft-cd', 'lx')).toBeCloseTo(107.639);
  });

  test('Should return correct mass if valid values', () => {
    expect(pipe.transform(10, 'kg', 'kg')).toEqual(10);
    expect(pipe.transform(10, 'kg', 'lb')).toBeCloseTo(22.0462);
  });

  test('Should return correct pace if valid values', () => {
    expect(pipe.transform(10, 's/m', 's/m')).toEqual(10);
    expect(pipe.transform(10, 's/m', 'min/km')).toBeCloseTo(166.667);
  });

  test('Should return correct parts per if valid values', () => {
    expect(pipe.transform(10, 'ppb', 'ppb')).toEqual(10);
    expect(pipe.transform(10, 'ppb', 'ppt')).toBeCloseTo(10_000);
  });

  test('Should return correct power if valid values', () => {
    expect(pipe.transform(10, 'kW', 'kW')).toEqual(10);
    expect(pipe.transform(10, 'kW', 'W')).toBeCloseTo(10_000);
  });

  test('Should return correct pressure if valid values', () => {
    expect(pipe.transform(10, 'bar', 'bar')).toEqual(10);
    expect(pipe.transform(10, 'bar', 'Pa')).toBeCloseTo(1_000_000);
  });

  test('Should return correct reactive energy if valid values', () => {
    expect(pipe.transform(10, 'kVARh', 'kVARh')).toEqual(10);
    expect(pipe.transform(10, 'kVARh', 'VARh')).toBeCloseTo(10_000);
  });

  test('Should return correct reactive power if valid values', () => {
    expect(pipe.transform(10, 'kVAR', 'kVAR')).toEqual(10);
    expect(pipe.transform(10, 'kVAR', 'VAR')).toBeCloseTo(10_000);
  });

  test('Should return correct speed if valid values', () => {
    expect(pipe.transform(10, 'km/h', 'km/h')).toEqual(10);
    expect(pipe.transform(10, 'km/h', 'ft/s')).toBeCloseTo(9.11344);
  });

  test('Should return correct temperature if valid values', () => {
    expect(pipe.transform(10, 'C', 'C')).toEqual(10);
    expect(pipe.transform(10, 'C', 'F')).toBeCloseTo(50);
  });

  test('Should return correct time if valid values', () => {
    expect(pipe.transform(10, 'min', 'min')).toEqual(10);
    expect(pipe.transform(10, 'min', 'h')).toBeCloseTo(0.1667);
  });

  test('Should return correct voltage if valid values', () => {
    expect(pipe.transform(10, 'kV', 'kV')).toEqual(10);
    expect(pipe.transform(10, 'kV', 'V')).toBeCloseTo(10_000);
  });

  test('Should return correct volume if valid values', () => {
    expect(pipe.transform(10, 'l', 'l')).toEqual(10);
    expect(pipe.transform(10, 'l', 'gal')).toBeCloseTo(2.64172);
  });

  test('Should return correct volume flow rate if valid values', () => {
    expect(pipe.transform(10, 'l/min', 'l/min')).toEqual(10);
    expect(pipe.transform(10, 'l/min', 'gal/min')).toBeCloseTo(2.64172);
  });
});
