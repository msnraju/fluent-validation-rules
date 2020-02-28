export interface IValidationError {
  member: string;
  message: string;
  index?: number;
  errors?: Array<IValidationError>;
}
