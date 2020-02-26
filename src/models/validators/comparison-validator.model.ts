export interface IComparisonValidator<TType> {
    isLessThan: (value: TType) => void;
    isLessThanOrEqualTo: (value: TType) => void;
    isGreaterThan: (value: TType) => void;
    isGreaterThanOrEqualTo: (value: TType) => void;
    isBetween: (from: TType, to: TType) => void;
}
