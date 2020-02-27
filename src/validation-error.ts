import { IValidationError } from './models/validation-error.model';

export class ValidationError implements IValidationError {
    [key: string]: any;
    constructor(member: string, value: any) {
        this[member] = value;
    }
}
