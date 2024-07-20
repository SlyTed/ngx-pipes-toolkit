import type { TestModel } from './test.model';

export const TEST_DATA: TestModel[] = [
  {
    numberOnly: 1,
    optionalNumber: 1,
    nullableNumber: 1,
    numberAndString: 1,
    unknown: 1,
    nil: null,
    nestedObject: { content: '' },
  },
  {
    numberOnly: 2,
    optionalNumber: undefined,
    nullableNumber: 2,
    numberAndString: '2',
    unknown: undefined,
    nil: undefined,
    nestedObject: { content: undefined },
  },
  {
    numberOnly: 3,
    nullableNumber: null,
    numberAndString: 'any',
    unknown: {},
    nil: null,
    nestedObject: { content: {} },
  },
];
