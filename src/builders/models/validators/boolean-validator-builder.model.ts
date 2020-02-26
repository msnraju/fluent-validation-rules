import { IMemberValidatorBuilder } from './member-validator-builder.model';
import { IPostMemberValidatorBuilder } from '../post-member-validator-builder.model';
import { BOOLEAN_TYPES } from '../../../types';

export interface IBooleanValidatorBuilder<T> extends IMemberValidatorBuilder<T,BOOLEAN_TYPES> {    
    isTrue(value: boolean): IPostMemberValidatorBuilder<T>;
    isFalse(value: boolean): IPostMemberValidatorBuilder<T>;
}
