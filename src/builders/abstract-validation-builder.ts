import { IValidationBuilder } from "./models/validation-builder.model";
import { MemberFunc, STRING_TYPES, NUMBER_TYPES, DATE_TYPES, BOOLEAN_TYPES, ARRAY_TYPES, OBJECT_TYPES } from "../types";
import { IStringValidatorBuilder } from "./models/validators/string-validator-builder.model";
import { INumberValidatorBuilder } from "./models/validators/number-validator-builder.model";
import { IDateValidatorBuilder } from "./models/validators/date-validator-builder.model";
import { IBooleanValidatorBuilder } from "./models/validators/boolean-validator-builder.model";
import { IArrayValidatorBuilder } from "./models/validators/array-validator-builder.model";
import { IMemberValidatorBuilder } from "./models/validators/member-validator-builder.model";
import { AbstractValidator } from "../abstract-validator";
import { IValidationRule } from "../models/validation-rule.model";
import { MemberValidatorBuilder } from "./member-validator-builder";
import { ValidationRule } from "../validation-rule";

export abstract class AbstractValidationBuilder<T> implements IValidationBuilder<T> {
    private _validator: AbstractValidator<T>;

    constructor(validator: AbstractValidator<T>) {
        this._validator = validator;
    }

    get validator() { return this._validator; }
    abstract getNewInstance<TType>(validator: AbstractValidator<TType>): AbstractValidationBuilder<TType>;

    ruleFor(member: string, accessor: MemberFunc<T, STRING_TYPES>): IStringValidatorBuilder<T, STRING_TYPES>;
    ruleFor(member: string, accessor: MemberFunc<T, NUMBER_TYPES>): INumberValidatorBuilder<T, NUMBER_TYPES>;
    ruleFor(member: string, accessor: MemberFunc<T, DATE_TYPES>): IDateValidatorBuilder<T, DATE_TYPES>;
    ruleFor(member: string, accessor: MemberFunc<T, BOOLEAN_TYPES>): IBooleanValidatorBuilder<T, BOOLEAN_TYPES>;
    ruleFor(member: string, accessor: MemberFunc<T, ARRAY_TYPES>): IArrayValidatorBuilder<T, ARRAY_TYPES>;
    ruleFor<TType>(member: string, accessor: MemberFunc<T, OBJECT_TYPES>): IMemberValidatorBuilder<T, TType>;
    ruleFor<TType>(member: string, accessor: MemberFunc<T, TType>): IMemberValidatorBuilder<T, TType> {
        const rule: IValidationRule<T> = new ValidationRule(member, accessor);
        this._validator.addRule(rule);
        return new MemberValidatorBuilder(this, rule);
    }

    ruleForEach<TType>(member: string, accessor: MemberFunc<T, Array<TType> | undefined>): IValidationBuilder<TType> {
        const validator = this.validator.getChildValidator<TType, Array<TType> | undefined>(member, accessor);
        return this.getNewInstance(validator);
    }

    ruleForObject<TType>(member: string, accessor: MemberFunc<T, TType | undefined>): IValidationBuilder<TType> {
        const validator = this.validator.getChildValidator<TType, TType | undefined>(member, accessor);
        return this.getNewInstance(validator);
    }
}
