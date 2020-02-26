import { FluentModelValidationBuilder } from "./fluent-model-validation-builder";
import { IPostMemberValidatorBuilder } from "./models/post-member-validator-builder.model";
import { IValidationRule } from "../models/validation-rule.model";
import { WhenConditionFunc, WithMessageFuncArgument, MemberFunc, STRING_TYPES, NUMBER_TYPES, DATE_TYPES, BOOLEAN_TYPES, OBJECT_TYPES } from "../types";
import { IPostWhenConditionBuilder } from "./models/post-when-condition-builder.model";
import { IModelValidationBuilder } from "./models/model-validation-builder.model";
import { IStringValidatorBuilder } from "./models/validators/string-validator-builder.model";
import { INumberValidatorBuilder } from "./models/validators/number-validator-builder.model";
import { IDateValidatorBuilder } from "./models/validators/date-validator-builder.model";
import { IBooleanValidatorBuilder } from "./models/validators/boolean-validator-builder.model";
import { IArrayValidatorBuilder } from "./models/validators/array-validator-builder.model";
import { IMemberValidatorBuilder } from "./models/validators/member-validator-builder.model";

export class PostMemberValidatorBuilder<T> implements IPostMemberValidatorBuilder<T> {
    private rule: IValidationRule<T>;
    private postWhenBuilder: PostWhenConditionBuilder<T>;
    private validationBuilder: FluentModelValidationBuilder<T>;

    constructor(validationBuilder: FluentModelValidationBuilder<T>, rule: IValidationRule<T>) {
        this.rule = rule;
        this.validationBuilder = validationBuilder;
        this.postWhenBuilder = new PostWhenConditionBuilder(this, rule);
    }

    ruleFor(member: string, accessor: MemberFunc<T, STRING_TYPES>): IStringValidatorBuilder<T>;
    ruleFor(member: string, accessor: MemberFunc<T, NUMBER_TYPES>): INumberValidatorBuilder<T>;
    ruleFor(member: string, accessor: MemberFunc<T, DATE_TYPES>): IDateValidatorBuilder<T>;
    ruleFor(member: string, accessor: MemberFunc<T, BOOLEAN_TYPES>): IBooleanValidatorBuilder<T>;
    ruleFor(member: string, accessor: MemberFunc<T, Array<any>>): IArrayValidatorBuilder<T>;
    ruleFor<TType>(member: string, accessor: MemberFunc<T, OBJECT_TYPES>): IMemberValidatorBuilder<T, TType>;
    ruleFor<TType>(member: string, accessor: MemberFunc<T, TType>): IMemberValidatorBuilder<T, TType> {
        return this.validationBuilder.ruleFor(member, accessor);
    }

    ruleForEach<TType>(member: string, accessor: MemberFunc<T, Array<TType>>): IModelValidationBuilder<TType> {
        return this.validationBuilder.ruleForEach(member, accessor);
    }

    ruleForObject<TType>(member: string, accessor: MemberFunc<T, TType>): IModelValidationBuilder<TType> {
        return this.validationBuilder.ruleForObject(member, accessor);
    }

    when(func: WhenConditionFunc<T>): IPostWhenConditionBuilder<T> {
        this.rule.when = func;
        return this.postWhenBuilder;
    }

    withMessage<TType>(func: WithMessageFuncArgument<T, TType>): IModelValidationBuilder<T> {
        this.rule.message = func;
        return this;
    }
}

export class PostWhenConditionBuilder<T> implements IPostWhenConditionBuilder<T> {
    private validationBuilder: PostMemberValidatorBuilder<T>;
    private rule: IValidationRule<T>;

    constructor(validationBuilder: PostMemberValidatorBuilder<T>, rule: IValidationRule<T>) {
        this.validationBuilder = validationBuilder;
        this.rule = rule;
    }

    withMessage<TType>(func: WithMessageFuncArgument<T, TType>): IModelValidationBuilder<T> {
        this.rule.message = func;
        return this;
    }    
    
    ruleFor(member: string, accessor: MemberFunc<T, STRING_TYPES>): IStringValidatorBuilder<T>;
    ruleFor(member: string, accessor: MemberFunc<T, NUMBER_TYPES>): INumberValidatorBuilder<T>;
    ruleFor(member: string, accessor: MemberFunc<T, DATE_TYPES>): IDateValidatorBuilder<T>;
    ruleFor(member: string, accessor: MemberFunc<T, BOOLEAN_TYPES>): IBooleanValidatorBuilder<T>;
    ruleFor(member: string, accessor: MemberFunc<T, Array<any>>): IArrayValidatorBuilder<T>;
    ruleFor<TType>(member: string, accessor: MemberFunc<T, OBJECT_TYPES>): IMemberValidatorBuilder<T, TType>;
    ruleFor<TType>(member: string, accessor: MemberFunc<T, TType>): IMemberValidatorBuilder<T, TType> {
        return this.validationBuilder.ruleFor(member, accessor);
    }

    ruleForEach<TType>(member: string, accessor: MemberFunc<T, Array<TType>>): IModelValidationBuilder<TType> {
        return this.validationBuilder.ruleForEach(member, accessor);
    }

    ruleForObject<TType>(member: string, accessor: MemberFunc<T, TType>): IModelValidationBuilder<TType> {
        return this.validationBuilder.ruleForObject(member, accessor);
    }
}