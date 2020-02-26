import { IModelValidationBuilder } from './models/model-validation-builder.model';
import { IStringValidatorBuilder } from './models/validators/string-validator-builder.model';
import { INumberValidatorBuilder } from './models/validators/number-validator-builder.model';
import { IDateValidatorBuilder } from './models/validators/date-validator-builder.model';
import { IBooleanValidatorBuilder } from './models/validators/boolean-validator-builder.model';
import { IMemberValidatorBuilder } from './models/validators/member-validator-builder.model';
import { AbstractValidator } from '../abstract-validator';
import { IValidationRule } from '../models/validation-rule.model';
import { STRING_TYPES, MemberFunc, NUMBER_TYPES, DATE_TYPES, BOOLEAN_TYPES, OBJECT_TYPES } from '../types';
import { MemberValidatorBuilder } from './member-validator-builder';
import { IArrayValidatorBuilder } from './models/validators/array-validator-builder.model';
import { ValidationRule } from '../validation-rule';

type Not<T, U> = T extends U ? never : T;

export class FluentModelValidationBuilder<T> implements IModelValidationBuilder<T> {
    private validator: AbstractValidator<T>;

    constructor(validator: AbstractValidator<T>) {
        this.validator = validator;
    }

    ruleFor(member: string, accessor: MemberFunc<T, STRING_TYPES>): IStringValidatorBuilder<T>;
    ruleFor(member: string, accessor: MemberFunc<T, NUMBER_TYPES>): INumberValidatorBuilder<T>;
    ruleFor(member: string, accessor: MemberFunc<T, DATE_TYPES>): IDateValidatorBuilder<T>;
    ruleFor(member: string, accessor: MemberFunc<T, BOOLEAN_TYPES>): IBooleanValidatorBuilder<T>;
    ruleFor(member: string, accessor: MemberFunc<T, Array<any>>): IArrayValidatorBuilder<T>;
    ruleFor<TType>(member: string, accessor: MemberFunc<T, OBJECT_TYPES>): IMemberValidatorBuilder<T, TType>;
    ruleFor<TType>(member: string, accessor: MemberFunc<T, TType>): IMemberValidatorBuilder<T, TType> {
        const rule: IValidationRule<T> = new ValidationRule(member, accessor);
        this.validator.addRule(rule);
        return new MemberValidatorBuilder(this, rule);
    }

    ruleForEach<TType>(member: string, accessor: MemberFunc<T, Array<TType> | undefined>): IModelValidationBuilder<TType> {        
        const validator = this.validator.getChildValidator<TType, Array<TType> | undefined>(member, accessor);
        const builder = new FluentModelValidationBuilder<TType>(validator);
        return builder;
    }


    ruleForObject<TType>(member: string, accessor: MemberFunc<T, TType | undefined>): IModelValidationBuilder<TType> {
        const validator = this.validator.getChildValidator<TType, TType | undefined>(member, accessor);
        const builder = new FluentModelValidationBuilder(validator);
        return builder;
    }
}

