import { AbstractValidator } from '../src/abstract-validator';
import { ITestModel, getModelTemplate } from './prepare';

describe('Nullable String Tests', () => {
    it('isNull', () => {
        const model: ITestModel = getModelTemplate();

        class ModelValidator extends AbstractValidator<ITestModel> {
            constructor() {
                super();
                this.validation.ruleFor('nullableString', x => x.nullableString)
                    .isNull();
            }
        };

        const result = new ModelValidator().validate(model);
        expect(result.isValid).toEqual(true);
    });

    it('isNotNull', () => {
        const model: ITestModel = getModelTemplate();
        class ModelValidator extends AbstractValidator<ITestModel> {
            constructor() {
                super();
                this.validation.ruleFor('nullableString', x => x.nullableString)
                    .isNotNull();
            }
        };

        const result = new ModelValidator().validate(model);
        expect(result.isValid).toEqual(false);
    });

    it('isEmpty', () => {
        const model: ITestModel = getModelTemplate();

        class ModelValidator extends AbstractValidator<ITestModel> {
            constructor() {
                super();
                this.validation.ruleFor('nullableString', x => x.nullableString)
                    .isEmpty();
            }
        };

        const result = new ModelValidator().validate(model);
        expect(result.isValid).toEqual(true);
    });

    it('isEmpty -ve', () => {
        const model: ITestModel = getModelTemplate();
        model.nullableString = 'nullableString';
        class ModelValidator extends AbstractValidator<ITestModel> {
            constructor() {
                super();
                this.validation.ruleFor('nullableString', x => x.nullableString)
                    .isEmpty();
            }
        };

        const result = new ModelValidator().validate(model);
        expect(result.isValid).toEqual(false);
    });

    it('isEmpty -ve', () => {
        const model: ITestModel = getModelTemplate();
        model.nullableString = '';
        class ModelValidator extends AbstractValidator<ITestModel> {
            constructor() {
                super();
                this.validation.ruleFor('nullableString', x => x.nullableString)
                    .isEmpty();
            }
        };

        const result = new ModelValidator().validate(model);
        expect(result.isValid).toEqual(true);
    });

    it('isNotEmpty', () => {
        const model: ITestModel = getModelTemplate();

        class ModelValidator extends AbstractValidator<ITestModel> {
            constructor() {
                super();
                this.validation.ruleFor('nullableString', x => x.nullableString)
                    .isNotEmpty();
            }
        };

        const result = new ModelValidator().validate(model);
        expect(result.isValid).toEqual(false);
    });

    it('isEqualTo', () => {
        const model: ITestModel = getModelTemplate();
        model.nullableString = 'nullableString';
        class ModelValidator extends AbstractValidator<ITestModel> {
            constructor() {
                super();
                this.validation.ruleFor('nullableString', x => x.nullableString)
                    .isEqualTo('nullableString');
            }
        };

        const result = new ModelValidator().validate(model);
        expect(result.isValid).toEqual(true);
    });

    it('isNotEqualTo', () => {
        const model: ITestModel = getModelTemplate();

        class ModelValidator extends AbstractValidator<ITestModel> {
            constructor() {
                super();
                this.validation.ruleFor('nullableString', x => x.nullableString)
                    .isNotEqualTo('string2');
            }
        };

        const result = new ModelValidator().validate(model);
        expect(result.isValid).toEqual(true);
    });

    it('hasLength - valid range', () => {
        const model: ITestModel = getModelTemplate();
        model.nullableString = 'nullableString';
        class ModelValidator extends AbstractValidator<ITestModel> {
            constructor() {
                super();
                this.validation.ruleFor('nullableString', x => x.nullableString)
                    .hasLength(5, 'nullableString'.length);
            }
        };

        const result = new ModelValidator().validate(model);
        expect(result.isValid).toEqual(true);
    });

    it('hasLength - invalid range', () => {
        const model: ITestModel = getModelTemplate();
        model.nullableString = 'nullableString';
        class ModelValidator extends AbstractValidator<ITestModel> {
            constructor() {
                super();
                this.validation.ruleFor('nullableString', x => x.nullableString)
                    .hasLength(50, 100);
            }
        };

        const result = new ModelValidator().validate(model);
        expect(result.isValid).toEqual(false);
    });

    it('hasMaxLength', () => {
        const model: ITestModel = getModelTemplate();

        class ModelValidator extends AbstractValidator<ITestModel> {
            constructor() {
                super();
                this.validation.ruleFor('nullableString', x => x.nullableString)
                    .hasMaxLength(10);
            }
        };

        const result = new ModelValidator().validate(model);
        expect(result.isValid).toEqual(true);
    });

    it('hasMinLength', () => {
        const model: ITestModel = getModelTemplate();

        class ModelValidator extends AbstractValidator<ITestModel> {
            constructor() {
                super();
                this.validation.ruleFor('nullableString', x => x.nullableString)
                    .hasMinLength(10);
            }
        };

        const result = new ModelValidator().validate(model);
        expect(result.isValid).toEqual(false);
    });

    it('mustBe', () => {
        const model: ITestModel = getModelTemplate();
        model.nullableString = 'string';
        class ModelValidator extends AbstractValidator<ITestModel> {
            constructor() {
                super();
                this.validation.ruleFor('nullableString', x => x.nullableString)
                    .mustBe((v) => v === 'string');
            }
        };

        const result = new ModelValidator().validate(model);
        expect(result.isValid).toEqual(true);
    });

    it('matches', () => {
        const model: ITestModel = getModelTemplate();
        model.nullableString = 'string';
        class ModelValidator extends AbstractValidator<ITestModel> {
            constructor() {
                super();
                this.validation.ruleFor('nullableString', x => x.nullableString)
                    .matches(/[a-z]+/);
            }
        };

        const result = new ModelValidator().validate(model);
        expect(result.isValid).toEqual(true);
    });

    it('matches -ve', () => {
        const model: ITestModel = getModelTemplate();
        model.nullableString = 'string';
        class ModelValidator extends AbstractValidator<ITestModel> {
            constructor() {
                super();
                this.validation.ruleFor('nullableString', x => x.nullableString)
                    .matches(/[0-9]+/);
            }
        };

        const result = new ModelValidator().validate(model);
        expect(result.isValid).toEqual(false);
    });
});
