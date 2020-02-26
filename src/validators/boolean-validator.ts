import { IBooleanValidator } from "../models/validators/boolean-validator.model";
import { BOOLEAN_TYPES, ValidatorFunc, MemberFunc } from "../types";
import { IValidationRule } from "../models/validation-rule.model";

export class BooleanValidator<T> implements IBooleanValidator {
    private rule: IValidationRule<T>;
    constructor(rule: IValidationRule<T>) {
        this.rule = rule;
    }

    isTrue() {
        this.rule.message = () => `${this.rule.member} should be true.`;
        this.rule.validator = (m: T, p: MemberFunc<T, BOOLEAN_TYPES>) => {
            const value2 = p(m);
            if (value2 === true)
                return true;

            return false;
        }
    }

    isFalse() {
        this.rule.message = () => `${this.rule.member} should be false.`;
        this.rule.validator = (m: T, p: MemberFunc<T, BOOLEAN_TYPES>) => {
            const value2 = p(m);
            if (value2 === false)
                return true;

            return false;
        }
    }
}