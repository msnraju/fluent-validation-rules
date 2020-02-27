import { AbstractValidator } from '../src/index';
import { ITestModel, getModelTemplate } from './prepare';

describe('Boolean Tests', () => {
  it('isTrue', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('boolean', x => x.boolean).isTrue();
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('isTrue -ve', () => {
    const model: ITestModel = getModelTemplate();
    model.boolean = false;
    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('boolean', x => x.boolean).isTrue();
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('isFalse', () => {
    const model: ITestModel = getModelTemplate();
    model.boolean = false;
    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('boolean', x => x.boolean).isFalse();
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('isFalse -ve', () => {
    const model: ITestModel = getModelTemplate();
    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('boolean', x => x.boolean).isFalse();
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });
});
