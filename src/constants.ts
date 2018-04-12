export interface IRegExpConstantsGuidSegments {
    SEGMENT1: RegExp;
    SEGMENT2: RegExp;
    SEGMENT3: RegExp;
    SEGMENT4: RegExp;
    SEGMENT5: RegExp;
}

export interface IRegExpConstantsGuid {
    GENERAL: RegExp;
    EMPTY: RegExp;
    VALID: RegExp;
    segments: IRegExpConstantsGuidSegments;
}

const guidObj: IRegExpConstantsGuid = {
    GENERAL: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
    EMPTY: /^0{8}-0{4}-0{4}-0{4}-0{12}$/i,
    VALID: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    segments: {
        SEGMENT1: /^[0-9a-f]{8}$/i,
        SEGMENT2: /^[0-9a-f]{4}$/i,
        SEGMENT3: /^[1-5][0-9a-f]{3}$/i,
        SEGMENT4: /^[89ab][0-9a-f]{3}$/i,
        SEGMENT5: /^[0-9a-f]{12}$/i
    }
};

export interface IRegExpConstantsSystem {
    ANDROID: RegExp;
    IOS: RegExp;
    OTHER: RegExp;
    WINDOWS_MOBILE: RegExp;
}

const systemObj: IRegExpConstantsSystem = {
    ANDROID: /android/i,
    IOS: /iPad|iPhone|iPod/i,
    OTHER: /webos|opera mini|blackberry/i,
    WINDOWS_MOBILE: /windows phone|iemobile/i
};

export interface IRegExpConstants {
    guid: IRegExpConstantsGuid;
    system: IRegExpConstantsSystem;
}

export const GUID_EMPTY: string = '00000000-0000-0000-0000-000000000000';
export const RegExpCollection: IRegExpConstants = {
    guid: guidObj,
    system: systemObj
};