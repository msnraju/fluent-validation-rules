import { IMemberValidatorBuilder } from './member-validator-builder.model';
import { DATE_TYPES } from '../../../types';
import { IEqualityValidatorBuilder } from './equality-validator-builder.model';
import { ICompareValidatorBuilder } from './compare-validator-builder.model';

export interface IDateValidatorBuilder<T> extends IMemberValidatorBuilder<T, DATE_TYPES>, IEqualityValidatorBuilder<T, DATE_TYPES>, ICompareValidatorBuilder<T, DATE_TYPES> {
}
