import { FluentModelValidationBuilder } from './builders/fluent-model-validation-builder';
import { IValidationRule } from './models/validation-rule.model';
import { IValidationResult } from './models/validation-result.model';
import { MemberFunc } from './types';
import { ValidationResult } from './validation-result';
import { isString, isArray } from 'util';
import { ValidationError } from './validation-error';

export abstract class AbstractFluentValidator<T> {
  private _validation: FluentModelValidationBuilder<T>;
  private rules: Array<IValidationRule<T>>;
  private internalValidators: Array<InternalValidator<any, any, any>>;

  constructor() {
    this.rules = [];
    this.internalValidators = [];
    this._validation = new FluentModelValidationBuilder<T>(this);
  }

  protected get validation(): FluentModelValidationBuilder<T> {
    return this._validation;
  }

  getChildValidator<Type, MType>(
    member: string,
    accessor: MemberFunc<T, MType>
  ) {
    // tslint:disable-next-line: no-use-before-declare
    const validator = new InternalValidator<T, Type, MType>(member, accessor);
    this.internalValidators.push(validator);
    return validator;
  }

  validate(model: T): IValidationResult {
    const result = new ValidationResult();
    if (!model) {
      result.isValid = false;
      return result;
    }

    this.rules.forEach(rule => {
      if (rule.when && rule.when(model) !== true) {
        return;
      }

      if (rule.validator && !rule.validator(model, rule.accessor)) {
        const message = isString(rule.message)
          ? rule.message
          : rule.message(rule.accessor(model), model);
        result.errors.push(new ValidationError(rule.member, message));
      }
    });

    this.internalValidators.forEach(validator => {
      const value = validator.accessor(model);
      if (isArray(value)) {
        value.forEach((item, index) => {
          const innerResult = validator.validate(item);
          if (!innerResult.isValid) {
            const error: any = {};
            error[validator.member] = innerResult.errors;
            error.index = index;
            result.errors.push(error);
          }
        });
      } else {
        const innerResult = validator.validate(value);
        if (!innerResult.isValid) {
          result.errors.push(
            new ValidationError(validator.member, innerResult.errors)
          );
        }
      }
    });

    result.isValid = result.errors.length === 0;
    return result;
  }

  addRule(rule: IValidationRule<T>) {
    this.rules.push(rule);
  }
}

class InternalValidator<PType, T, MType> extends AbstractFluentValidator<T> {
  private _member: string;
  private _accessor: MemberFunc<PType, MType>;

  constructor(member: string, accessor: MemberFunc<PType, MType>) {
    super();
    this._member = member;
    this._accessor = accessor;
  }

  get member() {
    return this._member;
  }

  get accessor() {
    return this._accessor;
  }
}
