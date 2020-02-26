import { IPostMemberValidatorBuilder } from "../post-member-validator-builder.model";

export interface ICompareValidatorBuilder<T, TType> {
    isLessThan: (value: TType) => IPostMemberValidatorBuilder<T>;
    isLessThanOrEqualTo: (value: TType) => IPostMemberValidatorBuilder<T>;
    isGreaterThan: (value: TType) => IPostMemberValidatorBuilder<T>;
    isGreaterThanOrEqualTo: (value: TType) => IPostMemberValidatorBuilder<T>;
    isBetween: (from: TType, to: TType) => IPostMemberValidatorBuilder<T>;
}