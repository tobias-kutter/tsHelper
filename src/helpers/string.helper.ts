import { AvailableTypes } from '../enumerations/availableTypes.enum';
import { typeHelper } from './type.helper';

function concatWithSeparatorArr(separator: string, values: any[]): string {
    if (typeHelper.typeOf(values, AvailableTypes.Array) && values.length > 0) {
        return values
            .map((item) => typeHelper.nullOrUndef(item) ? '' : ('' + item))
            .filter((item) => ('' + item).length > 0)
            .join(separator);
    }
    return '';
}

function fnFormatArr(pattern: string, args: string[]): string {
    const regExp: RegExp = /{-?[0-9]+}/gi;
    return pattern.replace(regExp, (item) => {
        let replaceVal: string = '';
        const intVal = Number.parseInt(item.substring(1, item.length - 1), 10);
        if (intVal >= 0) {
            replaceVal = typeHelper.isString(args[intVal]) ? args[intVal] : '';
        }
        if (intVal === -1) {
            replaceVal = '{';
        }
        if (intVal === -2) {
            replaceVal = '}';
        }
        return replaceVal;
    });
}

function fnFormat(pattern: string, ...args: string[]): string {
    return fnFormatArr(pattern, args);
}

function fnCapitalize(value: string): string {
    const cap = value.length < 1 ? value : value.slice(0, 1).toUpperCase();
    return value.length < 2 ? cap : cap + value.slice(1);
}

function fnCapitalizeAll(value: string, splitChar?: string): string {
    const separator: string = typeHelper.isString(splitChar) ? ('' + splitChar) : ' ';
    return value.split(separator)
        .map((sub: string) => fnCapitalize(sub))
        .join(separator);
}

function fnReplaceAll(source: string, replaceMap: Map<string, string>, isKeyCaseSensitive?: boolean): string {
    let result = source;
    const regExpFlags = isKeyCaseSensitive ? 'g' : 'gi';
    replaceMap.forEach((value, key) => result = result.replace(new RegExp(key, regExpFlags), value));
    return result;
}

function fnConcat(...values: any[]): string {
    return concatWithSeparatorArr('', values);
}

function fnConcatWithSeparator(separator: string, values: any[]): string {
    return concatWithSeparatorArr(separator, values);
}

function fnTrimStart(value: string, char?: string): string {
    const character: string = typeHelper.isString(char) ? ('' + char) : ' ';
    let startIndex = 0;
    while (value[startIndex] === character) {
        startIndex++;
    }
    return value.substr(startIndex);
}

function fnTrimEnd(value: string, char?: string): string {
    const character: string = typeHelper.isString(char) ? ('' + char) : ' ';
    return value.replace(new RegExp((character + '+$'), 'g'), '');
}

function fnTrim(value: string, char?: string): string {
    const character: string = typeHelper.isString(char) ? ('' + char) : ' ';
    return fnTrimStart(fnTrimEnd(value, character), character);
}

function fnEquals(valueA: string, valueB: string, trimValues?: boolean, caseSensitive?: boolean): boolean {
    if (typeHelper.nullOrUndef(trimValues)) {
        trimValues = false;
    }
    if (typeHelper.nullOrUndef(caseSensitive)) {
        caseSensitive = true;
    }

    if (trimValues) {
        valueA = fnTrim(valueA);
        valueB = fnTrim(valueB);
    }

    if (!caseSensitive) {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
    }

    return valueA === valueB;
}

export interface IStringHelper {
    /**
     * This method capitalizes a string.
     * E.g. 'hello World' --> 'Hello World'
     *
     * @param {string} value value to capitalize
     * @returns {string} capitalized string value
     * @memberof StringHelper
     */
    capitalize: (value: string) => string;

    /**
     * This method capitalizes the entire string.
     * E.g. 'hello my pretty new World' --> 'Hello My Pretty New World'
     *
     * @param {string} value value to capitalize
     * @param {string} [splitChar=' '] spitting char (default: whitespace)
     * @memberof StringHelper
     */
    capitalizeAll: (value: string, splitChar?: string) => string;

    /**
     * concat values to a single string
     *
     * @param {...string[]} values values which should be concat
     * @returns {string} transformed string
     */
    concat: (...values: any[]) => string;

    /**
     * concat values to a single string using separator char
     *
     * @param {string} separator separator char
     * @param {...string[]} values values which should be concat
     * @returns {string} transformed string
     */
    concatSep: (separator: string, values: any[]) => string;

    /**
     * checks if two string contents are equal
     *
     * @param {string} valueA value A
     * @param {string} valueB value B
     * @param {boolean} [trimValues] check with trimmed values (default: false)
     * @param {boolean} [caseSensitive] check case sensitive (default: true)
     * @returns {boolean} Value A equals value B
     */
    equals: (valueA: string, valueB: string, trimValues?: boolean, caseSensitive?: boolean) => boolean;

    /**
     * string format function
     * ('She {1} {0}{2} by the {0}{3}. {-1}^.^{-2}', 'sea', 'sells', 'shells', 'shore') --> She sells seashells by the seashore. {^.^}
     *
     * @param {string} pattern string pattern with '{<index>}' e.g. '{0} World!'
     * @param {...string[]} args replacement arguments
     * @returns {string} formatted string value
     * @memberof StringHelper
     */
    format: (pattern: string, ...args: string[]) => string;

    /**
     * string format function
     * ('She {1} {0}{2} by the {0}{3}. {-1}^.^{-2}', 'sea', 'sells', 'shells', 'shore') --> She sells seashells by the seashore {^.^}
     *
     * @param {string} pattern string pattern with '{<index>}' e.g. '{0} World!'
     * @param {string[]} args replacement arguments as array
     * @returns {string} formatted string value
     * @memberof StringHelper
     */
    formatArr: (pattern: string, args: string[]) => string;

    /**
     * replaces all occurrences of map in a string value
     *
     * @param {string} source source string value
     * @param {Map<string, string>} replaceMap replacement map
     * @param {boolean} [isKeyCaseSensitive=false] flag if replacement should be case sensivive (default: false)
     * @returns {string} transformed string
     */
    replaceAll: (source: string, replaceMap: Map<string, string>, isKeyCaseSensitive?: boolean) => string;

    /**
     * Trim a string using character
     *
     * @param {string} value the untrimmed string
     * @param {string} char trimming character
     * @returns {string} trimmed string
     */
    trim(value: string, char?: string): string;

    /**
     * Trim a string at it's end using character
     *
     * @param {string} value the untrimmed string
     * @param {string} char trimming character
     * @returns {string} trimmed string
     */
    trimEnd(value: string, char?: string): string;

    /**
     * Trim a string at it's beginning using character
     *
     * @param {string} value the untrimmed string
     * @param {string} char trimming character
     * @returns {string} trimmed string
     */
    trimStart(value: string, char?: string): string;
}

export const stringHelper: IStringHelper = {
    capitalize: fnCapitalize,
    capitalizeAll: fnCapitalizeAll,
    concat: fnConcat,
    concatSep: fnConcatWithSeparator,
    equals: fnEquals,
    format: fnFormat,
    formatArr: fnFormatArr,
    replaceAll: fnReplaceAll,
    trim: fnTrim,
    trimEnd: fnTrimEnd,
    trimStart: fnTrimStart
};