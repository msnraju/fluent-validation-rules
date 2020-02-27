import { MemberFunc, WhenConditionFunc, ValidatorFunc, WithMessageFuncArgument } from '../types';


export interface IValidationRule<T> {
    member: string;
    accessor: MemberFunc<T, any>;
    when?: WhenConditionFunc<T>;
    validator?: ValidatorFunc<T, any>;
    message?: WithMessageFuncArgument<T, any>;
}
