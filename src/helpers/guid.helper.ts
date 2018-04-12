import { GUID_EMPTY, RegExpCollection } from '../constants';

function fnRandomHexVal(matches?: RegExp): string {
    const generate: () => string = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    let randHex = generate();

    if (matches) {
        while (!matches.test(randHex)) {
            randHex = generate();
        }
    }

    return randHex;
}

function fnGenerate(): string {
    const segmentA = `${fnRandomHexVal()}${fnRandomHexVal()}`;
    const segmentB = fnRandomHexVal();
    const segmentC = fnRandomHexVal(RegExpCollection.guid.segments.SEGMENT3);
    const segmentD = fnRandomHexVal(RegExpCollection.guid.segments.SEGMENT4);
    const segmentE = `${fnRandomHexVal()}${fnRandomHexVal()}${fnRandomHexVal()}`;

    return `${segmentA}-${segmentB}-${segmentC}-${segmentD}-${segmentE}`;
}

function fnIsEmptyGuid(guid: string): boolean {
    return guid === GUID_EMPTY || RegExpCollection.guid.EMPTY.test(guid);
}

function fnIsValidGuid(guid: string): boolean {
    return guid !== GUID_EMPTY && RegExpCollection.guid.VALID.test(guid);
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

export const guidHelper: IGuidHelper = {
    emptyGuid: GUID_EMPTY,
    generate: fnGenerate,
    isEmptyGuid: fnIsEmptyGuid,
    isValidGuid: fnIsValidGuid,
    pattern: {
        empty: RegExpCollection.guid.EMPTY,
        general: RegExpCollection.guid.GENERAL,
        valid: RegExpCollection.guid.VALID
    }
};