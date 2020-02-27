import { AbstractValidator } from '../src/abstract-validator';
import { ITestModel, getModelTemplate } from './prepare';

describe('String Tests', () => {
  it('isNull', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('string', x => x.string).isNull();
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('isNotNull', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('string', x => x.string).isNotNull();
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('isEmpty', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('string', x => x.string).isEmpty();
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('isNotEmpty', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('string', x => x.string).isNotEmpty();
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('isEqualTo', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('string', x => x.string).isEqualTo('string');
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('isEqualTo -ve', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('string', x => x.string).isEqualTo('string2');
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('isNotEqualTo', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('string', x => x.string)
          .isNotEqualTo('string2');
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('isNotEqualTo -ve', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('string', x => x.string).isNotEqualTo('string');
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('hasLength', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('string', x => x.string).hasLength(6, 6);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('hasMaxLength', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('string', x => x.string).hasMaxLength(10);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('hasMinLength', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('string', x => x.string).hasMinLength(10);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('mustBe', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('string', x => x.string)
          .mustBe(value => value === 'string');
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('matches', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('string', x => x.string).matches(/[a-z]+/);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('matches -ve', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('string', x => x.string).matches(/[0-9]+/);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });
});
