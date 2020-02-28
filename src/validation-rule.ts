import {
  WhenConditionFunc,
  MemberFunc,
  ValidatorFunc,
  WithMsgFuncArg,
} from './types';
import { IValidationRule } from './models/validation-rule.model';

export class ValidationRule<T, TType> implements IValidationRule<T> {
  member: string;
  accessor: MemberFunc<T, TType>;
  when?: WhenConditionFunc<T>;
  validator?: ValidatorFunc<T, any>;
  message: WithMsgFuncArg<T, any>;

  constructor(member: string, accessor: MemberFunc<T, TType>) {
    this.message = `${member} validation failed.`;
    this.member = member;
    this.accessor = accessor;
  }
}
