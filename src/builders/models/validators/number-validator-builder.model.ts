import { IMemberValidatorBuilder } from './member-validator-builder.model';
import { IEqualityValidatorBuilder } from './equality-validator-builder.model';
import { NUMBER_TYPES } from '../../../types';
import { ICompareValidatorBuilder } from './compare-validator-builder.model';

export interface INumberValidatorBuilder<T> extends IMemberValidatorBuilder<T, NUMBER_TYPES>, IEqualityValidatorBuilder<T, NUMBER_TYPES>, ICompareValidatorBuilder<T, NUMBER_TYPES> {

}
