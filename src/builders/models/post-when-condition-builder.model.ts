import { IMemberValidationDescriptor } from './member-validation-descriptor.model';
import { IModelValidationBuilder } from './model-validation-builder.model';

export interface IPostWhenConditionBuilder<T>
    extends
    IMemberValidationDescriptor<T>,
    IModelValidationBuilder<T> { }

