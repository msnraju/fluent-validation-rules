import {
  MemberFunc,
  WhenConditionFunc,
  ValidatorFunc,
  WithMsgFuncArg,
} from '../types';

export interface IValidationRule<T> {
  member: string;
  accessor: MemberFunc<T, any>;
  when?: WhenConditionFunc<T>;
  validator?: ValidatorFunc<T, any>;
  message: WithMsgFuncArg<T, any>;
}
