import { IValidationRule } from '../models/validation-rule.model';
import {
  WithMsgFuncArg,
  MemberFunc,
  STRING_TYPES,
  NUMBER_TYPES,
  DATE_TYPES,
  BOOLEAN_TYPES,
  OBJECT_TYPES,
  ARRAY_TYPES,
} from '../types';
import { IPostWhenConditionBuilder } from './models/post-when-condition-builder.model';
import { IValidationBuilder } from './models/validation-builder.model';
import { IStringValidatorBuilder } from './models/validators/string-validator-builder.model';
import { INumberValidatorBuilder } from './models/validators/number-validator-builder.model';
import { IDateValidatorBuilder } from './models/validators/date-validator-builder.model';
import { IBooleanValidatorBuilder } from './models/validators/boolean-validator-builder.model';
import { IArrayValidatorBuilder } from './models/validators/array-validator-builder.model';
import { IMemberValidatorBuilder } from './models/validators/member-validator-builder.model';
import { AbstractValidationBuilder } from './abstract-validation-builder';

export class PostWhenConditionBuilder<T>
  implements IPostWhenConditionBuilder<T> {
  private builder: AbstractValidationBuilder<T>;
  private rule: IValidationRule<T>;
  constructor(builder: AbstractValidationBuilder<T>, rule: IValidationRule<T>) {
    this.builder = builder;
    this.rule = rule;
  }

  ruleFor(
    member: string,
    accessor: MemberFunc<T, STRING_TYPES>
  ): IStringValidatorBuilder<T, STRING_TYPES>;
  ruleFor(
    member: string,
    accessor: MemberFunc<T, NUMBER_TYPES>
  ): INumberValidatorBuilder<T, NUMBER_TYPES>;
  ruleFor(
    member: string,
    accessor: MemberFunc<T, DATE_TYPES>
  ): IDateValidatorBuilder<T, DATE_TYPES>;
  ruleFor(
    member: string,
    accessor: MemberFunc<T, BOOLEAN_TYPES>
  ): IBooleanValidatorBuilder<T, BOOLEAN_TYPES>;
  ruleFor(
    member: string,
    accessor: MemberFunc<T, ARRAY_TYPES>
  ): IArrayValidatorBuilder<T, ARRAY_TYPES>;
  ruleFor<TType>(
    member: string,
    accessor: MemberFunc<T, OBJECT_TYPES>
  ): IMemberValidatorBuilder<T, TType>;
  ruleFor<TType>(
    member: string,
    accessor: MemberFunc<T, TType>
  ): IMemberValidatorBuilder<T, TType> {
    return this.builder.ruleFor(member, accessor);
  }

  ruleForEach<TType>(
    member: string,
    accessor: MemberFunc<T, TType[]>
  ): IValidationBuilder<TType> {
    return this.builder.ruleForEach(member, accessor);
  }

  ruleForObject<TType>(
    member: string,
    accessor: MemberFunc<T, TType>
  ): IValidationBuilder<TType> {
    return this.builder.ruleForObject(member, accessor);
  }

  withMessage<TType>(func: WithMsgFuncArg<T, TType>): IValidationBuilder<T> {
    this.rule.message = func;
    return this;
  }
}
