export interface IEqualityValidator<TType> {
  isEqualTo: (value: TType) => void;
  isNotEqualTo: (value: TType) => void;
}
