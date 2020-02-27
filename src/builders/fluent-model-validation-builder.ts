import { IValidationBuilder } from './models/validation-builder.model';
import { AbstractValidator } from '../abstract-validator';
import { AbstractValidationBuilder } from './abstract-validation-builder';

export class FluentModelValidationBuilder<T> extends AbstractValidationBuilder<T> implements IValidationBuilder<T> {
    constructor(validator: AbstractValidator<T>) {
        super(validator);
    }

    getNewInstance<TType>(validator: AbstractValidator<TType>): AbstractValidationBuilder<TType> {
        return new FluentModelValidationBuilder<TType>(validator);
    }
}

