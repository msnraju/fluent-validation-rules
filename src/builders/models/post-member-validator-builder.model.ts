import { IWhenConditionBuilder } from './when-condition.model';
import { IMemberValidationDescriptor } from './member-validation-descriptor.model';
import { IModelValidationBuilder } from './model-validation-builder.model';
import { IMemberValidatorBuilder } from './validators/member-validator-builder.model';

export interface IPostMemberValidatorBuilder<T,TType>
    extends
    // IMemberValidatorBuilder<T,TType>,
    IWhenConditionBuilder<T>,
    IMemberValidationDescriptor<T>,
    IModelValidationBuilder<T> { }

