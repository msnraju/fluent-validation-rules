import { AbstractValidator } from '../src/abstract-validator';
import { ITestModel, getModelTemplate } from './prepare';

describe('Number Tests', () => {
  it('isNull', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('number', x => x.number).isNull();
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
        this.validation.ruleFor('number', x => x.number).isNotNull();
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
        this.validation.ruleFor('number', x => x.number).isEqualTo(1000);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('isNotEqualTo', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('number', x => x.number).isNotEqualTo(100);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('mustBe', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('number', x => x.number)
          .mustBe(value => value === 1000);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('isLessThan', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('number', x => x.number).isLessThan(1100);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('isLessThan -ve', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('number', x => x.number).isLessThan(110);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('isLessThanOrEqualTo', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('number', x => x.number)
          .isLessThanOrEqualTo(1000);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('isLessThanOrEqualT -veo', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('number', x => x.number)
          .isLessThanOrEqualTo(200);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('isGreaterThan', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('number', x => x.number).isGreaterThan(100);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('isGreaterThan -ve', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('number', x => x.number).isGreaterThan(10000);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('isGreaterThanOrEqualTo', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('number', x => x.number)
          .isGreaterThanOrEqualTo(1000);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('isGreaterThanOrEqualTo -ve', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('number', x => x.number)
          .isGreaterThanOrEqualTo(10000);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('isBetween', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('number', x => x.number).isBetween(100, 1100);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('isBetween -ve', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('number', x => x.number)
          .isBetween(20000, 25000);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });
});
