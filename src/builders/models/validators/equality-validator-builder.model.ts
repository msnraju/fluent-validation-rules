import { IPostMemberValidatorBuilder } from '../post-member-validator-builder.model';

export interface IEqualityValidatorBuilder<T, TType> {
    isEqualTo: (value: TType) => IPostMemberValidatorBuilder<T, TType>;
    isNotEqualTo: (value: TType) => IPostMemberValidatorBuilder<T, TType>;
}
