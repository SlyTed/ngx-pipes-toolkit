import { ConvertPipe } from './convert.pipe';

suite('MATH - Convert', () => {
  let pipe: ConvertPipe;

  beforeEach(() => {
    pipe = new ConvertPipe();
  });

  test('Should return null angle if nil value', () => {
    expect(pipe.transform(undefined, 'deg', 'deg')).toEqual(null);
    expect(pipe.transform(null, 'deg', 'rad')).toEqual(null);
  });
  test('Should return correct angle if non-nil value', () => {
    expect(pipe.transform(10, 'deg', 'deg')).toEqual(10);
    expect(pipe.transform(10, 'deg', 'rad')).toBeCloseTo(0.174533);
  });

  test('Should return null apparent power if nil value', () => {
    expect(pipe.transform(undefined, 'kVA', 'kVA')).toEqual(null);
    expect(pipe.transform(null, 'kVA', 'VA')).toEqual(null);
  });
  test('Should return correct apparent power if non-nil value', () => {
    expect(pipe.transform(10, 'kVA', 'kVA')).toEqual(10);
    expect(pipe.transform(10, 'kVA', 'VA')).toBeCloseTo(10_000);
  });

  test('Should return null area if nil value', () => {
    expect(pipe.transform(undefined, 'm2', 'cm2')).toEqual(null);
    expect(pipe.transform(null, 'm2', 'ha')).toEqual(null);
  });
  test('Should return correct area if non-nil value', () => {
    expect(pipe.transform(10, 'm2', 'cm2')).toEqual(100_000);
    expect(pipe.transform(10, 'm2', 'ha')).toBeCloseTo(0.001);
  });

  test('Should return null current if nil value', () => {
    expect(pipe.transform(undefined, 'A', 'A')).toEqual(null);
    expect(pipe.transform(null, 'kA', 'A')).toEqual(null);
  });
  test('Should return correct current if non-nil value', () => {
    expect(pipe.transform(10, 'A', 'A')).toEqual(10);
    expect(pipe.transform(10, 'kA', 'A')).toBeCloseTo(10_000);
  });

  test('Should return null distance if nil value', () => {
    expect(pipe.transform(undefined, 'km', 'km')).toEqual(null);
    expect(pipe.transform(null, 'km', 'mi')).toEqual(null);
  });
  test('Should return correct distance if non-nil value', () => {
    expect(pipe.transform(10, 'km', 'km')).toEqual(10);
    expect(pipe.transform(10, 'km', 'mi')).toBeCloseTo(6.21371);
  });

  test('Should return null ditgital if nil value', () => {
    expect(pipe.transform(undefined, 'b', 'b')).toEqual(null);
    expect(pipe.transform(null, 'b', 'B')).toEqual(null);
  });
  test('Should return correct ditgital if non-nil value', () => {
    expect(pipe.transform(10, 'b', 'b')).toEqual(10);
    expect(pipe.transform(10, 'b', 'B')).toBeCloseTo(1.25);
  });

  test('Should return null energy if nil value', () => {
    expect(pipe.transform(undefined, 'Wh', 'Wh')).toEqual(null);
    expect(pipe.transform(null, 'Wh', 'J')).toEqual(null);
  });
  test('Should return correct energy if non-nil value', () => {
    expect(pipe.transform(10, 'Wh', 'Wh')).toEqual(10);
    expect(pipe.transform(10, 'Wh', 'J')).toBeCloseTo(36_000);
  });

  test('Should return null frequency if nil value', () => {
    expect(pipe.transform(undefined, 'kHz', 'kHz')).toEqual(null);
    expect(pipe.transform(null, 'kHz', 'Hz')).toEqual(null);
  });
  test('Should return correct frequency if non-nil value', () => {
    expect(pipe.transform(10, 'kHz', 'kHz')).toEqual(10);
    expect(pipe.transform(10, 'kHz', 'Hz')).toBeCloseTo(10_000);
  });

  test('Should return null illuminance if nil value', () => {
    expect(pipe.transform(null, 'ft-cd', 'ft-cd')).toEqual(null);
    expect(pipe.transform(undefined, 'ft-cd', 'lx')).toEqual(null);
  });
  test('Should return correct illuminance if non-nil value', () => {
    expect(pipe.transform(10, 'ft-cd', 'ft-cd')).toEqual(10);
    expect(pipe.transform(10, 'ft-cd', 'lx')).toBeCloseTo(107.639);
  });

  test('Should return null mass if nil value', () => {
    expect(pipe.transform(undefined, 'kg', 'kg')).toEqual(null);
    expect(pipe.transform(null, 'kg', 'lb')).toEqual(null);
  });
  test('Should return correct mass if non-nil value', () => {
    expect(pipe.transform(10, 'kg', 'kg')).toEqual(10);
    expect(pipe.transform(10, 'kg', 'lb')).toBeCloseTo(22.0462);
  });

  test('Should return null pace if nil value', () => {
    expect(pipe.transform(undefined, 's/m', 's/m')).toEqual(null);
    expect(pipe.transform(null, 's/m', 'min/km')).toEqual(null);
  });
  test('Should return correct pace if non-nil value', () => {
    expect(pipe.transform(10, 's/m', 's/m')).toEqual(10);
    expect(pipe.transform(10, 's/m', 'min/km')).toBeCloseTo(166.667);
  });

  test('Should return null parts per if nil value', () => {
    expect(pipe.transform(undefined, 'ppb', 'ppb')).toEqual(null);
    expect(pipe.transform(null, 'ppb', 'ppt')).toEqual(null);
  });
  test('Should return correct parts per if non-nil value', () => {
    expect(pipe.transform(10, 'ppb', 'ppb')).toEqual(10);
    expect(pipe.transform(10, 'ppb', 'ppt')).toBeCloseTo(10_000);
  });

  test('Should return null power if nil value', () => {
    expect(pipe.transform(undefined, 'kW', 'kW')).toEqual(null);
    expect(pipe.transform(null, 'kW', 'W')).toEqual(null);
  });
  test('Should return correct power if non-nil value', () => {
    expect(pipe.transform(10, 'kW', 'kW')).toEqual(10);
    expect(pipe.transform(10, 'kW', 'W')).toBeCloseTo(10_000);
  });

  test('Should return null pressure if nil value', () => {
    expect(pipe.transform(undefined, 'bar', 'bar')).toEqual(null);
    expect(pipe.transform(null, 'bar', 'Pa')).toEqual(null);
  });
  test('Should return correct pressure if non-nil value', () => {
    expect(pipe.transform(10, 'bar', 'bar')).toEqual(10);
    expect(pipe.transform(10, 'bar', 'Pa')).toBeCloseTo(1_000_000);
  });

  test('Should return null reactive energy if nil value', () => {
    expect(pipe.transform(undefined, 'kVARh', 'kVARh')).toEqual(null);
    expect(pipe.transform(null, 'kVARh', 'VARh')).toEqual(null);
  });
  test('Should return correct reactive energy if non-nil value', () => {
    expect(pipe.transform(10, 'kVARh', 'kVARh')).toEqual(10);
    expect(pipe.transform(10, 'kVARh', 'VARh')).toBeCloseTo(10_000);
  });

  test('Should return null reactive power if nil value', () => {
    expect(pipe.transform(undefined, 'kVAR', 'kVAR')).toEqual(null);
    expect(pipe.transform(null, 'kVAR', 'VAR')).toEqual(null);
  });
  test('Should return correct reactive power if non-nil value', () => {
    expect(pipe.transform(10, 'kVAR', 'kVAR')).toEqual(10);
    expect(pipe.transform(10, 'kVAR', 'VAR')).toBeCloseTo(10_000);
  });

  test('Should return null speed if nil value', () => {
    expect(pipe.transform(undefined, 'km/h', 'km/h')).toEqual(null);
    expect(pipe.transform(null, 'km/h', 'ft/s')).toEqual(null);
  });
  test('Should return correct speed if non-nil value', () => {
    expect(pipe.transform(10, 'km/h', 'km/h')).toEqual(10);
    expect(pipe.transform(10, 'km/h', 'ft/s')).toBeCloseTo(9.11344);
  });

  test('Should return null temperature if nil value', () => {
    expect(pipe.transform(undefined, 'C', 'C')).toEqual(null);
    expect(pipe.transform(null, 'C', 'F')).toEqual(null);
  });
  test('Should return correct temperature if non-nil value', () => {
    expect(pipe.transform(10, 'C', 'C')).toEqual(10);
    expect(pipe.transform(10, 'C', 'F')).toBeCloseTo(50);
  });

  test('Should return null time if nil value', () => {
    expect(pipe.transform(undefined, 'min', 'min')).toEqual(null);
    expect(pipe.transform(null, 'min', 'h')).toEqual(null);
  });
  test('Should return correct time if non-nil value', () => {
    expect(pipe.transform(10, 'min', 'min')).toEqual(10);
    expect(pipe.transform(10, 'min', 'h')).toBeCloseTo(0.1667);
  });

  test('Should return null voltage if nil value', () => {
    expect(pipe.transform(undefined, 'kV', 'kV')).toEqual(null);
    expect(pipe.transform(null, 'kV', 'V')).toEqual(null);
  });
  test('Should return correct voltage if non-nil value', () => {
    expect(pipe.transform(10, 'kV', 'kV')).toEqual(10);
    expect(pipe.transform(10, 'kV', 'V')).toBeCloseTo(10_000);
  });

  test('Should return null volume if nil value', () => {
    expect(pipe.transform(undefined, 'l', 'l')).toEqual(null);
    expect(pipe.transform(null, 'l', 'gal')).toEqual(null);
  });
  test('Should return correct volume if non-nil value', () => {
    expect(pipe.transform(10, 'l', 'l')).toEqual(10);
    expect(pipe.transform(10, 'l', 'gal')).toBeCloseTo(2.64172);
  });

  test('Should return null volume flow rate if nil value', () => {
    expect(pipe.transform(undefined, 'l/min', 'l/min')).toEqual(null);
    expect(pipe.transform(null, 'l/min', 'gal/min')).toEqual(null);
  });
  test('Should return correct volume flow rate if non-nil value', () => {
    expect(pipe.transform(10, 'l/min', 'l/min')).toEqual(10);
    expect(pipe.transform(10, 'l/min', 'gal/min')).toBeCloseTo(2.64172);
  });
});
