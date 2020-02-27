import { IArrayValidator } from '../models/validators/array-validator.model';
import { MemberFunc, STRING_TYPES } from '../types';
import { IValidationRule } from '../models/validation-rule.model';

export class ArrayValidator<T, TType> implements IArrayValidator {
  private rule: IValidationRule<T>;
  constructor(rule: IValidationRule<T>) {
    this.rule = rule;
  }

  hasMaxLength(length: number) {
    this.rule.message = () =>
      `Maximum length of ${this.rule.member} should be ${length}.`;

    this.rule.validator = (
      m: T,
      p: MemberFunc<T, STRING_TYPES | Array<TType>>
    ) => {
      const value = p(m);
      if (value === null || value === undefined || value.length <= length) {
        return true;
      }

      return false;
    };
  }

  hasMinLength(length: number) {
    this.rule.message = () =>
      `Minimum length of ${this.rule.member} should be ${length}.`;

    this.rule.validator = (
      m: T,
      p: MemberFunc<T, STRING_TYPES | Array<TType>>
    ) => {
      const value = p(m);
      if (value && value.length >= length) {
        return true;
      }

      return false;
    };
  }

  isEmpty() {
    this.rule.message = () => `${this.rule.member} should be empty.`;

    this.rule.validator = (
      m: T,
      p: MemberFunc<T, STRING_TYPES | Array<TType>>
    ) => {
      const value = p(m);
      if (value === null || value === undefined || value.length === 0) {
        return true;
      }

      return false;
    };
  }

  isNotEmpty() {
    this.rule.message = () => `${this.rule.member} should not be empty.`;

    this.rule.validator = (
      m: T,
      p: MemberFunc<T, STRING_TYPES | Array<TType>>
    ) => {
      const value = p(m);
      if (value && value.length !== 0) {
        return true;
      }

      return false;
    };
  }
}
