import { IMemberValidatorBuilder } from './member-validator-builder.model';
import { IPostMemberValidatorBuilder } from '../post-member-validator-builder.model';

export interface IBooleanValidatorBuilder<T, TType> extends IMemberValidatorBuilder<T, TType> {
    isTrue(value: boolean): IPostMemberValidatorBuilder<T, TType>;
    isFalse(value: boolean): IPostMemberValidatorBuilder<T, TType>;
}
