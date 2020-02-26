import { IMemberValidatorBuilder } from './member-validator-builder.model';
import { IPostMemberValidatorBuilder } from '../post-member-validator-builder.model';

export interface IArrayValidatorBuilder<T,TType> extends IMemberValidatorBuilder<T, TType> {
    hasMaxLength: (length: number) => IPostMemberValidatorBuilder<T, TType>;
    hasMinLength: (length: number) => IPostMemberValidatorBuilder<T, TType>;
    isEmpty: () => IPostMemberValidatorBuilder<T, TType>;
    isNotEmpty: () => IPostMemberValidatorBuilder<T, TType>;
}
