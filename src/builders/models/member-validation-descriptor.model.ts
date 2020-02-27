import { IValidationBuilder } from './validation-builder.model';
import { WithMsgFuncArg } from '../../types';

export interface IMemberValidationDescriptor<T> extends IValidationBuilder<T> {
  withMessage<TType>(func: WithMsgFuncArg<T, TType>): IValidationBuilder<T>;
}
