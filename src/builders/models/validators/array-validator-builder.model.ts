import { IMemberValidatorBuilder } from './member-validator-builder.model';
import { IPostMemberValidatorBuilder } from '../post-member-validator-builder.model';

export interface IArrayValidatorBuilder<T, TType>
  extends IMemberValidatorBuilder<T, TType> {
  hasMaxLength: (length: number) => IPostMemberValidatorBuilder<T>;
  hasMinLength: (length: number) => IPostMemberValidatorBuilder<T>;
  isEmpty: () => IPostMemberValidatorBuilder<T>;
  isNotEmpty: () => IPostMemberValidatorBuilder<T>;
}
