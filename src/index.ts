import { guidHelper, IGuidHelper } from './helpers/guid.helper';
import { IStringHelper, stringHelper } from './helpers/string.helper';
import { ITypeHelper, typeHelper } from './helpers/type.helper';

import { AvailableTypes } from './enumerations/availableTypes.enum';
import { SystemEnvironment } from './enumerations/systemEnvironment.enum';

export interface IHelperInstance {
    guid: IGuidHelper;
    string: IStringHelper;
    type: ITypeHelper;

    types: typeof AvailableTypes;
    environments: typeof SystemEnvironment;

    isDef: (value: any) => boolean;
    areDef: (...values: any[]) => boolean;
}

export class HelperInstance implements IHelperInstance {

    public readonly guid: IGuidHelper;
    public readonly string: IStringHelper;
    public readonly type: ITypeHelper;

    public readonly types: typeof AvailableTypes;
    public readonly environments: typeof SystemEnvironment;

    public readonly isDef: (value: any) => boolean;
    public readonly areDef: (...values: any[]) => boolean;

    public constructor() {
        this.guid = guidHelper;
        this.string = stringHelper;
        this.type = typeHelper;

        this.types = AvailableTypes;
        this.environments = SystemEnvironment;

        // link shortcut functions
        this.isDef = typeHelper.isDefined;
        this.areDef = typeHelper.areDefined;
    }
}

// helpers
export const tshlp: IHelperInstance = new HelperInstance();