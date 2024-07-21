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
  /**
   * Converts an angle value.
   *
   * @param value - The angle value to convert.
   * @param currentUnit - The current angle unit of the value.
   * @param finalUnit - The final angle unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number | null | undefined,
    currentUnit: Angle,
    finalUnit: Angle,
  ): number | null;

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
    value: number | null | undefined,
    currentUnit: ApparentPower,
    finalUnit: ApparentPower,
  ): number | null;

  /**
   * Converts an area value.
   *
   * @param value - The area value to convert.
   * @param currentUnit - The current area unit of the value.
   * @param finalUnit - The final area unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number | null | undefined,
    currentUnit: Area,
    finalUnit: Area,
  ): number | null;

  /**
   * Converts a current value.
   *
   * @param value - The current value to convert.
   * @param currentUnit - The current unit of the value.
   * @param finalUnit - The final current unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number | null | undefined,
    currentUnit: Current,
    finalUnit: Current,
  ): number | null;

  /**
   * Converts a distance value.
   *
   * @param value - The distance value to convert.
   * @param currentUnit - The current distance unit of the value.
   * @param finalUnit - The final distance unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number | null | undefined,
    currentUnit: Distance,
    finalUnit: Distance,
  ): number | null;

  /**
   * Converts a digital value.
   *
   * @param value - The digital value to convert.
   * @param currentUnit - The current digital unit of the value.
   * @param finalUnit - The final digital unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number | null | undefined,
    currentUnit: Ditgital,
    finalUnit: Ditgital,
  ): number | null;

  /**
   * Converts an energy value.
   *
   * @param value - The energy value to convert.
   * @param currentUnit - The current energy unit of the value.
   * @param finalUnit - The final energy unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number | null | undefined,
    currentUnit: Energy,
    finalUnit: Energy,
  ): number | null;

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
    value: number | null | undefined,
    currentUnit: Frequency,
    finalUnit: Frequency,
  ): number | null;

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
    value: number | null | undefined,
    currentUnit: Illuminance,
    finalUnit: Illuminance,
  ): number | null;

  /**
   * Converts a mass value.
   *
   * @param value - The mass value to convert.
   * @param currentUnit - The current mass unit of the value.
   * @param finalUnit - The final mass unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number | null | undefined,
    currentUnit: Mass,
    finalUnit: Mass,
  ): number | null;

  /**
   * Converts a pace value.
   *
   * @param value - The pace value to convert.
   * @param currentUnit - The current pace unit of the value.
   * @param finalUnit - The final pace unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number | null | undefined,
    currentUnit: Pace,
    finalUnit: Pace,
  ): number | null;

  /**
   * Converts a parts value.
   *
   * @param value - The parts per value to convert.
   * @param currentUnit - The current parts per unit of the value.
   * @param finalUnit - The final parts per unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number | null | undefined,
    currentUnit: PartsPer,
    finalUnit: PartsPer,
  ): number | null;

  /**
   * Converts a power value.
   *
   * @param value - The power value to convert.
   * @param currentUnit - The current power unit of the value.
   * @param finalUnit - The final power unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number | null | undefined,
    currentUnit: Power,
    finalUnit: Power,
  ): number | null;

  /**
   * Converts a pressure value.
   *
   * @param value - The pressure value to convert.
   * @param currentUnit - The current pressure unit of the value.
   * @param finalUnit - The final pressure unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number | null | undefined,
    currentUnit: Pressure,
    finalUnit: Pressure,
  ): number | null;

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
    value: number | null | undefined,
    currentUnit: ReactiveEnergy,
    finalUnit: ReactiveEnergy,
  ): number | null;

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
    value: number | null | undefined,
    currentUnit: ReactivePower,
    finalUnit: ReactivePower,
  ): number | null;

  /**
   * Converts a speed value.
   *
   * @param value - The speed value to convert.
   * @param currentUnit - The current speed unit of the value.
   * @param finalUnit - The final speed unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number | null | undefined,
    currentUnit: Speed,
    finalUnit: Speed,
  ): number | null;

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
    value: number | null | undefined,
    currentUnit: Temperature,
    finalUnit: Temperature,
  ): number | null;

  /**
   * Converts a time value.
   *
   * @param value - The time value to convert.
   * @param currentUnit - The current time unit of the value.
   * @param finalUnit - The final time unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number | null | undefined,
    currentUnit: Time,
    finalUnit: Time,
  ): number | null;

  /**
   * Converts a voltage value.
   *
   * @param value - The voltage value to convert.
   * @param currentUnit - The current voltage unit of the value.
   * @param finalUnit - The final voltage unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number | null | undefined,
    currentUnit: Voltage,
    finalUnit: Voltage,
  ): number | null;

  /**
   * Converts a volume value.
   *
   * @param value - The volume value to convert.
   * @param currentUnit - The current volume unit of the value.
   * @param finalUnit - The final volume unit.
   * @returns
   *   The result of the conversion, or `null` if the provided value is `nil`.
   */
  transform(
    value: number | null | undefined,
    currentUnit: Volume,
    finalUnit: Volume,
  ): number | null;

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
    value: number | null | undefined,
    currentUnit: VolumeFlowRate,
    finalUnit: VolumeFlowRate,
  ): number | null;

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
