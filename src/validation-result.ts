import { IValidationResult } from "./models/validation-result.model";
import { IValidationError } from "./models/validation-error.model";

export class ValidationResult implements IValidationResult {
    isValid: boolean;
    errors: Array<IValidationError>;

    constructor() {
        this.isValid = true;
        this.errors = [];
    }
}