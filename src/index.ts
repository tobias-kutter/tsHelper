import { guidHlpr, IGuidHelper } from './helpers/guid.helper';
import { IStringHelper, stringHlpr } from './helpers/string.helper';
import { ITypeHelper, typeHlpr } from './helpers/type.helper';

import { AvailableTypes } from './enumerations/availableTypes.enum';
import { SystemEnvironment } from './enumerations/systemEnvironment.enum';

export interface IHelperInstance {
    guid: IGuidHelper;
    string: IStringHelper;
    type: ITypeHelper;

    types: typeof AvailableTypes;
    environments: typeof SystemEnvironment;
}

export class HelperInstance implements IHelperInstance {

    public readonly guid: IGuidHelper;
    public readonly string: IStringHelper;
    public readonly type: ITypeHelper;

    public readonly types: typeof AvailableTypes;
    public readonly environments: typeof SystemEnvironment;

    public constructor() {
        this.guid = guidHlpr;
        this.string = stringHlpr;
        this.type = typeHlpr;

        this.types = AvailableTypes;
        this.environments = SystemEnvironment;
    }
}

// helpers
export const tshlp: IHelperInstance = new HelperInstance();