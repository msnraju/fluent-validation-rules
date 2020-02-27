import { IValidationResult } from './validation-result.model';
import { IValidationRule } from './validation-rule.model';

export interface IModelValidator<T> {
  model: T;
  rules: Array<IValidationRule<T>>;
  validate: () => IValidationResult;
}
