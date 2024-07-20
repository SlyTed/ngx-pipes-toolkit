type TestNestedModel = {
  content: unknown;
};

export type TestModel = {
  numberOnly: number;
  optionalNumber?: number;
  nullableNumber: number | null;
  numberAndString: number | string;
  unknown: unknown;
  nestedObject: TestNestedModel;
};
