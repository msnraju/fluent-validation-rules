import { IStringValidatorBuilder } from './validators/string-validator-builder.model';
import { INumberValidatorBuilder } from './validators/number-validator-builder.model';
import { IDateValidatorBuilder } from './validators/date-validator-builder.model';
import { IBooleanValidatorBuilder } from './validators/boolean-validator-builder.model';
import { STRING_TYPES, NUMBER_TYPES, DATE_TYPES, MemberFunc, BOOLEAN_TYPES, OBJECT_TYPES, ARRAY_TYPES } from '../../types';
import { IMemberValidatorBuilder } from './validators/member-validator-builder.model';
import { IArrayValidatorBuilder } from './validators/array-validator-builder.model';

export interface IModelValidationBuilder<T> {
    ruleFor(member: string, accessor: MemberFunc<T, STRING_TYPES>): IStringValidatorBuilder<T, STRING_TYPES>;
    ruleFor(member: string, accessor: MemberFunc<T, NUMBER_TYPES>): INumberValidatorBuilder<T, NUMBER_TYPES>;
    ruleFor(member: string, accessor: MemberFunc<T, DATE_TYPES>): IDateValidatorBuilder<T, DATE_TYPES>;
    ruleFor(member: string, accessor: MemberFunc<T, BOOLEAN_TYPES>): IBooleanValidatorBuilder<T, BOOLEAN_TYPES>;
    ruleFor(member: string, accessor: MemberFunc<T, ARRAY_TYPES>): IArrayValidatorBuilder<T, ARRAY_TYPES>;
    ruleFor<TType>(member: string, accessor: MemberFunc<T, OBJECT_TYPES>): IMemberValidatorBuilder<T, TType>;
    ruleForEach<TType>(member: string, accessor: MemberFunc<T, Array<TType>>): IModelValidationBuilder<TType>;
    ruleForObject<TType>(member: string, accessor: MemberFunc<T, TType>): IModelValidationBuilder<TType>;
}
