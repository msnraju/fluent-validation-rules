import { IMemberValidatorBuilder } from './member-validator-builder.model';
import { IPostMemberValidatorBuilder } from '../post-member-validator-builder.model';

export interface IArrayValidatorBuilder<T> extends IMemberValidatorBuilder<T, Array<any>> {
    hasMaxLength: (length: number) => IPostMemberValidatorBuilder<T>;
    hasMinLength: (length: number) => IPostMemberValidatorBuilder<T>;
    isEmpty: () => IPostMemberValidatorBuilder<T>;
    isNotEmpty: () => IPostMemberValidatorBuilder<T>;
}
