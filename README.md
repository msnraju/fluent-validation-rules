# Fluent Validation Rules
Helps you to write validation rules like writing in simple english language. 

## Installation
```
npm install @msnraju/fluent-validation-rules
```

## Example
```javascript
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
```

## API

### ruleFor
To apply rule on member of type like string, numbers, boolean, dates types

### ruleForObject
To apply rules on nested objects

### ruleForEach
To apply rules on array elements

### General Validation Functions
These validation functions are available for all data types.

- **isUndefined** - rule is valid, if the member is undefined.
- **isNotUndefined** - rule is valid, if the member is not undefined.
- **isNull** - rule is valid, if the member value of the member is null.
- **isNotNull** - rule is valid, if the member value of the member is not null.
- **mustBe(func)** - You can give function as argument, if function returns true then the rule is valid.

### Array / String Validation Functions
These validation functions are available for strings and arrays.

- **hasMaxLength(length)** - rule is valid, if the member has maximum of specified elements (for strings, elements are characters).
- **hasMinLength(length)** - rule is valid, if the member has minimum of specified elements
- **isEmpty** - rule is valid, if the member has no elements
- **isNotEmpty** - rule is valid, if the member has some elements.

### String Validation Functions
- **hasLength(min, max)** - rule is valid, if the member has minimum characters and not exceeding maximum characters
- **matches(expr)** - rule is valid, the regular expression is matching with the string member.

### String, Number, Date Validation Functions
- **isNotEqualTo(value)** - rule is valid, if the value is not equal to the member value
- **isEqualTo(value)** - rule is valid, if the value is equal to the member value

### Number Validations
- **isLessThan(value)** - rule is valid, if the value is less than the member value
- **isLessThanOrEqualTo** - rule is valid, if the value is less than or equals to the member value
- **isGreaterThan** - rule is valid, if the value is greater than the member value
- **isGreaterThanOrEqualTo** - rule is valid, if the value is greater than or equals to the member value
- **isBetween(from, to)** - rule is valid, if the member value is between from and to values.

### when(func)
You can conditionally execute rule by using when condition. 
You can pass a function to when that will return true / false whether to execute the rule or not.
If there is no when attached, the rule will be executed always.

example of when
```javascript
    .ruleFor('legs', x => x.legs)
    .isEqualTo(2)
    .when(x => x.name === 'duck')
```

### withMessage(message | func)
By default this library will generate standard error messages. If you want to change the error message, 
you can use this function to return custom error messages.
You can pass string as parameter. or You can pass function as parameter to compose error message for that rule.

example of function argument
```javascript
  .forRule('name', x => x.name)
  .isEqualTo('dog')
  .withMessage((name, animal) => 
     `Name should be equal to dog, but the name is ${name} and it has ${animal.legs}legs`);
```