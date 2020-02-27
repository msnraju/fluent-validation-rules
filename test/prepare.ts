export interface ITestModel {
    string: string;
    nullableString: string | null;
    optionalString?: string;
    optionalNullableString?: string | null;

    stringObj: String;
    nullableStringObj: String | null;
    optionalStringObj?: String;
    optionalNullableStringObj?: String | null;

    number: number;
    nullableNumber: number | null;
    optionalNumber?: number;
    optionalNullableNumber?: number | null;

    numberObj: Number;
    nullableNumberObj: Number | null;
    optionalNumberObj?: Number;
    optionalNullableNumberObj?: Number | null;

    boolean: boolean;
    nullableBoolean: boolean | null;
    optionalBoolean?: boolean;
    optionalNullableBoolean?: boolean | null;

    booleanObj: Boolean;
    nullableBooleanObj: Boolean | null;
    optionalBooleanObj?: Boolean;
    optionalNullableBooleanObj?: Boolean | null;

    date: Date;
    nullableDate: Date | null;
    optionalDate?: Date;
    optionalNullableDate?: Date | null;
}

export const ERROR_MESSAGE = 'TEST MESSAGE';

export const getModelTemplate = (): ITestModel => {
    return {
        string: 'string',
        nullableString: null,
        stringObj: 'String',
        nullableStringObj: null,

        number: 1000,
        nullableNumber: null,
        nullableNumberObj: null,

        numberObj: 1000,

        boolean: true,
        nullableBoolean: null,
        booleanObj: true,
        nullableBooleanObj: null,

        date: new Date('01-01-2020'),
        nullableDate: null
    }
};
