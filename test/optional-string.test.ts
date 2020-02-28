import { AbstractValidator } from '../src/abstract-validator';
import { ITestModel, getModelTemplate } from './prepare';

describe('Optional String Tests', () => {
  it('isUndefined', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('optionalString', x => x.optionalString)
          .isUndefined();
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('isUndefined -ve', () => {
    const model: ITestModel = getModelTemplate();
    model.optionalString = 'optionalString';
    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('optionalString', x => x.optionalString)
          .isUndefined();
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('isNotUndefined', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('optionalString', x => x.optionalString)
          .isNotUndefined();
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('isNotUndefined -ve', () => {
    const model: ITestModel = getModelTemplate();
    model.optionalString = 'optionalString';
    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('optionalString', x => x.optionalString)
          .isNotUndefined();
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('mustBe -ve', () => {
    const model: ITestModel = getModelTemplate();
    model.optionalString = 'optionalString';
    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('optionalString', x => x.optionalString)
          .mustBe(value => value !== 'optionalString');
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('hasMaxLength', () => {
    const model: ITestModel = getModelTemplate();
    model.optionalString = 'optionalString';
    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('optionalString', x => x.optionalString)
          .hasMaxLength(50);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('hasMaxLength -ve', () => {
    const model: ITestModel = getModelTemplate();
    model.optionalString = 'optionalString';
    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('optionalString', x => x.optionalString)
          .hasMaxLength(5);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('hasMinLength', () => {
    const model: ITestModel = getModelTemplate();
    model.optionalString = 'optionalString';
    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('optionalString', x => x.optionalString)
          .hasMinLength(5);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('hasMinLength -ve', () => {
    const model: ITestModel = getModelTemplate();
    model.optionalString = 'optionalString';
    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('optionalString', x => x.optionalString)
          .hasMinLength(50);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

});
