import { IValidationBuilder } from './models/validation-builder.model';
import { AbstractFluentValidator } from '../abstract-fluent-validator';
import { AbstractValidationBuilder } from './abstract-validation-builder';

export class FluentModelValidationBuilder<T>
  extends AbstractValidationBuilder<T>
  implements IValidationBuilder<T> {
  getNewInstance<TType>(
    validator: AbstractFluentValidator<TType>
  ): AbstractValidationBuilder<TType> {
    return new FluentModelValidationBuilder<TType>(validator);
  }
}
