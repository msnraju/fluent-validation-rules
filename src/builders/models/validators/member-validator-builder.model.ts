import { IPostMemberValidatorBuilder } from '../post-member-validator-builder.model';
import { MustBeFunc } from '../../../types';

export interface IMemberValidatorBuilder<T, TType> {
  isUndefined(): IPostMemberValidatorBuilder<T>;
  isNotUndefined(): IPostMemberValidatorBuilder<T>;
  isNull(): IPostMemberValidatorBuilder<T>;
  isNotNull(): IPostMemberValidatorBuilder<T>;
  mustBe(func: MustBeFunc<T, TType>): IPostMemberValidatorBuilder<T>;
}
