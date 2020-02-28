import { AbstractValidator } from '../src/abstract-validator';
import { ITestModel, getModelTemplate, ERROR_MESSAGE } from './prepare';

describe('Array Tests', () => {
  it('hasMaxLength', () => {
    const model: ITestModel = getModelTemplate();
    model.array = ['1', '2'];
    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('array', x => x.array).hasMaxLength(5);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('hasMaxLength -ve', () => {
    const model: ITestModel = getModelTemplate();
    model.array = ['1', '2'];
    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('array', x => x.array).hasMaxLength(1);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('hasMinLength', () => {
    const model: ITestModel = getModelTemplate();
    model.array = ['1', '2'];
    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('array', x => x.array)
          .hasMinLength(5)
          .when(x => x.string === 'string')
          .withMessage(ERROR_MESSAGE);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('hasMinLength -ve', () => {
    const model: ITestModel = getModelTemplate();
    model.array = ['1', '2'];
    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('array', x => x.array)
          .hasMinLength(50)
          .withMessage(value => `${value} is not valid`);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('when -ve', () => {
    const model: ITestModel = getModelTemplate();
    model.array = ['1', '2'];
    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('array', x => x.array)
          .hasMinLength(50)
          .when(x => x.string !== 'string')
          .withMessage(value => `${value} is not valid`);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('post when chain validations', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('number', x => x.number)
          .isEqualTo(1000)
          .when(x => x.string === 'string')
          .ruleForEach('array', x => x.objectArray)
          .ruleFor('name', x => x.name)
          .isNotEmpty();
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('post member chain validations', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('string', x => x.string)
          .hasMinLength(5)
          .ruleForEach('object', x => x.objectArray)
          .ruleFor('name', x => x.name)
          .isNotEmpty()
          .withMessage(ERROR_MESSAGE);
      }
    }

    const result = new ModelValidator().validate(model);

    expect(result.isValid).toEqual(true);
  });
});
