export interface IArrayValidator {
  hasMaxLength: (length: number) => void;
  hasMinLength: (length: number) => void;
  isEmpty: () => void;
  isNotEmpty: (length: number) => void;
}
