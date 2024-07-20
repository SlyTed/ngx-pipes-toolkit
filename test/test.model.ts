type TestNestedModel = {
  content: unknown;
};

export type TestModel = {
  sameNumber: number;
  numberOnly: number;
  optionalNumber?: number;
  nullableNumber: number | null;
  numberAndString: number | string;
  unknown: unknown;
  nil: null | undefined;
  nestedObject: TestNestedModel;
};
