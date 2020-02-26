import { IPostMemberValidatorBuilder } from '../post-member-validator-builder.model';
import { MustBeFunc } from '../../../types';

export interface IMemberValidatorBuilder<T, TType> {
    isUndefined(): IPostMemberValidatorBuilder<T, TType>;
    isNotUndefined(): IPostMemberValidatorBuilder<T, TType>;
    isNull(): IPostMemberValidatorBuilder<T, TType>;
    isNotNull(): IPostMemberValidatorBuilder<T, TType>;
    mustBe(func: MustBeFunc<T>): IPostMemberValidatorBuilder<T, TType>;
}

