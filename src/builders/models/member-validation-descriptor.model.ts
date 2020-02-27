import { IValidationBuilder } from './validation-builder.model';
import { WithMessageFuncArgument } from '../../types';

export interface IMemberValidationDescriptor<T> extends IValidationBuilder<T> {
    withMessage<TType>(func: WithMessageFuncArgument<T,TType>): IValidationBuilder<T>;
}

