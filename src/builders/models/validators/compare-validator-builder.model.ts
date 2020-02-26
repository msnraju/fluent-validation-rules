import { IPostMemberValidatorBuilder } from "../post-member-validator-builder.model";

export interface ICompareValidatorBuilder<T, TType> {
    isLessThan: (value: TType) => IPostMemberValidatorBuilder<T, TType>;
    isLessThanOrEqualTo: (value: TType) => IPostMemberValidatorBuilder<T, TType>;
    isGreaterThan: (value: TType) => IPostMemberValidatorBuilder<T, TType>;
    isGreaterThanOrEqualTo: (value: TType) => IPostMemberValidatorBuilder<T, TType>;
    isBetween: (from: TType, to: TType) => IPostMemberValidatorBuilder<T, TType>;
}