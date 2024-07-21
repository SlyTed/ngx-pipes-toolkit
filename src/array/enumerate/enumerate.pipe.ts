import { Injectable, Pipe, type PipeTransform } from '@angular/core';

import range from 'lodash-es/range';

/**
 * Pipe that allows to use `*ngFor` directive or `@for` control flow block
 * like a classic loop (`for (let i = 0; i < n; i++)`).
 *
 * The name is `enumerate`.
 */
@Pipe({
  standalone: true,
  pure: true,
  name: 'enumerate',
})
@Injectable()
export class EnumeratePipe implements PipeTransform {
  /**
   * Iterates from `0` to the provided number (exclusive).
   *
   * @param value - The number of iterations.
   * @returns The array.
   */
  public transform(value: number | null | undefined): number[] {
    if (!value || value <= 0) return [];
    return range(value);
  }
}
