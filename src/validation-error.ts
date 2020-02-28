import { IValidationError } from './models/validation-error.model';

export class ValidationError implements IValidationError {
  member: string;
  message: string;
  index?: number;
  errors?: Array<IValidationError>;

  constructor(
    member: string,
    message: string,
    errors?: Array<IValidationError>,
    index?: number
  ) {
    this.member = member;
    this.message = message;
    this.index = index;
    this.errors = errors;
  }
}
