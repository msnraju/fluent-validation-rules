import { IEqualityValidator } from '../models/validators/equality-validator.model';
import { MemberFunc } from '../types';
import { IValidationRule } from '../models/validation-rule.model';

export class EqualityValidator<T, TType> implements IEqualityValidator<TType> {
  private rule: IValidationRule<T>;
  constructor(rule: IValidationRule<T>) {
    this.rule = rule;
  }

  isEqualTo(value: TType) {
    this.rule.message = () =>
      `${this.rule.member} should be equal to ${value}.`;

    this.rule.validator = (m: T, p: MemberFunc<T, TType>) => {
      const value2 = p(m);
      if (value === value2) {
        return true;
      }

      return false;
    };
  }

  isNotEqualTo(value: TType) {
    this.rule.message = () =>
      `${this.rule.member} should not be equal to ${value}.`;

    this.rule.validator = (m: T, p: MemberFunc<T, TType>) => {
      const value2 = p(m);
      if (value !== value2) {
        return true;
      }

      return false;
    };
  }
}
