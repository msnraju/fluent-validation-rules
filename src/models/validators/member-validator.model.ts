import { IStringValidator } from "./string-validator.model";
import { INumberValidator } from "./number-validator.model";
import { IDateValidator } from "./date-validator.model";
import { IBooleanValidator } from "./boolean-validator.model";
import { IArrayValidator } from "./array-validator.model";

export interface IMemberValidator<TType> extends IStringValidator, INumberValidator, IDateValidator, IBooleanValidator, IArrayValidator {

}


