export interface IStringValidator {
  hasLength: (min: number, max: number) => void;
  matches: (expr: RegExp) => void;
}
