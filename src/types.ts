export type WithMessageFunc<T, TType> = (value: TType, model: T) => string;
export type WithMessageFuncArgument<T, TType> = WithMessageFunc<T, TType> | string;
export type MustBeFunc<T> = (value: any, customer: T) => boolean;

export type MemberFunc<T, TType> = (m: T) => TType;
export type WhenConditionFunc<T> = (m: T) => boolean;
export type ValidatorFunc<T, TType> = (model: T, property: MemberFunc<T, TType>) => boolean;

export type STRING_TYPES = String | string | null | undefined;
export type NUMBER_TYPES = Number | number | null | undefined;
export type DATE_TYPES = Date | null | undefined;
export type BOOLEAN_TYPES = Boolean | boolean | null | undefined;
export type OBJECT_TYPES = Object | object | null | undefined;
export type ARRAY_TYPES = Array<any> | null | undefined;

