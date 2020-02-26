import { IMemberValidatorBuilder } from './member-validator-builder.model';
import { IEqualityValidatorBuilder } from './equality-validator-builder.model';
import { ICompareValidatorBuilder } from './compare-validator-builder.model';

export interface INumberValidatorBuilder<T, TType> extends IMemberValidatorBuilder<T, TType>, IEqualityValidatorBuilder<T, TType>, ICompareValidatorBuilder<T, TType> {

}
