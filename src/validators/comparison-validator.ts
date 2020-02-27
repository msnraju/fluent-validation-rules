import { IComparisonValidator } from '../models/validators/comparison-validator.model';
import { MemberFunc } from '../types';
import { IValidationRule } from '../models/validation-rule.model';

export class ComparisonValidator<T, TType> implements IComparisonValidator<TType> {
    private rule: IValidationRule<T>;
    constructor(rule: IValidationRule<T>) {
        this.rule = rule;
    }

    isLessThan(value: TType) {
        this.rule.message = () => `${this.rule.member} should be less than ${value}.`;
        this.rule.validator = (m: T, p: MemberFunc<T, TType>) => {
            const value2 = p(m);
            if (value2 && value2 < value) {
                return true;
            }

            return false;
        }
    }

    isLessThanOrEqualTo(value: TType) {
        this.rule.message = () => `${this.rule.member} should be less than or equal to ${value}.`;
        this.rule.validator = (m: T, p: MemberFunc<T, TType>) => {
            const value2 = p(m);
            if (value2 && value2 <= value) {
                return true;
            }

            return false;
        }
    }

    isGreaterThan(value: TType) {
        this.rule.message = () => `${this.rule.member} should be greater than ${value}.`;
        this.rule.validator = (m: T, p: MemberFunc<T, TType>) => {
            const value2 = p(m);
            if (value2 && value2 > value) {
                return true;
            }

            return false;
        }
    }

    isGreaterThanOrEqualTo(value: TType) {
        this.rule.message = () => `${this.rule.member} should be greater than or equal to ${value}.`;
        this.rule.validator = (m: T, p: MemberFunc<T, TType>) => {
            const value2 = p(m);
            if (value2 && value2 >= value) {
                return true;
            }

            return false;
        }
    }

    isBetween(from: TType, to: TType) {
        this.rule.message = () => `${this.rule.member} should be between ${from} to ${to}.`;
        this.rule.validator = (m: T, p: MemberFunc<T, TType>) => {
            const value2 = p(m);
            if (value2 && value2 >= from && value2 <= to) {
                return true;
            }

            return false;
        }
    }
}
