import { IWhenConditionBuilder } from './when-condition.model';
import { IMemberValidationDescriptor } from './member-validation-descriptor.model';
import { IModelValidationBuilder } from './model-validation-builder.model';

export interface IPostMemberValidatorBuilder<T,TType>
    extends
    IWhenConditionBuilder<T>,
    IMemberValidationDescriptor<T>,
    IModelValidationBuilder<T> { }

