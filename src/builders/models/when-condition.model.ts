import { IPostWhenConditionBuilder } from './post-when-condition-builder.model';
import { WhenConditionFunc } from '../../types';

export interface IWhenConditionBuilder<T> {
    when(func: WhenConditionFunc<T>): IPostWhenConditionBuilder<T>;
}

