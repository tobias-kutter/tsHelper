import { guidHlpr, IGuidHelper } from './guid.helper';
import { IStringHelper, stringHlpr } from './string.helper';
import { ITypeHelper, typeHlpr } from './type.helper';

import { AvailableTypes } from './availableTypes.enum';
import { SystemEnvironment } from './systemEnvironment.enum';

export interface IHelperInstance {
    guid: IGuidHelper;
    string: IStringHelper;
    type: ITypeHelper;

    types: typeof AvailableTypes;
    environments: typeof SystemEnvironment;
}

// helpers
export const tshlp: IHelperInstance = {
    guid: guidHlpr,
    string: stringHlpr,
    type: typeHlpr,

    types: AvailableTypes,
    environments: SystemEnvironment
};