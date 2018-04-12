import { RegExpCollection } from '../constants';
import { SystemEnvironment } from '../enumerations/systemEnvironment.enum';

declare const navigator: Navigator;
declare const window: {
    [key: string]: any;
    prototype: Window;
    new(): Window;
};

function fnGetSystem(): SystemEnvironment {
    if (!window && !navigator) {
        return SystemEnvironment.Unknown;
    }

    const userAgent: string = navigator.userAgent || navigator.vendor || window['opera'];

    if (RegExpCollection.system.WINDOWS_MOBILE.test(userAgent)) {
        return SystemEnvironment.WindowsPhone;
    }

    if (RegExpCollection.system.ANDROID.test(userAgent)) {
        return SystemEnvironment.Android;
    }

    if (RegExpCollection.system.IOS.test(userAgent) && !window['MSStream']) {
        return SystemEnvironment.iOS;
    }

    if (RegExpCollection.system.OTHER.test(userAgent)) {
        return SystemEnvironment.Other;
    }

    return SystemEnvironment.Desktop;
}

function fnIsMobile(): boolean {
    const system = fnGetSystem();
    return system !== SystemEnvironment.Desktop && system !== SystemEnvironment.Unknown;
}

export interface IEnvironmentHelper {
    /**
     * Check if os is a mobile one ('iOS', 'Android', 'Windows Phone').
     *
     * @returns {boolean} isMobile
     */
    isMobile: () => boolean;

    /**
     * Determine the used operating system.
     *
     * @returns {SystemEnvironment}
     */
    usedSystem: () => SystemEnvironment;
}

export const envHelper: IEnvironmentHelper = {
    isMobile: fnIsMobile,
    usedSystem: fnGetSystem
};