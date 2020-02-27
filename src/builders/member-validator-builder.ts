import { IMemberValidatorBuilder } from "./models/validators/member-validator-builder.model";
import { IValidationRule } from "../models/validation-rule.model";
import { IPostMemberValidatorBuilder } from "./models/post-member-validator-builder.model";
import { MustBeFunc } from "../types";
import { PostMemberValidatorBuilder } from "./post-member-validator-builder";
import { IMemberValidator } from "../models/validators/member-validator.model";
import { ArrayValidator } from "../validators/array-validator";
import { EqualityValidator } from "../validators/equality-validator";
import { BooleanValidator } from "../validators/boolean-validator";
import { ComparisonValidator } from "../validators/comparison-validator";
import { StringValidator } from "../validators/string-validator";
import { CommonValidator } from "../validators/common-validator";
import { AbstractValidationBuilder } from "./abstract-validation-builder";

export class MemberValidatorBuilder<T, TType> implements IMemberValidatorBuilder<T, TType>,
    IMemberValidator<TType> {
    private rule: IValidationRule<T>;
    private postMemberBuilder: IPostMemberValidatorBuilder<T, TType>;

    constructor(validator: AbstractValidationBuilder<T>, rule: IValidationRule<T>) {
        this.rule = rule;
        this.postMemberBuilder = new PostMemberValidatorBuilder(validator, rule);
    }

    // Common functions
    mustBe(func: MustBeFunc<T>): IPostMemberValidatorBuilder<T, TType> {
        new CommonValidator<T, TType>(this.rule).mustBe(func);
        return this.postMemberBuilder;
    }

    isNotNull(): IPostMemberValidatorBuilder<T,TType> {
        new CommonValidator<T, TType>(this.rule).isNotNull();
        return this.postMemberBuilder;
    }

    isNull(): IPostMemberValidatorBuilder<T,TType> {
        new CommonValidator<T, TType>(this.rule).isNull();
        return this.postMemberBuilder;
    }

    isUndefined(): IPostMemberValidatorBuilder<T,TType> {
        new CommonValidator<T, TType>(this.rule).isUndefined();
        return this.postMemberBuilder;
    }

    isNotUndefined(): IPostMemberValidatorBuilder<T,TType> {
        new CommonValidator<T, TType>(this.rule).isNotUndefined();
        return this.postMemberBuilder;
    }

    // String functions
    hasLength(min: number, max: number): IPostMemberValidatorBuilder<T,TType> {
        new StringValidator<T>(this.rule).hasLength(min, max);
        return this.postMemberBuilder;
    }

    matches(expr: RegExp): IPostMemberValidatorBuilder<T,TType> {
        new StringValidator<T>(this.rule).matches(expr);
        return this.postMemberBuilder;
    }

    // Array Functions
    hasMaxLength(length: number): IPostMemberValidatorBuilder<T,TType> {
        new ArrayValidator<T, TType>(this.rule).hasMaxLength(length);
        return this.postMemberBuilder;
    }

    hasMinLength(length: number): IPostMemberValidatorBuilder<T,TType> {
        new ArrayValidator<T, TType>(this.rule).hasMinLength(length);
        return this.postMemberBuilder;
    }

    isEmpty(): IPostMemberValidatorBuilder<T,TType> {
        new ArrayValidator<T, TType>(this.rule).isEmpty();
        return this.postMemberBuilder;
    }

    isNotEmpty(): IPostMemberValidatorBuilder<T,TType> {
        new ArrayValidator<T, TType>(this.rule).isNotEmpty();
        return this.postMemberBuilder;
    }

    // Equal Functions
    isEqualTo(value: TType): IPostMemberValidatorBuilder<T,TType> {
        new EqualityValidator<T, TType>(this.rule).isEqualTo(value);
        return this.postMemberBuilder;
    }

    isNotEqualTo(value: TType): IPostMemberValidatorBuilder<T,TType> {
        new EqualityValidator<T, TType>(this.rule).isNotEqualTo(value);
        return this.postMemberBuilder;
    }

    // Compare functions
    isLessThan(value: TType): IPostMemberValidatorBuilder<T,TType> {
        new ComparisonValidator<T, TType>(this.rule).isLessThan(value);
        return this.postMemberBuilder;
    }

    isLessThanOrEqualTo(value: TType): IPostMemberValidatorBuilder<T,TType> {
        new ComparisonValidator<T, TType>(this.rule).isLessThanOrEqualTo(value);
        return this.postMemberBuilder;
    }

    isGreaterThan(value: TType): IPostMemberValidatorBuilder<T,TType> {
        new ComparisonValidator<T, TType>(this.rule).isGreaterThan(value);
        return this.postMemberBuilder;
    }

    isGreaterThanOrEqualTo(value: TType): IPostMemberValidatorBuilder<T,TType> {
        new ComparisonValidator<T, TType>(this.rule).isGreaterThanOrEqualTo(value);
        return this.postMemberBuilder;
    }

    isBetween(from: TType, to: TType): IPostMemberValidatorBuilder<T,TType> {
        new ComparisonValidator<T, TType>(this.rule).isBetween(from, to);;
        return this.postMemberBuilder;
    }

    // Boolean Validators
    isTrue(): IPostMemberValidatorBuilder<T,TType> {
        new BooleanValidator<T>(this.rule).isTrue();
        return this.postMemberBuilder;
    }

    isFalse(): IPostMemberValidatorBuilder<T,TType> {
        new BooleanValidator<T>(this.rule).isFalse();
        return this.postMemberBuilder;
    }
}
