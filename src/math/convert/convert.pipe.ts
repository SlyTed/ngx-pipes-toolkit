import { Injectable, Pipe, type PipeTransform } from '@angular/core';

import convert, {
  type Angle,
  type ApparentPower,
  type Area,
  type Current,
  type Distance,
  type Ditgital,
  type Energy,
  type Frequency,
  type Illuminance,
  type Mass,
  type Pace,
  type PartsPer,
  type Power,
  type Pressure,
  type ReactiveEnergy,
  type ReactivePower,
  type Speed,
  type Temperature,
  type Time,
  type Unit,
  type Voltage,
  type Volume,
  type VolumeFlowRate,
} from 'convert-units';

/**
 * Pipe that converts a value with its current unit to the final unit.
 *
 * The name is `convert`.
 */
@Pipe({
  standalone: true,
  pure: true,
  name: 'convert',
})
@Injectable()
export class ConvertPipe implements PipeTransform {
  transform(value: null | undefined, currentUnit: Unit, finalUnit: Unit): null;

  /**
   * Converts an angle value.
   *
   * @param value - The angle value to convert.
   * @param currentUnit - The current angle unit of the value.
   * @param finalUnit - The final angle unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(value: number, currentUnit: Angle, finalUnit: Angle): number;

  /**
   * Converts an apparent power value.
   *
   * @param value - The apparent power value to convert.
   * @param currentUnit - The current apparent power unit of the value.
   * @param finalUnit - The final apparent power unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number,
    currentUnit: ApparentPower,
    finalUnit: ApparentPower,
  ): number;

  /**
   * Converts an area value.
   *
   * @param value - The area value to convert.
   * @param currentUnit - The current area unit of the value.
   * @param finalUnit - The final area unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(value: number, currentUnit: Area, finalUnit: Area): number;

  /**
   * Converts a current value.
   *
   * @param value - The current value to convert.
   * @param currentUnit - The current unit of the value.
   * @param finalUnit - The final current unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(value: number, currentUnit: Current, finalUnit: Current): number;

  /**
   * Converts a distance value.
   *
   * @param value - The distance value to convert.
   * @param currentUnit - The current distance unit of the value.
   * @param finalUnit - The final distance unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(value: number, currentUnit: Distance, finalUnit: Distance): number;

  /**
   * Converts a digital value.
   *
   * @param value - The digital value to convert.
   * @param currentUnit - The current digital unit of the value.
   * @param finalUnit - The final digital unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(value: number, currentUnit: Ditgital, finalUnit: Ditgital): number;

  /**
   * Converts an energy value.
   *
   * @param value - The energy value to convert.
   * @param currentUnit - The current energy unit of the value.
   * @param finalUnit - The final energy unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(value: number, currentUnit: Energy, finalUnit: Energy): number;

  /**
   * Converts a frequency value.
   *
   * @param value - The frequency value to convert.
   * @param currentUnit - The current frequency unit of the value.
   * @param finalUnit - The final frequency unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number,
    currentUnit: Frequency,
    finalUnit: Frequency,
  ): number;

  /**
   * Converts an illuminance value.
   *
   * @param value - The illuminance value to convert.
   * @param currentUnit - The current illuminance unit of the value.
   * @param finalUnit - The final illuminance unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number,
    currentUnit: Illuminance,
    finalUnit: Illuminance,
  ): number;

  /**
   * Converts a mass value.
   *
   * @param value - The mass value to convert.
   * @param currentUnit - The current mass unit of the value.
   * @param finalUnit - The final mass unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(value: number, currentUnit: Mass, finalUnit: Mass): number;

  /**
   * Converts a pace value.
   *
   * @param value - The pace value to convert.
   * @param currentUnit - The current pace unit of the value.
   * @param finalUnit - The final pace unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(value: number, currentUnit: Pace, finalUnit: Pace): number;

  /**
   * Converts a parts par value.
   *
   * @param value - The parts per value to convert.
   * @param currentUnit - The current parts per unit of the value.
   * @param finalUnit - The final parts per unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(value: number, currentUnit: PartsPer, finalUnit: PartsPer): number;

  /**
   * Converts a power value.
   *
   * @param value - The power value to convert.
   * @param currentUnit - The current power unit of the value.
   * @param finalUnit - The final power unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(value: number, currentUnit: Power, finalUnit: Power): number;

  /**
   * Converts a pressure value.
   *
   * @param value - The pressure value to convert.
   * @param currentUnit - The current pressure unit of the value.
   * @param finalUnit - The final pressure unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(value: number, currentUnit: Pressure, finalUnit: Pressure): number;

  /**
   * Converts a reactive energy value.
   *
   * @param value - The reactive energy value to convert.
   * @param currentUnit - The current reactive energy unit of the value.
   * @param finalUnit - The final reactive energy unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number,
    currentUnit: ReactiveEnergy,
    finalUnit: ReactiveEnergy,
  ): number;

  /**
   * Converts a reactive power value.
   *
   * @param value - The reactive power value to convert.
   * @param currentUnit - The current reactive power unit of the value.
   * @param finalUnit - The final reactive power unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number,
    currentUnit: ReactivePower,
    finalUnit: ReactivePower,
  ): number;

  /**
   * Converts a speed value.
   *
   * @param value - The speed value to convert.
   * @param currentUnit - The current speed unit of the value.
   * @param finalUnit - The final speed unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(value: number, currentUnit: Speed, finalUnit: Speed): number;

  /**
   * Converts a temperature value.
   *
   * @param value - The temperature value to convert.
   * @param currentUnit - The current temperature unit of the value.
   * @param finalUnit - The final temperature unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number,
    currentUnit: Temperature,
    finalUnit: Temperature,
  ): number;

  /**
   * Converts a time value.
   *
   * @param value - The time value to convert.
   * @param currentUnit - The current time unit of the value.
   * @param finalUnit - The final time unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(value: number, currentUnit: Time, finalUnit: Time): number;

  /**
   * Converts a voltage value.
   *
   * @param value - The voltage value to convert.
   * @param currentUnit - The current voltage unit of the value.
   * @param finalUnit - The final voltage unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(value: number, currentUnit: Voltage, finalUnit: Voltage): number;

  /**
   * Converts a volume value.
   *
   * @param value - The volume value to convert.
   * @param currentUnit - The current volume unit of the value.
   * @param finalUnit - The final volume unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(value: number, currentUnit: Volume, finalUnit: Volume): number;

  /**
   * Converts a volume flow value.
   *
   * @param value - The volume flow value to convert.
   * @param currentUnit - The current volume flow unit of the value.
   * @param finalUnit - The final volume flow unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number,
    currentUnit: VolumeFlowRate,
    finalUnit: VolumeFlowRate,
  ): number;

  /**
   * Converts a value with its current unit to The final unit.
   *
   * @param value - The value to convert.
   * @param currentUnit - The current unit of the value.
   * @param finalUnit - The final unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number | null | undefined,
    currentUnit: Unit,
    finalUnit: Unit,
  ): number | null {
    if (!value && value !== 0) return null;
    return convert(value).from(currentUnit).to(finalUnit);
  }
}
