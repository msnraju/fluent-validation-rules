import { AbstractValidator } from '../src/abstract-validator';
import { ITestModel, getModelTemplate, ERROR_MESSAGE } from './prepare';

describe('Object Tests', () => {
  it('object member isEqualTo', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleForObject('object', x => x.object)
          .ruleFor('name', x => x.name)
          .isEqualTo('name');
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('object member isEqualTo when', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleForObject('object', x => x.object)
          .ruleFor('name', x => x.name)
          .isEqualTo('name')
          .when(x => x.name === 'name')
          .withMessage(ERROR_MESSAGE);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('object member isEqualTo when', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleForEach('object', x => x.objectArray)
          .ruleFor('name', x => x.name)
          .isEqualTo('name')
          .when(x => x.name !== 'name')
          .withMessage(ERROR_MESSAGE);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('post when', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();

        this.validation
          .ruleFor('string', x => x.string)
          .hasMaxLength(50)
          .when(x => x.optionalString === undefined)
          .ruleForObject('array', x => x.object)
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
          .ruleFor('object', x => x.object)
          .isNotNull()
          .ruleForObject('object', x => x.object)
          .ruleFor('name', x => x.name)
          .isEmpty()
          .withMessage(ERROR_MESSAGE);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });
});
