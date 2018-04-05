import { GUID_EMPTY, REGEX_GUID, REGEX_GUID_EMPTY, REGEX_GUID_VALID } from './constants';
import { stringHlpr } from './string.helper';

function fnPad4(num: number): string {
    let ret: string = num.toString(16);
    while (ret.length < 4) {
        ret = '0' + ret;
    }
    return ret;
}

function fnRandomVal(buf: Uint16Array | undefined, idx: number): string {
    if (typeof (buf) !== 'undefined' && buf !== null && idx >= 0) {
        return fnPad4(buf[idx]);
    }
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

function fnGenerate(): string {
    const pattern: string = '{0}{1}-{2}-{3}-{4}-{5}{6}{7}';
    let buf: Uint16Array | undefined;

    if (typeof (window) !== 'undefined' &&
        typeof (window.crypto) !== 'undefined' &&
        typeof (window.crypto.getRandomValues) !== 'undefined') {
        buf = new Uint16Array(8);
        window.crypto.getRandomValues(buf);
    }

    return stringHlpr.format(pattern,
        fnRandomVal(buf, 0), fnRandomVal(buf, 1),
        fnRandomVal(buf, 2),
        fnRandomVal(buf, 3),
        fnRandomVal(buf, 4),
        fnRandomVal(buf, 5), fnRandomVal(buf, 6), fnRandomVal(buf, 7));
}

function fnIsEmptyGuid(guid: string): boolean {
    return guid === GUID_EMPTY || REGEX_GUID_EMPTY.test(guid);
}

function fnIsValidGuid(guid: string): boolean {
    return guid !== GUID_EMPTY && REGEX_GUID_VALID.test(guid);
}

export interface IGuidPatternCollection {
    empty: RegExp;
    general: RegExp;
    valid: RegExp;
}

export interface IGuidHelper {
    emptyGuid: string;
    generate: () => string;
    isEmptyGuid: (guid: string) => boolean;
    isValidGuid: (guid: string) => boolean;
    pattern: IGuidPatternCollection;
}

export const guidHlpr: IGuidHelper = {
    emptyGuid: GUID_EMPTY,
    generate: fnGenerate,
    isEmptyGuid: fnIsEmptyGuid,
    isValidGuid: fnIsValidGuid,
    pattern: {
        empty: REGEX_GUID_EMPTY,
        general: REGEX_GUID,
        valid: REGEX_GUID_VALID
    }
};