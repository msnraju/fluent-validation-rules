import { WhenConditionFunc, MemberFunc, ValidatorFunc } from './types';
import { IValidationRule } from './models/validation-rule.model';

export class ValidationRule<T, TType> implements IValidationRule<T> {
    member: string;
    accessor: MemberFunc<T, TType>;
    when?: WhenConditionFunc<T>;
    validator?: ValidatorFunc<T, any>;

    constructor(member: string, accessor: MemberFunc<T, TType>) {
        this.member = member;
        this.accessor = accessor;
    }
}
