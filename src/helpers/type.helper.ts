import { REGEX_GUID, REGEX_GUID_VALID } from '../constants';
import { AvailableTypes } from '../enumerations/availableTypes.enum';

function fnType(value: any): AvailableTypes {
    const varType: string = typeof value;

    if (varType === 'string') {
        return REGEX_GUID.test(value) ? AvailableTypes.Guid : AvailableTypes.String;
    } else if (varType === 'boolean') {
        return AvailableTypes.Boolean;
    } else if (varType === 'number') {
        return isNaN(value) ? AvailableTypes.NaN : AvailableTypes.Number;
    } else if (varType === 'function') {
        return AvailableTypes.Function;
    } else if (varType === 'object') {
        if (value === null) {
            return AvailableTypes.Null;
        }
        if (Array.isArray(value)) {
            return AvailableTypes.Array;
        }
        if (Object.prototype.toString.call(value) === '[object Date]') {
            return AvailableTypes.Date;
        }
        return AvailableTypes.Object;
    }
    return AvailableTypes.Undefined;
}

function fnTypeOfArr(value: any, expectedTypes: AvailableTypes[]): boolean {
    const varType: AvailableTypes = fnType(value);
    let isType = false;
    expectedTypes.forEach((expectedType) => {
        if (!isType) {
            isType =
                varType === expectedType ||
                (expectedType === AvailableTypes.String && varType === AvailableTypes.Guid);
        }
    });
    return isType;
}

function fnTypeOf(value: any, ...expectedTypes: AvailableTypes[]): boolean {
    return fnTypeOfArr(value, expectedTypes);
}

function fnNullOrUndef(value: any): boolean {
    return fnTypeOf(value, AvailableTypes.Null, AvailableTypes.NaN, AvailableTypes.Undefined, AvailableTypes.Unknown);
}

function fnIsDefined(value: any): boolean {
    return !fnNullOrUndef(value);
}

function fnIsArray(value: any): boolean {
    return fnTypeOf(value, AvailableTypes.Array);
}

function fnIsDate(value: any): boolean {
    return fnTypeOf(value, AvailableTypes.Date) && fnIsDateValid(value);
}

function fnIsDateValid(value: any): boolean {
    const dateWrapper = new Date(value);
    return !isNaN(dateWrapper.getDate());
}

function fnIsFunction(value: any): boolean {
    return fnTypeOf(value, AvailableTypes.Function);
}

function fnIsGuid(value: any, allowEmptyGuid?: boolean): boolean {
    if (!fnTypeOf(allowEmptyGuid, AvailableTypes.Boolean)) {
        allowEmptyGuid = true;
    }
    const isGuid = fnTypeOf(value, AvailableTypes.Guid);
    return allowEmptyGuid ? isGuid : isGuid && REGEX_GUID_VALID.test(value);
}

function fnIsNumber(value: any): boolean {
    return fnTypeOf(value, AvailableTypes.Number);
}

function fnIsObject(value: any): boolean {
    return fnTypeOf(value, AvailableTypes.Object);
}

function fnIsString(value: any, checkEmptyString?: boolean): boolean {
    if (!fnTypeOf(checkEmptyString, AvailableTypes.Boolean)) {
        checkEmptyString = false;
    }
    const isTypeOf = fnTypeOf(value, AvailableTypes.String);
    return checkEmptyString ? isTypeOf && (value as string).length > 0 : isTypeOf;
}

function fnAreDefined(...values: any[]): boolean {
    let defined = true;
    values.forEach((item) => {
        if (defined) {
            defined = fnIsDefined(item);
        }
        if (!defined) {
            return;
        }
    });
    return defined;
}

export interface ITypeHelper {
    areDefined: (...variables: any[]) => boolean;
    isArray: (variable: any) => boolean;
    isDate: (variable: any) => boolean;
    isDateValid: (variable: any) => boolean;
    isDefined: (variable: any) => boolean;
    isFunction: (fn: any) => boolean;
    isGuid: (variable: any, allowEmptyGuid?: boolean) => boolean;
    isNumber: (variable: any) => boolean;
    isObject: (variable: any) => boolean;
    isString: (variable: any, checkEmptyString?: boolean) => boolean;
    nullOrUndef: (variable: any) => boolean;
    type: (variable: any) => AvailableTypes;
    typeOf: (variable: any, ...expectedTypes: AvailableTypes[]) => boolean;
    typeOfArr: (variable: any, expectedTypes: AvailableTypes[]) => boolean;
}

export const typeHelper: ITypeHelper = {
    areDefined: fnAreDefined,
    isArray: fnIsArray,
    isDate: fnIsDate,
    isDateValid: fnIsDateValid,
    isDefined: fnIsDefined,
    isFunction: fnIsFunction,
    isGuid: fnIsGuid,
    isNumber: fnIsNumber,
    isObject: fnIsObject,
    isString: fnIsString,
    nullOrUndef: fnNullOrUndef,
    type: fnType,
    typeOf: fnTypeOf,
    typeOfArr: fnTypeOfArr
};