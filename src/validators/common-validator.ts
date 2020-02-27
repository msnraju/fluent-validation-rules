import { MustBeFunc, MemberFunc } from '../types';
import { IValidationRule } from '../models/validation-rule.model';

export class CommonValidator<T, TType> {
  private rule: IValidationRule<T>;
  constructor(rule: IValidationRule<T>) {
    this.rule = rule;
  }

  mustBe(func: MustBeFunc<T, TType>) {
    this.rule.message = value => `${this.rule.member} must not be ${value}.`;
    this.rule.validator = (m: T, p: MemberFunc<T, TType>) => {
      if (func && func(p(m), m)) {
        return true;
      }

      return false;
    };
  }

  isNotNull() {
    this.rule.message = () => `${this.rule.member} should not be null.`;
    this.rule.validator = (m: T, p: MemberFunc<T, TType>) => {
      if (p(m) !== null) {
        return true;
      }

      return false;
    };
  }

  isNull() {
    this.rule.message = () => `${this.rule.member} should be null.`;
    this.rule.validator = (m: T, p: MemberFunc<T, TType>) => {
      if (p(m) === null) {
        return true;
      }

      return false;
    };
  }

  isUndefined() {
    this.rule.message = () => `${this.rule.member} should be undefined.`;
    this.rule.validator = (m: T, p: MemberFunc<T, TType>) => {
      if (p(m) === undefined) {
        return true;
      }

      return false;
    };
  }

  isNotUndefined() {
    this.rule.message = () => `${this.rule.member} should not be undefined.`;
    this.rule.validator = (m: T, p: MemberFunc<T, TType>) => {
      if (p(m) === undefined) {
        return true;
      }

      return false;
    };
  }
}
