import { IModelValidationBuilder } from './model-validation-builder.model';
import { WithMessageFuncArgument } from '../../types';

export interface IMemberValidationDescriptor<T> extends IModelValidationBuilder<T> {
    withMessage<TType>(func: WithMessageFuncArgument<T,TType>): IModelValidationBuilder<T>;
}

