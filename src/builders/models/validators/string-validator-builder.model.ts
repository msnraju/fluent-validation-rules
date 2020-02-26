import { IMemberValidatorBuilder } from './member-validator-builder.model';
import { IPostMemberValidatorBuilder } from '../post-member-validator-builder.model';
import { STRING_TYPES } from '../../../types';
import { IArrayValidatorBuilder } from './array-validator-builder.model';
import { IEqualityValidatorBuilder } from './equality-validator-builder.model';

export interface IStringValidatorBuilder<T, TType> extends
    IMemberValidatorBuilder<T, TType>,
    IArrayValidatorBuilder<T, TType>,
    IEqualityValidatorBuilder<T, TType> {
    hasLength: (min: number, max: number) => IPostMemberValidatorBuilder<T, TType>;
    matches: (expr: RegExp) => IPostMemberValidatorBuilder<T, TType>;
}
