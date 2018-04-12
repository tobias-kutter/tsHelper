import { envHelper } from '../src/helpers/environment.helper';
import { before, describe, expect, it, ITestConstants, MockBrowser, TestConstants, testValid } from './_TestBase';

const con: ITestConstants = new TestConstants();

declare const global: any;

/* tslint:disable:no-unused-expression */

describe('envHelper', () => {
    before(() => {
        const win: Window = MockBrowser.createWindow();
        global.window = win;
        global.navigator = win.navigator;
    });

    testValid(envHelper, 'object');

    describe('.isMobile', () => {
        testValid(envHelper.isMobile, 'function');

        it('should return ', () => {
            expect(envHelper.isMobile()).to.be.equal(false);
        });
    });

    describe('.usedSystem', () => {
        testValid(envHelper.usedSystem, 'function');
    });
});