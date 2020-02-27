import { IMemberValidationDescriptor } from './member-validation-descriptor.model';
import { IValidationBuilder } from './validation-builder.model';

export interface IPostWhenConditionBuilder<T>
  extends IMemberValidationDescriptor<T>,
    IValidationBuilder<T> {}
