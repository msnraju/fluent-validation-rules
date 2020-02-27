import { IStringValidator } from '../models/validators/string-validator.model';
import { MemberFunc, STRING_TYPES } from '../types';
import { IValidationRule } from '../models/validation-rule.model';

export class StringValidator<T> implements IStringValidator {
  private rule: IValidationRule<T>;
  constructor(rule: IValidationRule<T>) {
    this.rule = rule;
  }

  hasLength(min: number, max: number) {
    this.rule.message = () =>
      `Length of ${this.rule.member} should be minimum ${min} and maximum ${max}.`;

    this.rule.validator = (m: T, p: MemberFunc<T, STRING_TYPES>) => {
      const value = p(m);
      if (value && value.length >= min && value.length <= max) {
        return true;
      }

      return false;
    };
  }

  matches(expr: RegExp) {
    this.rule.message = () =>
      `${this.rule.member} is not matching the expression.`;

    this.rule.validator = (m: T, p: MemberFunc<T, string>) => {
      const value = p(m);
      if (value && expr.test(value) === true) {
        return true;
      }

      return false;
    };
  }
}
