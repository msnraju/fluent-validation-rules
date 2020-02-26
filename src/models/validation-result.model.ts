import { IValidationError } from './validation-error.model';

export interface IValidationResult {
    isValid: boolean;
    errors: Array<IValidationError>;
}
