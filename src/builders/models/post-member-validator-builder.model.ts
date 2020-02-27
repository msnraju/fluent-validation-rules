import { IWhenConditionBuilder } from './when-condition.model';
import { IMemberValidationDescriptor } from './member-validation-descriptor.model';
import { IValidationBuilder } from './validation-builder.model';

export interface IPostMemberValidatorBuilder<T>
    extends
    IWhenConditionBuilder<T>,
    IMemberValidationDescriptor<T>,
    IValidationBuilder<T> { }

