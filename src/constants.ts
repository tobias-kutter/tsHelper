export const REGEX_GUID: RegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const REGEX_GUID_EMPTY: RegExp = /^0{8}-0{4}-0{4}-0{4}-0{12}$/i;

export const REGEX_GUID_VALID_SEG1: RegExp = /^[0-9a-f]{8}$/i;
export const REGEX_GUID_VALID_SEG2: RegExp = /^[0-9a-f]{4}$/i;
export const REGEX_GUID_VALID_SEG3: RegExp = /^[1-5][0-9a-f]{3}$/i;
export const REGEX_GUID_VALID_SEG4: RegExp = /^[89ab][0-9a-f]{3}$/i;
export const REGEX_GUID_VALID_SEG5: RegExp = /^[0-9a-f]{12}$/i;

export const REGEX_GUID_VALID: RegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export const GUID_EMPTY: string = '00000000-0000-0000-0000-000000000000';