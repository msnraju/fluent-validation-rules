import { AbstractFluentValidator } from '../src/abstract-fluent-validator';
import { ITestModel, getModelTemplate, ERROR_MESSAGE } from './prepare';

describe('String Tests', () => {
  it('isNull', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractFluentValidator<ITestModel> {
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

    class ModelValidator extends AbstractFluentValidator<ITestModel> {
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

    class ModelValidator extends AbstractFluentValidator<ITestModel> {
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

    class ModelValidator extends AbstractFluentValidator<ITestModel> {
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

    class ModelValidator extends AbstractFluentValidator<ITestModel> {
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

    class ModelValidator extends AbstractFluentValidator<ITestModel> {
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

    class ModelValidator extends AbstractFluentValidator<ITestModel> {
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

    class ModelValidator extends AbstractFluentValidator<ITestModel> {
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

    class ModelValidator extends AbstractFluentValidator<ITestModel> {
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

    class ModelValidator extends AbstractFluentValidator<ITestModel> {
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

    class ModelValidator extends AbstractFluentValidator<ITestModel> {
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

    class ModelValidator extends AbstractFluentValidator<ITestModel> {
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

    class ModelValidator extends AbstractFluentValidator<ITestModel> {
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

    class ModelValidator extends AbstractFluentValidator<ITestModel> {
      constructor() {
        super();
        this.validation.ruleFor('string', x => x.string).matches(/[0-9]+/);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('chain validations', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractFluentValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('string', x => x.string)
          .hasMinLength(5)
          .when(x => x.optionalString === undefined)
          .ruleFor('string', x => x.string)
          .hasMaxLength(50)
          .withMessage(ERROR_MESSAGE);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(true);
  });

  it('empty model', () => {
    class ModelValidator extends AbstractFluentValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('string', x => x.string)
          .hasMinLength(5)
          .withMessage(ERROR_MESSAGE);
      }
    }

    const result = new ModelValidator().validate(null as any);
    expect(result.isValid).toEqual(false);
  });

  it('message function', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractFluentValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('string', x => x.string)
          .isEmpty()
          .withMessage((value, m) => `${value} = ${m.string}`);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('message function', () => {
    const model: ITestModel = getModelTemplate();

    class ModelValidator extends AbstractFluentValidator<ITestModel> {
      constructor() {
        super();
        this.validation
          .ruleFor('string', x => x.string)
          .isEmpty()
          .withMessage((value, m) => `${value} = ${m.string}`);
      }
    }

    const result = new ModelValidator().validate(model);
    expect(result.isValid).toEqual(false);
  });

  it('tiger', () => {
    interface IAnimal {
      name: string;
      legs: number;
      canFly: boolean;
      canWalk: boolean;
    }

    const tiger: IAnimal = {
      name: 'tiger',
      legs: 4,
      canFly: false,
      canWalk: true,
    };

    class AnimalValidator extends AbstractFluentValidator<IAnimal> {
      constructor() {
        super();
        this.validation
          .ruleFor('legs', x => x.legs)
          .isEqualTo(4)
          .when(x => x.name === 'tiger') // when condition is optional
          .withMessage('Tiger should have 4 legs') // message is optional
          .ruleFor('canFly', x => x.canFly)
          .isFalse()
          .withMessage('Tigers cant fly')
          .ruleFor('canWalk', x => x.canWalk)
          .isTrue()
          .withMessage('Tigers can walk');
      }
    }

    const result = new AnimalValidator().validate(tiger);
    console.log(result.isValid);
    console.log(result.errors);

    const bird: IAnimal = {
      name: 'duck',
      legs: 2,
      canFly: true,
      canWalk: true,
    };

    class BirdValidator extends AbstractFluentValidator<IAnimal> {
      constructor() {
        super();
        this.validation
          .ruleFor('legs', x => x.legs)
          .isEqualTo(2)
          .when(x => x.name === 'duck')
          .ruleFor('canFly', x => x.canFly)
          .isTrue()
          .ruleFor('canWalk', x => x.canWalk)
          .isTrue();
      }
    }

    const birdResult = new BirdValidator().validate(bird);
    console.log(birdResult.isValid);
    console.log(birdResult.errors);
  });
});
