import { IMemberValidatorBuilder } from './member-validator-builder.model';
import { IPostMemberValidatorBuilder } from '../post-member-validator-builder.model';
import { STRING_TYPES } from '../../../types';
import { IArrayValidatorBuilder } from './array-validator-builder.model';
import { IEqualityValidatorBuilder } from './equality-validator-builder.model';

export interface IStringValidatorBuilder<T> extends
    IMemberValidatorBuilder<T, STRING_TYPES>,
    IArrayValidatorBuilder<T>,
    IEqualityValidatorBuilder<T, STRING_TYPES> {
    hasLength: (min: number, max: number) => IPostMemberValidatorBuilder<T>;
    matches: (expr: RegExp) => IPostMemberValidatorBuilder<T>;
}
