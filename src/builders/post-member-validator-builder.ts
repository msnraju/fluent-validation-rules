import { IPostMemberValidatorBuilder } from './models/post-member-validator-builder.model';
import { IValidationRule } from '../models/validation-rule.model';
import {
    WhenConditionFunc, WithMessageFuncArgument,
    MemberFunc, STRING_TYPES, NUMBER_TYPES, DATE_TYPES, BOOLEAN_TYPES, ARRAY_TYPES, OBJECT_TYPES
} from '../types';
import { IPostWhenConditionBuilder } from './models/post-when-condition-builder.model';
import { IValidationBuilder } from './models/validation-builder.model';
import { AbstractValidationBuilder } from './abstract-validation-builder';
import { PostWhenConditionBuilder } from './post-when-condition-builder';
import { IStringValidatorBuilder } from './models/validators/string-validator-builder.model';
import { INumberValidatorBuilder } from './models/validators/number-validator-builder.model';
import { IDateValidatorBuilder } from './models/validators/date-validator-builder.model';
import { IBooleanValidatorBuilder } from './models/validators/boolean-validator-builder.model';
import { IArrayValidatorBuilder } from './models/validators/array-validator-builder.model';
import { IMemberValidatorBuilder } from './models/validators/member-validator-builder.model';

export class PostMemberValidatorBuilder<T, TType> implements IPostMemberValidatorBuilder<T> {
    private rule: IValidationRule<T>;
    private builder: AbstractValidationBuilder<T>;

    constructor(builder: AbstractValidationBuilder<T>, rule: IValidationRule<T>) {
        this.rule = rule;
        this.builder = builder;
    }

    ruleFor(member: string, accessor: MemberFunc<T, STRING_TYPES>): IStringValidatorBuilder<T, STRING_TYPES>;
    ruleFor(member: string, accessor: MemberFunc<T, NUMBER_TYPES>): INumberValidatorBuilder<T, NUMBER_TYPES>;
    ruleFor(member: string, accessor: MemberFunc<T, DATE_TYPES>): IDateValidatorBuilder<T, DATE_TYPES>;
    ruleFor(member: string, accessor: MemberFunc<T, BOOLEAN_TYPES>): IBooleanValidatorBuilder<T, BOOLEAN_TYPES>;
    ruleFor(member: string, accessor: MemberFunc<T, ARRAY_TYPES>): IArrayValidatorBuilder<T, ARRAY_TYPES>;
    ruleFor(member: string, accessor: MemberFunc<T, OBJECT_TYPES>): IMemberValidatorBuilder<T, TType>;
    ruleFor<T2>(member: string, accessor: MemberFunc<T, T2>): IMemberValidatorBuilder<T, T2> {
        return this.builder.ruleFor(member, accessor);
    }

    ruleForEach<T2>(member: string, accessor: MemberFunc<T, T2[]>): IValidationBuilder<T2> {
        return this.builder.ruleForEach(member, accessor);
    }

    ruleForObject<T2>(member: string, accessor: MemberFunc<T, T2>): IValidationBuilder<T2> {
        return this.builder.ruleForObject(member, accessor);
    }

    when(func: WhenConditionFunc<T>): IPostWhenConditionBuilder<T> {
        this.rule.when = func;
        return new PostWhenConditionBuilder(this.builder, this.rule);
    }

    withMessage<T2>(func: WithMessageFuncArgument<T, T2>): IValidationBuilder<T> {
        this.rule.message = func;
        return this;
    }
}
