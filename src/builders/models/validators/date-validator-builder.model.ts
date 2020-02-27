import { IMemberValidatorBuilder } from './member-validator-builder.model';
import { IEqualityValidatorBuilder } from './equality-validator-builder.model';
import { ICompareValidatorBuilder } from './compare-validator-builder.model';

export interface IDateValidatorBuilder<T, TType>
  extends IMemberValidatorBuilder<T, TType>,
    IEqualityValidatorBuilder<T, TType>,
    ICompareValidatorBuilder<T, TType> {}
